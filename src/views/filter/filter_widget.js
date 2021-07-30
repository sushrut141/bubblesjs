import {isDefined, isUndefined, getFieldValues} from '../../data/common';
import {createDropdown, createElem} from '../common';
import {TYPE_COMPARATOR_MAP} from './common'

/**
 * Renders a Filter widget that allows users to select the field, comparator and value.
 * 
 * @param {Function} params.onConfirm Callback to execute with applied filter.
 * @param {Function} params.onCancel Callback to execute when no filter applied.
 * @param {Object} params.viewConfig View configuration for the filter bubble.
 * @param {Object} params.viewConfig.types Map of field name to field type.
 */
export function FilterWidget(params) {
    this._viewConfig = params.viewConfig;
    this._data = params.data;
    this._fields = Object.keys(this._viewConfig.types);
    this._field = undefined;
    this._comparator = undefined;
    this._value = undefined;
    this._onConfirm = params.onConfirm;
    this._onCancel = params.onCancel;
    // DOM elements
    this._mount$ = undefined;
    this._fieldSelector$ = undefined;
    this._comparatorSelector$ = undefined;
    this._valueSelector$ = undefined;
    this._actionsContainer$ = undefined;
    // initialize nodes
    this._render();
}

/**
 * Returns the root node for the filter widget.
 */
FilterWidget.prototype.getRootNode = function () {
    return this._mount$;
};

FilterWidget.prototype._getFilterValues = function () {
    if (this._isValid()) {
        return {
            field: this._field,
            comparator: this._comparator,
            value: this._value,
        };
    }
    return null;
};

FilterWidget.prototype._isValid = function () {
    return (
        isDefined(this._field) &&
        isDefined(this._comparator) &&
        isDefined(this._value)
    );
};

FilterWidget.prototype._render = function () {
    if (isUndefined(this._mount$)) {
        this._mount$ = createElem('div', {
            class: 'bubbles-filter-widget'
        });
    }
    if (isUndefined(this._field)) {
        // this._createFieldSelector();
        this._fieldSelector$ = createDropdown({
            name: 'Field',
            fields: this._fields,
            onSelect: (item) => {
                this._field = item;
                this._render();
            },
        });
        this._fieldSelector$.click();
        this._mount$.appendChild(this._fieldSelector$);
        return;
    }
    if (this._mount$.contains(this._fieldSelector$)) {
        this._mount$.removeChild(this._fieldSelector$);
    }
    this._mount$.classList.add('bubbles-filter-widget--selected');
    this._createFieldHeader();
    this._createComparatorSelector();
    this._createValueBox();
    this._createActionButtons();
    this._mount$.appendChild(this._fieldHeader$);
    this._mount$.appendChild(this._comparatorSelector$);
    this._mount$.appendChild(this._valueSelector$);
    this._mount$.appendChild(this._actionsContainer$);
};

FilterWidget.prototype._createComparatorSelector = function () {
    if (isDefined(this._field) && isUndefined(this._comparatorSelector$)) {
        const fieldType = this._viewConfig.types[this._field];
        const comparators = TYPE_COMPARATOR_MAP[fieldType];
        this._comparator = comparators[0];
        this._comparatorSelector$ = createDropdown({
            name: this._comparator,
            fields: comparators,
            value: this._value,
            onSelect: (comparator) => {
                this._comparator = comparator;
            },
        });
    }
};

FilterWidget.prototype._createValueBox = function () {
    if (isDefined(this._valueSelector$)) {
        this._mount$.removeChild(this._valueSelector$);
    }
    const fieldType = this._viewConfig.types[this._field] || 'string';
    const onValueChange = (evt) => {
        this._value = fieldType === 'string' ? evt.target.value : parseFloat(evt.target.value);
        this._render();
    };
    if (fieldType === 'number') {
        this._valueSelector$ = createElem('input', {
            class: 'bubbles-filter-value bubbles-input bubbles-input--number',
            type: 'number',
        });
        this._valueSelector$.value = this._value;
        this._valueSelector$.addEventListener('change', onValueChange);
    } else {
        const values = getFieldValues(this._data, this._field);
        if (isUndefined(this._value)) {
            this._value = values.length > 0 ? values[0] : '';
        }
        const valueSelector$ = createDropdown({
            name: this._value,
            fields: values,
            value: this._value,
            onSelect: (value) => {
                this._value = fieldType === 'string' ? value : parseFloat(value);
                this._render();
            },
        });
        this._valueSelector$ = valueSelector$;
    }
};

FilterWidget.prototype._createActionButtons = function () {
    if (isDefined(this._actionsContainer$)) {
        this._mount$.removeChild(this._actionsContainer$);      
    }
    const container$ = createElem('div', {
        class: 'bubbles-filter-widget-actions',
    });
    const applyButton$ = createElem('button', {
        class: 'bubbles-button bubbles-button--primary',
    }, 'Apply');
    applyButton$.disabled = isUndefined(this._value);
    const cancelButton$ = createElem('button', {
        class: 'bubbles-button'
    }, 'Cancel');
    cancelButton$.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this._onCancel();
    });
    applyButton$.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this._onConfirm(this._getFilterValues());
    });
    container$.appendChild(cancelButton$);
    container$.appendChild(applyButton$);
    this._actionsContainer$ = container$;
};

FilterWidget.prototype._createFieldHeader = function () {
    if (isDefined(this._fieldHeader$)) {
        this._mount$.removeChild(this._fieldHeader$);
    }
    this._fieldHeader$ = createElem('div', {
        class: 'bubbles-filter-widget__header',
    }, this._field);
};