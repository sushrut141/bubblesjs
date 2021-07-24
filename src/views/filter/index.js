import {isDefined, isUndefined} from '../../data/common';
import {createElem, getMountPoint} from '../common';
import { COMPARATOR_PREDICATE_MAP } from './common';
import {FilterWidget} from './filter_widget';

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