import { isDefined, prettifyNumber } from "../../data/common";
import { createElem, getMountPoint } from "../common";
import './kpi.css';

/**
 * Renders a KPI based on supplied configuration.
 * 
 * @param {Array<Object>} params.data Data array to be visualized.
 * @param {Object} params.viewConfig View configuration for this view.
 * @param {string} params.viewConfig.label Label to show above KPI metric.
 * @param {Function} params.viewConfig.compute Function that computes KPI metric to show.
 * @param {BubbleView} params.bubbleView Bubble view associated with this view.
 */
export function KPIView(params) {
    this._data = params.data;
    this._viewConfig = params.viewConfig;
    this._label = params.viewConfig.label;
    this._bubbleView = params.bubbleView;
    this._elem$ = undefined;
    this._render();
}

KPIView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = params.viewConfig;
    }
    this._render();
};

KPIView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (this._elem$ && root$.contains(this._elem$)) {
        root$.removeChild(this._elem$);
    }
    const value = prettifyNumber(this._viewConfig.compute(this._data));
    const elem$ = createElem('div', { class: 'bubbles-kpi-view' });
    const label$ = createElem('h4', { class: 'bubbles-kpi-label' }, this._label);
    const value$ = createElem('h2', { class: 'bubbles-kpi-value' }, value);
    elem$.appendChild(label$);
    elem$.appendChild(value$);
    root$.appendChild(elem$);
    this._elem$ = elem$;
};