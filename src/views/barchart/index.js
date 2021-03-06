import { getFieldValues, isDefined, isUndefined } from "../../data/common";
import { getColorForIdx } from "../color";
import { getAxisBounds, getMountPoint, getNumerixAxisBands, getTextDimensions } from "../common";
import { createSVGElem } from "../svg_common";
import { Tooltip } from "./tooltip";
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
 * @param {BubbleView} params.bubbleView Bubble view associated with this view.
 */
export function BarChartView(params) {
    this._data = params.data;
    this._viewConfig = params.viewConfig;
    this._bubbleView = params.bubbleView;
    this._elem$ = undefined;
    this._brushInProgress = false;
    this._brushElem$ = undefined;
    this._tooltip$ = undefined;
    this._computedYAxisWidth = 0;
    this._inactiveSeries = {};
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
    if (isDefined(this._viewConfig.channels['color'])) {
        this._createBarSeries(this._elem$);
        this._createSeriesLegend(this._elem$);
    } else {
        this._createBars(this._elem$);
    }
    // create x axis after bars so that highlight bands are overlayed on bars
    this._createChartXAxis(this._elem$);
    root$.appendChild(this._elem$);
    // wait for chart to render before injecting tooltip
    setTimeout(() => {
        this._setupTooltip(this._elem$);
        this._setupBrushing(this._elem$);
    }, 0);
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

BarChartView.prototype._createValueMapping = function (xField, yField) {
    const mapping = {};
    for (let i = 0; i < this._data.length; i += 1) {
        const tuple = this._data[i];
        if (
            isDefined(tuple[xField]) &&
            isDefined(tuple[yField])
        ) {
            mapping[tuple[xField]] = tuple[yField];
        }
    }
    return mapping;
};

BarChartView.prototype._createBars = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const xFieldValues = getFieldValues(this._data, xField);
    const chunk = availableWidth / xFieldValues.length;
    const availableHeight = height * 0.65;
    const bands = getNumerixAxisBands(availableHeight);
    const [rangeStart, rangeEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    // map of concatenated xField-color to value
    const dataMatrix = this._createValueMapping(xField, yField);
    const perUnitHeight = (0.65 * height) / (rangeEnd - rangeStart);
    // 10% space allocated for y axis
    const base = this._computedYAxisWidth;
    const bars$ = createSVGElem('g', { class: 'bubbles-barchart-bars' });
    // for each band
    for (let j = 0; j < xFieldValues.length; j += 1) {
        const xFieldValue = xFieldValues[j];
        const value = dataMatrix[xFieldValue];
        if (isDefined(value)) {
            // each rect will start a quarter slot width from the slot start
            // each rect will be half the slot width in width
            const slotStartX = base + (j * chunk) + (chunk / 4);
            const slotStartY = (0.15 * height) + (0.65 * height) - (perUnitHeight * value);
            const bar$ = createSVGElem('rect', {
                x: slotStartX,
                y: slotStartY,
                width: (chunk / 2),
                height: (perUnitHeight * value),
                fill: getColorForIdx(0),
            });
            bars$.appendChild(bar$);
        }
    }
    mount$.appendChild(bars$);
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

BarChartView.prototype._createSeriesValueMapping = function (color, xField, yField) {
    const mapping = {};
    for (let i = 0; i < this._data.length; i += 1) {
        const tuple = this._data[i];
        const xFieldValue = tuple[xField];
        const seriesValue = tuple[color];
        const yFieldValue = tuple[yField];
        if (
            isDefined(xFieldValue) &&
            isDefined(yFieldValue) &&
            isDefined(seriesValue)
        ) {
            const key = `${seriesValue}-${xFieldValue}`;
            mapping[key] = yFieldValue;
        }
    }
    return mapping;
};

BarChartView.prototype._createSeriesLegend = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const color = this._viewConfig.channels['color'];
    const seriesValues = getFieldValues(this._data, color);
    const colorLegend$ =  createSVGElem('g', { class: 'bubbles-series-legend' });
    let totalWidth = 0;
    const colorSymbolWidth = 12;
    const symbolTextPadding = 30;
    for (let i = 0; i < seriesValues.length; i += 1) {
        const series$ = createSVGElem('g', { class: 'bubbles-series-legend-item' });
        if (this._inactiveSeries[seriesValues[i]]) {
            series$.classList.add('bubbles-series-legend-item--inactive');
        }
        const color$ = createSVGElem('rect', {
            width: `${colorSymbolWidth}`,
            height: `${colorSymbolWidth}`,
            rx: `${colorSymbolWidth / 2}`,
            ry: `${colorSymbolWidth / 2}`,
            x: '2',
            y: '4',
            fill: getColorForIdx(i),
            'data-color': seriesValues[i],
        });
        const label$ = createSVGElem('text', {
            x: '21',
            y: '15',
            style: 'color:#333333;cursor:pointer;font-size:12px;fill:#333333;',
            'text-anchor': 'start',
            'data-color': seriesValues[i],
        }, seriesValues[i]);
        series$.appendChild(color$);
        series$.appendChild(label$);
        series$.setAttribute('transform', `translate(${totalWidth}, 3)`);
        const layout = getTextDimensions(seriesValues[i], '12px sans-serif');
        totalWidth += layout.width + colorSymbolWidth + symbolTextPadding;
        colorLegend$.appendChild(series$);
    }
    const offsetX = (width - totalWidth) / 2;
    const offsetY = (0.9 * height);
    colorLegend$.setAttribute('transform', `translate(${offsetX}, ${offsetY})`);
    colorLegend$.addEventListener('click', this._onSeriesLegendClick.bind(this));
    mount$.appendChild(colorLegend$);
};

BarChartView.prototype._onSeriesLegendClick = function (evt) {
    const series = evt.target.getAttribute('data-color');
    if (this._inactiveSeries[series]) {
        delete this._inactiveSeries[series];
    } else {
        this._inactiveSeries[series] = true;
    }
    this._render();
    // get affected data and update child bubbles of parent bubble view
    const newData = [];
    for (let i = 0; i < this._data.length; i += 1) {
        const tuple = this._data[i];
        const color = tuple[this._viewConfig.channels['color']];
        if (isUndefined(this._inactiveSeries[color])) {
            newData.push(tuple);
        }
    }
    this._updateParentBubble();
};

BarChartView.prototype._updateParentBubble = function (newData) {
    for (let i = 0; i < this._bubbleView._children.length; i += 1) {
        const childBubble = this._bubbleView._children[i];
        childBubble.update(newData);
    }
};

BarChartView.prototype._createBarSeries = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const color = this._viewConfig.channels['color'];
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const xFieldValues = getFieldValues(this._data, xField);
    const chunk = availableWidth / xFieldValues.length;
    const colorValues = getFieldValues(this._data, color);
    const seriesValues = 
        colorValues
            .filter(seriesValue => !(seriesValue in this._inactiveSeries));
    // map colors to ids since idx is used to color bars
    // even after a series is hidden through series legend
    const colorIdxMap = {};
    for (let i = 0; i < colorValues.length; i += 1) {
        colorIdxMap[colorValues[i]] = i;
    }        
    const seriesCount = seriesValues.length;
    const seriesWidth = chunk / seriesCount;
    const seriesNewWidth = seriesWidth / 2;
    const availableHeight = height * 0.65;
    const bands = getNumerixAxisBands(availableHeight);
    const [rangeStart, rangeEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    // map of concatenated xField-color to value
    const dataMatrix = this._createSeriesValueMapping(color, xField, yField);
    const perUnitHeight = (0.65 * height) / (rangeEnd - rangeStart);
    // 10% space allocated for y axis
    const base = this._computedYAxisWidth;
    // half the chunk width will be used for white space
    // quarter chunk on each side
    // rest of the space is equally divided among series
    // (0.5 * chunk) / seriesCount
    // the width of each bar will be redurec by 5px on each side to create spacing

    // for each color series
    for (let i = 0; i < seriesCount; i += 1) {
        const seriesValue  = seriesValues[i];
        const series$ = createSVGElem('g', { class: 'bubbles-barchart-series' });
        // for each band
        for (let j = 0; j < xFieldValues.length; j += 1) {
            const xFieldValue = xFieldValues[j];
            const value = dataMatrix[`${seriesValue}-${xFieldValue}`];
            if (isDefined(value)) {
                // each rect will start a quarter slot width from the slot start
                // each rect will be half the slot width in width
                const xOffset = base + (j * chunk);
                const slotStartX = xOffset + (chunk / 4) + (i * seriesNewWidth) +  5;
                const slotStartY = (0.15 * height) + (0.65 * height) - (perUnitHeight * value);
                const bar$ = createSVGElem('rect', {
                    x: slotStartX,
                    y: slotStartY,
                    width: seriesNewWidth - 10,
                    height: (perUnitHeight * value),
                    fill: getColorForIdx(colorIdxMap[seriesValue]),
                });
                series$.appendChild(bar$);
            }
        }
        mount$.appendChild(series$);
    }
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
    const yAxisLabelXOffset = 24;
    let axisWidth = 0;
    // calculate widths of ticks and compute x offset for axis ticks
    for (let i = 0; i <= bands; i += 1) {
        const value = (rangeEnd - (i * valueStride)).toLocaleString();
        const textDimensions = getTextDimensions(value, '11px sans-serif');
        const computedWidth = textDimensions.width + yAxisLabelXOffset + 16;
        axisWidth = Math.max(axisWidth, computedWidth);
    }
    for (let i = 0; i <= bands; i += 1) {
        const position = 15 + (i * posistionStride);
        const value = (rangeEnd - (i * valueStride)).toLocaleString();
        // grid lines start where axis ends
        const gridLineStartX = axisWidth;
        // TODO(sushrut) - use computed styles to get the tick characters actual width and height
        const gridLineY = position * height / 100;
        const labelY = ((position * height / 100) + 5) / height * 100; // center label of height 11px by adding approx half its height(5px) to position
        const gridLineEndX = width - 10;
        const axisTick$ = createSVGElem('text', {
            style: 'color:#666666;cursor:default;font-size:11px;fill:#666666;',
            'text-anchor': 'end',
            // leave space between axis tick and grid line
            x: `${axisWidth - 8}`,
            y: `${labelY}%`,
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
        transform: `translate(${yAxisLabelXOffset}, ${0.45 * height}) rotate(-90)`,
    }, yField);
    this._computedYAxisWidth = axisWidth;
    yAxis$.appendChild(yAxisLabel$);
    mount$.appendChild(yGridLines$);
    mount$.appendChild(yAxis$);
};

BarChartView.prototype._createChartXAxis = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const domain = getFieldValues(this._data, xField);
    const chunk = availableWidth / domain.length;
    const xAxis$ = createSVGElem('g', { class: 'bubbles-barchart-x-axis' });
    const highlightBands$ = createSVGElem('g', { class: 'bubbles-barchart-x-axisband' });
    // 10% space allocated for y axis
    const base = this._computedYAxisWidth;
    for (let i = 0; i < domain.length; i += 1) {
        const positionX = base + ((i + 1) * chunk) - (chunk / 2);
        const bandYStart = (height * 0.8);
        // TODO(sushrut) - use computed styles to get the tick characters actual width and height
        const bandYEnd = (height * 0.15);
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

BarChartView.prototype._setupTooltip = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const series = this._viewConfig.channels['color'];
    mount$.addEventListener('mousemove', (evt) => {
        if (this._tooltip$ && mount$.contains(this._tooltip$)) {
            mount$.removeChild(this._tooltip$);
        }
        let point = mount$.createSVGPoint();
        point.x = evt.clientX;
        point.y = evt.clientY;
        point = point.matrixTransform(mount$.getScreenCTM().inverse());
        if (point.x < this._computedYAxisWidth || point.x > width - 10) {
            return;
        }
        if (point.y < 0.15 * height || point.y > 0.8 * height) {
            return;
        }
        const baseX = point.x;
        const baseY = point.y;
        // subtract space used by y axis
        let x = baseX - (this._computedYAxisWidth);
        const y = baseY;
        const tooltip = new Tooltip({
            xField,
            yField,
            series,
            width: (width - this._computedYAxisWidth) - 10,
            data: this._data,
            inactiveSeries: this._inactiveSeries,
        });
        const tooltipObj = tooltip.getTooltipForCoords(x, y);
        this._tooltip$ = tooltipObj.tooltip$;
        let tooltipX = point.x + 10;
        if (tooltipX + tooltipObj.width > width) {
            tooltipX -= tooltipObj.width + 10;
        }
        this._tooltip$.setAttribute('transform', `translate(${tooltipX}, ${baseY})`);
        mount$.appendChild(this._tooltip$);
    });
};

BarChartView.prototype._computeCanvasClickCoords = function (evt, mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    let point = mount$.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    point = point.matrixTransform(mount$.getScreenCTM().inverse());
    if (point.x < this._computedYAxisWidth || point.x > width - 10) {
        return;
    }
    if (point.y < 0.15 * height || point.y > 0.8 * height) {
        return;
    }
    return [point.x, point.y];
};

BarChartView.prototype._setupBrushing = function (mount$) {
    const onMouseMove = (evt) => {
        this._brushInProgress = true;
        this._brushEnd = this._computeCanvasClickCoords(evt, mount$);
        if (isDefined(this._brushEnd)) {
            this._handleBrushing(mount$);
        }
    };
    const onMouseUp = (evt) => {
        this._brushEnd = this._computeCanvasClickCoords(evt, mount$);
        mount$.removeEventListener('mousemove', onMouseMove);
        mount$.removeEventListener('mouseup', onMouseUp);
        this._highlightBrushedBars(mount$);
    };
    mount$.addEventListener('mousedown', (evt) => {
        this._brushStart = this._computeCanvasClickCoords(evt, mount$);
        mount$.addEventListener('mousemove', onMouseMove);
        mount$.addEventListener('mouseup', onMouseUp);
    });
    mount$.addEventListener('click', () => {
        if (isDefined(this._brushElem$) && !this._brushInProgress) {
            mount$.removeChild(this._brushElem$);
            this._brushElem$ = undefined;
            this._updateParentBubble(this._data);
        }
        this._brushInProgress = false;
    });
};

BarChartView.prototype._handleBrushing = function (mount$) {
    const height = this._viewConfig.height;
    if (isDefined(this._brushElem$)) {
        const newWidth = this._brushEnd[0] - this._brushStart[0];
        if (newWidth > 0) {
            this._brushElem$.setAttribute('width', this._brushEnd[0] - this._brushStart[0]);
        } else {
            this._brushElem$.setAttribute('x', this._brushEnd[0]);
            this._brushElem$.setAttribute('width', -newWidth);
        }
    } else {
        const brush$ = createSVGElem('rect', {
            x: this._brushStart[0],
            y: 0.15 * height,
            width: this._brushEnd[0] - this._brushStart[0],
            height: 0.65 * height,
            fill: 'rgba(204, 214, 235, 0.25)',
        });
        this._brushElem$ = brush$;
        mount$.appendChild(this._brushElem$);
    }
    // this._highlightBrushedBars(mount$);
};

BarChartView.prototype._highlightBrushedBars = function (mount$) {
    const width = this._viewConfig.width;
    const xField = this._viewConfig.channels['x'];
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const xBase = (this._computedYAxisWidth);
    const domain = getFieldValues(this._data, xField);
    const bandWidth = availableWidth / domain.length;
    // compute ideal wrapping width
    const bandStartIdx =  Math.floor((this._brushStart[0] - xBase) / bandWidth);
    const bandEndIdx = Math.ceil((this._brushEnd[0] - xBase) / bandWidth);
    const xStart = bandStartIdx * bandWidth;
    const xEnd = bandEndIdx * bandWidth;
    this._brushElem$.setAttribute('x', xBase + xStart);
    this._brushElem$.setAttribute('width', xEnd - xStart);
    const targetValuesMap = {};
    for (let i = bandStartIdx; i < bandEndIdx; i += 1) {
        targetValuesMap[domain[i]] = true;
    }
    const brushedData = [];
    for (let i = 0; i < this._data.length; i += 1) {
        const tuple = this._data[i];
        if (isDefined(tuple[xField]) && targetValuesMap[tuple[xField]]) {
            brushedData.push(tuple);
        }
    }
    this._updateParentBubble(brushedData);
};