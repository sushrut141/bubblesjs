import { getFieldRange, getFieldValues, isDefined } from "../../data/common";
import { getAxisBounds, getMountPoint, getNumerixAxisBands } from "../common";
import { createSVGElem } from "../svg_common";
import './barchart.css';

/**
 * Renders a bar chart based on supplied configuration.
 * 
 * @param {Array<Object>} params.data Data Array to visualize with bubbles.
 * @param {string|undefined} params.viewConfig.title Title of the chart.
 * @param {string|undefined} params.viewConfig.subtitle Subtitle of the chart.
 * @param {Object} params.viewConfig.channels Map of channels and the fields to visualize in each.
 * @param {number} params.viewConfig.width Width of the chart.
 * @param {number} params.viewConfig.height Height of the chart.
 */
export function BarChartView(params) {
    this._data = params.data;
    this._viewConfig = params.viewConfig;
    this._elem$ = undefined;
    this._render();
}

BarChartView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = params.viewConfig;
    }
    this._render();
};

BarChartView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (isDefined(this._elem$)) {
        root$.removeChild(this._elem$);
    }
    this._createChartCanvas();
    this._createChartTitle(this._elem$);
    this._createChartYAxis(this._elem$);
    this._createChartXAxis(this._elem$);
    root$.appendChild(this._elem$);
};

BarChartView.prototype._createChartCanvas = function () {
    const elem$ = createSVGElem('svg', {
        width: this._viewConfig.width,
        height: this._viewConfig.height,
        viewBox: `0 0 ${this._viewConfig.width} ${this._viewConfig.height}`,
        class: 'bubbles bubbles-bar-chart',
    });
    const background$ = createSVGElem('rect', {
        x: 0,
        y: 0,
        width: this._viewConfig.width,
        height: this._viewConfig.height,
        fill: '#ffffff',
    });
    elem$.appendChild(background$);
    this._elem$ = elem$;
};

/**
 * Space Allocation:
 *  x: 0;
 *  y: 0;
 *  width: 100%;
 *  height: 15%;
 */
BarChartView.prototype._createChartTitle = function (mount$) {
    const title = this._viewConfig.title || `${this._viewConfig.channels.x} vs ${this._viewConfig.channels.y}`;
    const titleGroup$ = createSVGElem('g', {
        class: 'bubbles-chart-title-group'
    });
    const title$ = createSVGElem('text', {
        class: 'bubbles-chart-title',
        x: "50%",
        y: "7%",
        'text-anchor': 'middle',
    }, title);
    titleGroup$.appendChild(title$);
    mount$.appendChild(titleGroup$);
};

/**
 * Space Allocation
 *  label:
 *      x: 3.5%
 *      y: 15% from top(allocated for title container)
 *      height: 65%
 *  ticks:
 *      x: 7%
 *      y: 15%
 *      height: 65%
 */
BarChartView.prototype._createChartYAxis = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const yAxis$ = createSVGElem('g', { class: 'bubbles-barchart-y-axis' });
    const yGridLines$ = createSVGElem('g', { class: 'bubbles-barchart-y-axis-grid' });
    const yField = this._viewConfig.channels['y'];
    // as per above space allocation 65% of height avilable for axis
    const availableHeight = height * 0.65;
    const bands = getNumerixAxisBands(availableHeight);
    const [rangeStart, rangeEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    const valueStride = (rangeEnd - rangeStart) / bands;
    const posistionStride = (65 / bands);
    for (let i = 0; i <= bands; i += 1) {
        const position = 15 + (i * posistionStride);
        const value = rangeEnd - (i * valueStride);
        // grid lines start from 10% mark
        const gridLineStartX = width * 0.1;
        // TODO(sushrut) - use computed styles to get the tick characters actual width and height
        const gridLineY = position * height / 100 - 3; // -3 to align grid line with 10px font axis tick
        const gridLineEndX = width - 10;
        const axisTick$ = createSVGElem('text', {
            style: 'color:#666666;cursor:default;font-size:11px;fill:#666666;',
            'text-anchor': 'end',
            x: '7%',
            y: `${position}%`,
        }, value);
        const gridLine$ = createSVGElem('path', {
            class: 'bubbles-grid-line',
            stroke: '#e6e6e6',
            d: `M ${gridLineStartX} ${gridLineY} L ${gridLineEndX} ${gridLineY}`,
        });
        yGridLines$.appendChild(gridLine$);
        yAxis$.appendChild(axisTick$);
    }
    const yAxisLabel$ = createSVGElem('text', {
        class: 'bubbles-chart-axis-title',
        style: 'color:#666666;fill:#666666;',
        'text-anchor': 'middle',
        transform: `translate(${0.035 * width}, ${0.45 * height}) rotate(-90)`,
    }, yField);
    yAxis$.appendChild(yAxisLabel$);
    mount$.appendChild(yGridLines$);
    mount$.appendChild(yAxis$);
};

BarChartView.prototype._createChartXAxis = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const availableWidth = (width * 0.9) - 10;
    const domain = getFieldValues(this._data, xField);
    const chunk = availableWidth / domain.length;
    const xAxis$ = createSVGElem('g', { class: 'bubbles-barchart-x-axis' });
    const highlightBands$ = createSVGElem('g', { class: 'bubbles-barchart-x-axisband' });
    const base = 0.1 * width;
    for (let i = 0; i < domain.length; i += 1) {
        const positionX = base + ((i + 1) * chunk) - (chunk / 2);
        const bandYStart = (height * 0.8) - 3;
        // TODO(sushrut) - use computed styles to get the tick characters actual width and height
        const bandYEnd = (height * 0.15) - 3; // - 3px to account for tick font size
        const axisTick$ = createSVGElem('text', {
            style: 'color:#666666;cursor:default;font-size:11px;fill:#666666;',
            'text-anchor': 'middle',
            x: positionX,
            y: '85%',
        }, domain[i]);
        const band$ = createSVGElem('path', {
            'stroke-width': chunk,
            stroke: 'rgba(204,214,235,0.25)',
            class: 'bubbles-barchart-band',
            d: `M ${positionX} ${bandYStart} L ${positionX} ${bandYEnd}`,
        });
        highlightBands$.appendChild(band$);
        xAxis$.appendChild(axisTick$);
    }
    mount$.appendChild(highlightBands$);
    mount$.appendChild(xAxis$);
};