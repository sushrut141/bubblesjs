import {isDefined, isUndefined} from '../../data/common';
import {createElem, getMountPoint} from '../common';
import { COMPARATOR_PREDICATE_MAP } from './common';
import {FilterWidget} from './filter_widget';
import './filter.css';

/**
 * Renders a FilteBar that allows filtering data based on fields present in the data.
 * 
 * @param {BubbbleView} params.bubbleView Bubble view instance that created this view.
 * @param {Object} params.viewConfig View configuration for the filter bubble.
 * @param {Array<Object>} params.data Data array to visualize with bubbles.
 */
export function FilterView(params) {
    this._bubbleView = params.bubbleView;
    this._viewConfig = params.viewConfig;
    this._data = params.data;
    this._elem$ = undefined;
    this._filterWidget = undefined;
    this._filters = [];
    this._filters$ = [];
    this._render();
}

FilterView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = viewConfig;
    }
    this._render();
};

FilterView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (isDefined(this.elem$)) {
        root$.removeChild(this.elem$);
    }
    const elem$ = createElem('div', {
        class: 'bubbles bubbles-filter'
    });
    elem$.addEventListener('click', function () {
        if (isUndefined(this._filterWidget)) {
            const filterWidget = new FilterWidget({
                viewConfig: this._viewConfig,
                data: this._data,
                onConfirm: (appliedFilter) => {
                    if (isDefined(appliedFilter)) {
                        this._filters.push(appliedFilter);
                        this._createFilterPills();
                        this._updateParentBubble();
                    }
                    elem$.removeChild(this._filterWidget.getRootNode());
                    this._filterWidget = undefined;
                },
                onCancel: () => {
                    elem$.removeChild(this._filterWidget.getRootNode());
                    this._filterWidget = undefined;
                },
            });
            elem$.appendChild(filterWidget.getRootNode());
            this._filterWidget = filterWidget;
        }
    }.bind(this));
    this._elem$ = elem$;
    root$.appendChild(this._elem$);
};

FilterView.prototype._updateParentBubble = function () {
    let data = this._data;
    for (let i = 0; i < this._filters.length; i += 1) {
        let temp = [];
        for (let j = 0; j < data.length; j += 1) {
            const tuple = data[j];
            const field = this._filters[i].field;
            const comparator = this._filters[i].comparator;
            const value = this._filters[i].value;
            const predicate = COMPARATOR_PREDICATE_MAP[comparator];
            if (predicate(value, tuple[field])) {
                temp.push(tuple);
            }
        }
        data = temp;
    }
    for (let i = 0; i < this._bubbleView._children.length; i += 1) {
        const childBubble = this._bubbleView._children[i];
        childBubble.update(data);
    }
};

FilterView.prototype._createFilterPills = function () {
    for (let i = this._filters$.length; i < this._filters.length; i += 1) {
        const onClick = (evt) => {
            evt.stopPropagation();
            const filterToRemove$ = this._filters$[i];
            this._filters = this._filters.filter((_, idx) => idx !== i);
            this._filters$ = this._filters$.filter((_, idx) => idx !== i);
            this._elem$.removeChild(filterToRemove$);
            this._updateParentBubble();
        };
        const filter = this._filters[i];
        const filter$ = createElem('div', {
            class: 'bubbles-filter-pill',
        });
        const fields$ = createElem('div', {
            class: 'bubbles-filter-pill__label'
        }, `${filter.field} ${filter.comparator} ${filter.value}`);
        const close$ = createElem('button', {
            class: 'bubbles-filter-pill__close'
        }, 'x');
        close$.addEventListener('click', onClick);
        filter$.appendChild(fields$);
        filter$.appendChild(close$);
        this._filters$.push(filter$);
        this._elem$.appendChild(filter$);
    }
};