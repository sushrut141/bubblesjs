import {isDefined, isUndefined, getFieldValues} from '../../data/common';
import {createElem} from '../common';
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
        this._createFieldSelector();
        this._mount$.appendChild(this._fieldSelector$);
        return;
    }
    if (this._mount$.contains(this._fieldSelector$)) {
        this._mount$.removeChild(this._fieldSelector$);
    }
    this._createFieldHeader();
    this._createComparatorSelector();
    this._createValueBox();
    this._createActionButtons();
    this._mount$.appendChild(this._fieldHeader$);
    this._mount$.appendChild(this._comparatorSelector$);
    this._mount$.appendChild(this._valueSelector$);
    this._mount$.appendChild(this._actionsContainer$);
};

FilterWidget.prototype._createFieldSelector = function () {
    const fieldSelector$ = createElem('select', {
        class: 'bubbles-filter-field bubbles-selector'
    });
    const onFieldSelect = (evt) => {
        evt.stopPropagation();
        this._field = evt.target.value;
        this._render();
    };
    for (let i = 0; i < this._fields.length; i += 1) {
        const fieldOption$ = createElem('option', {
            class: 'bubbles-selector-option',
            value: this._fields[i],
        }, this._fields[i]);
        fieldSelector$.appendChild(fieldOption$);
    }
    fieldSelector$.addEventListener('change', onFieldSelect, true);
    this._fieldSelector$ = fieldSelector$;
};

FilterWidget.prototype._createComparatorSelector = function () {
    if (isDefined(this._field) && isUndefined(this._comparatorSelector$)) {
        const comparatorSelectorElem = createElem('select', {
            class: 'bubbles-filter-comparator bubbles-selector'
        });
        const onComparatorSelect = (evt) => {
            evt.stopPropagation();
            this._comparator = evt.target.value;
        };
        const fieldType = this._viewConfig.types[this._field];
        const comparators = TYPE_COMPARATOR_MAP[fieldType];
        for (let i = 0; i < comparators.length; i += 1) {
            const comparatorElem = createElem('option', {
                class: 'bubbles-selector-option',     
            }, comparators[i]);
            comparatorSelectorElem.appendChild(comparatorElem);
        }
        comparatorSelectorElem.addEventListener('change', onComparatorSelect);
        this._comparatorSelector$ = comparatorSelectorElem;
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
    } else {
        const valueSelector$ = createElem('select', {
            class: 'bubbles-filter-value bubbles-selector',
        });
        const values = getFieldValues(this._data, this._field);
        for (let i = 0; i < values.length; i += 1) {
            const valueOption$ = createElem('option', {
                class: 'bubbles-selector-option',
            }, values[i]);
            valueSelector$.appendChild(valueOption$);
        }
        this._valueSelector$ = valueSelector$;
    }
    this._valueSelector$.value = this._value;
    this._valueSelector$.addEventListener('change', onValueChange);
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
    this._fieldHeader$ = createElem('h2', {}, this._field);
};