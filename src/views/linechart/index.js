import { bisectDataLeft, getDataMapping, getFieldValues, getSeriesDataMapping, getTemporalFieldData, getTimeFieldRange, isDefined, isUndefined, sortByField } from "../../data/common";
import { getColorForIdx } from "../color";
import { getAxisBounds, getMountPoint, getNumerixAxisBands, getTextDimensions } from "../common";
import { createSVGElem } from "../svg_common";
import { computeTimeAxis } from "./axis";
import { Tooltip } from "./tooltip";
import './linechart.css';

/**
 * Renders a Line chart based on supplied configuration.
 * 
 * @param {Array<Object>} params.data Data Array to visualize with bubbles.
 * @param {string|undefined} params.viewConfig.title Title of the chart.
 * @param {string|undefined} params.viewConfig.subtitle Subtitle of the chart.
 * @param {Object} params.viewConfig.channels Map of channels and the fields to visualize in each.
 * @param {number} params.viewConfig.width Width of the chart.
 * @param {number} params.viewConfig.height Height of the chart.
 * @param {BubbleView} params.bubbleView Bubble view associated with this view.
 */
export function LineChartView(params) {
    this._data = params.data;
    this._viewConfig = params.viewConfig;
    this._bubbleView = params.bubbleView;
    this._elem$ = undefined;
    this._tooltip$ = undefined;
    this._markers$ = undefined;
    this._brushStart = [];
    this._brushEnd = [];
    this._brushInProgress = false;
    this._brushElem$ = undefined;
    this._brushPointsGroup$ = undefined;
    this._inactiveSeries = {};
    this._sortedData = sortByField(this._data, this._viewConfig.channels['x'], true);
    this._computedYAxisWidth = 0;
    this._render();
}

LineChartView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
        this._sortedData = sortByField(this._data, this._viewConfig.channels['x'], true);
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = params.viewConfig;
    }
    this._render();
};

LineChartView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (isDefined(this._elem$)) {
        root$.removeChild(this._elem$);
    }
    this._createChartCanvas();
    this._createChartTitle(this._elem$);
    this._createChartYAxis(this._elem$);
    this._createChartXAxis(this._elem$);
    if (isDefined(this._viewConfig.channels['color'])) {
        this._createLineSeries(this._elem$);
        this._createSeriesLegend(this._elem$);
    } else {
        this._createLineChartView(this._elem$);
    }
    root$.appendChild(this._elem$);
    // wait for chart to render before injecting tooltip
    setTimeout(() => {
        this._setupTooltip(this._elem$);
        this._setupBrushing(this._elem$);
    }, 0);
};

LineChartView.prototype._createChartCanvas = function () {
    const elem$ = createSVGElem('svg', {
        width: this._viewConfig.width,
        height: this._viewConfig.height,
        viewBox: `0 0 ${this._viewConfig.width} ${this._viewConfig.height}`,
        class: 'bubbles bubbles-line-chart',
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
 LineChartView.prototype._createChartTitle = function (mount$) {
    const title = this._viewConfig.title || `${this._viewConfig.channels['x']} vs ${this._viewConfig.channels['y']}`;
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

LineChartView.prototype._createLineChartView = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const dataMatrix = getDataMapping(this._data, xField, yField);
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const availableHeight = (0.65 * height);
    const bands = getNumerixAxisBands(availableHeight);
    const [xStart, xEnd] = getTimeFieldRange(this._data, xField);
    const [yStart, yEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    const xUnit = availableWidth / (xEnd - xStart);
    const yUnit = availableHeight / (yEnd - yStart);
    const xBase = (this._computedYAxisWidth);
    const yBase = (0.2 * height);
    const series$ = createSVGElem('g', { class: 'bubbles-line-series' });
    const sortedData = this._data.filter(obj => isDefined(obj[xField])).sort(function(a, b) {
        const x = new Date(a[xField]).getTime(); 
        const y = new Date(b[xField]).getTime();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    const points = [];
    for (let j = 0; j < sortedData.length; j += 1) {
        const tuple = sortedData[j];
        if (isDefined(tuple[xField])) {
            const xValue = new Date(tuple[xField]).getTime();
            const yValue = dataMatrix[tuple[xField]];
            if (isDefined(yValue)) {
                const xPos = (xValue * xUnit) + xBase - (xStart * xUnit);
                const yPos = height - (yValue * yUnit) - yBase;
                points.push([xPos, yPos]);
            }
        }
    }
    // create line
    let path = '';
    for (let idx = 0; idx < points.length; idx += 1) {
        const [xPos, yPos] = points[idx];
        if (idx === 0) {
            path += `M ${xPos} ${yPos}`;
        } else {
            path += ` L ${xPos} ${yPos}`;
        }
    }
    const line$ = createSVGElem('path', {
        d: path,
        class: 'bubles-linechart-line',
        fill: 'none',
        'stroke-width': 2,
        'stoke-linecap': 'round',
        stroke: getColorForIdx(0),
    });
    series$.appendChild(line$);
    mount$.appendChild(series$);
};

// TODO(sushrut) - this legend can be shared across charts
LineChartView.prototype._createSeriesLegend = function (mount$) {
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

LineChartView.prototype._onSeriesLegendClick = function (evt) {
    const series = evt.target.getAttribute('data-color');
    if (this._inactiveSeries[series]) {
        delete this._inactiveSeries[series];
    } else {
        this._inactiveSeries[series] = true;
    }
    this._render();
    const newData = [];
    for (let i = 0; i < this._data.length; i += 1) {
        const tuple = this._data[i];
        const color = tuple[this._viewConfig.channels['color']];
        if (isUndefined(this._inactiveSeries[color])) {
            newData.push(tuple);
        }
    }
    this._updateParentBubble(newData);
};

LineChartView.prototype._updateParentBubble = function (newData) {
    for (let i = 0; i < this._bubbleView._children.length; i += 1) {
        const childBubble = this._bubbleView._children[i];
        childBubble.update(newData);
    }
};

LineChartView.prototype._createLineSeries = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const color = this._viewConfig.channels['color'];
    const seriesValues = getFieldValues(this._data, color);
    const dataMatrix = getSeriesDataMapping(this._data, xField, yField, color);
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const availableHeight = (0.65 * height);
    const bands = getNumerixAxisBands(availableHeight);
    const [xStart, xEnd] = getTimeFieldRange(this._data, xField);
    const [yStart, yEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    const xUnit = availableWidth / (xEnd - xStart);
    const yUnit = availableHeight / (yEnd - yStart);
    const xBase = (this._computedYAxisWidth);
    const yBase = (0.2 * height);
    const series$ = createSVGElem('g', { class: 'bubbles-line-series' });
    const sortedData = this._data.filter(obj => isDefined(obj[xField])).sort(function(a, b) {
        const x = new Date(a[xField]).getTime(); 
        const y = new Date(b[xField]).getTime();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    for (let i = 0; i < seriesValues.length; i += 1) {
        const points = [];
        const color = seriesValues[i];
        if (this._inactiveSeries[color]) {
            continue;
        }
        for (let j = 0; j < sortedData.length; j += 1) {
            const tuple = sortedData[j];
            if (isDefined(tuple[xField])) {
                const xValue = new Date(tuple[xField]).getTime();
                const yValue = dataMatrix[`${color}-${tuple[xField]}`]
                if (isDefined(yValue)) {
                    const xPos = (xValue * xUnit) + xBase - (xStart * xUnit);
                    const yPos = height - (yValue * yUnit) - yBase;
                    points.push([xPos, yPos]);
                }
            }
        }
        // create line
        let path = '';
        for (let idx = 0; idx < points.length; idx += 1) {
            const [xPos, yPos] = points[idx];
            if (idx === 0) {
                path += `M ${xPos} ${yPos} `;
            } else {
                path += `L ${xPos} ${yPos} `;
            }
        }
        const line$ = createSVGElem('path', {
            d: path,
            class: 'bubles-linechart-line',
            fill: 'none',
            'stroke-width': 2,
            'stoke-linecap': 'round',
            stroke: getColorForIdx(i),
        });
        series$.appendChild(line$);
    }
    mount$.appendChild(series$);
};

LineChartView.prototype._createChartXAxis = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const base = this._computedYAxisWidth;
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const axisLabels = computeTimeAxis({
        width: availableWidth,
        data: this._data,
        field: xField,
    });
    const xAxis$ = createSVGElem('g', { class: 'bubbles-time-axis' });
    for (let i = 0; i < axisLabels.length; i += 1) {
        const tickX = base + axisLabels[i].position;
        const tickStartY = (0.8 * height);
        const tickEndY = tickStartY + 10;
        const tick$ = createSVGElem('path', {
            class: 'bubbles-tick',
            stroke: '#ccd6eb',
            d: `M ${tickX} ${tickStartY} L ${tickX} ${tickEndY}`,
        });
        const label$ = createSVGElem('text', {
            x: tickX,
            y: tickEndY + 10,
            style: 'color:#666666;cursor:default;font-size:11px;fill:#666666;',
            'text-anchor': 'middle',
        }, axisLabels[i].label);
        xAxis$.appendChild(tick$);
        xAxis$.appendChild(label$);
    }
    mount$.appendChild(xAxis$);
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
 LineChartView.prototype._createChartYAxis = function (mount$) {
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
        // grid lines start from 10% mark
        const gridLineStartX = axisWidth;
        // TODO(sushrut) - use computed styles to get the tick characters actual width and height
        const gridLineY = position * height / 100;
        const gridLineEndX = width - 10;
        // center label of height 11px by adding approx half its height(6px) to position
        const labelY = ((position * height / 100) + 4) / height * 100;
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

LineChartView.prototype._setupBrushing = function (mount$) {
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
    };
    mount$.addEventListener('mousedown', (evt) => {
        this._brushStart = this._computeCanvasClickCoords(evt, mount$);
        mount$.addEventListener('mousemove', onMouseMove);
        mount$.addEventListener('mouseup', onMouseUp);
    });
    mount$.addEventListener('click', () => {
        if (isDefined(this._brushElem$) && !this._brushInProgress) {
            mount$.removeChild(this._brushElem$);
            mount$.removeChild(this._brushPointsGroup$);
            this._brushPointsGroup$ = undefined;
            this._brushElem$ = undefined;
            this._updateParentBubble(this._sortedData);
        }
        this._brushInProgress = false;
    });
};

LineChartView.prototype._handleBrushing = function (mount$) {
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
    this._highlightBrushedPoints(mount$);
};

LineChartView.prototype._highlightBrushedPoints = function (mount$) {
    const width = this._viewConfig['width'];
    const height = this._viewConfig['height'];
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const yBase = (0.2 * height);
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const availableHeight = (0.65 * height);
    const bands = getNumerixAxisBands(availableHeight);
    const xRange = getTimeFieldRange(this._data, xField);
    const [yStart, yEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    const yUnit = availableHeight / (yEnd - yStart);
    const xInvUnit = (xRange[1] - xRange[0]) / availableWidth;
    const scaledStart = this._brushStart[0] - (this._computedYAxisWidth);
    const scaledEnd = this._brushEnd[0] - (this._computedYAxisWidth);
    const targetStartTime = xRange[0] + (xInvUnit * scaledStart);
    const targetEndTime = xRange[0] + (xInvUnit * scaledEnd);
    const startIdx = bisectDataLeft(this._sortedData, xField, targetStartTime);
    const endIdx = bisectDataLeft(this._sortedData, xField, targetEndTime);
    const markers$ = createSVGElem('g', { class: 'bubbles bubbles-brush-markers' });
    const newData = [];
    for (let i = startIdx; i < endIdx; i += 1) {
        const tuple = this._sortedData[i];
        const xVal = new Date(tuple[xField]).getTime();
        const yVal = tuple[yField];
        const xPos = (xVal / xInvUnit) + (this._computedYAxisWidth) - (xRange[0] / xInvUnit);
        const yPos = height - (yVal * yUnit) - yBase;
        const circle$ = createSVGElem('circle', {
            cx: xPos,
            cy: yPos,
            r: 4,
            fill: getColorForIdx(0),
            stroke: '#ffffff',
        });
        markers$.appendChild(circle$);
        newData.push(tuple);
    }
    if (this._brushPointsGroup$ && mount$.contains(this._brushPointsGroup$)) {
        mount$.removeChild(this._brushPointsGroup$);
    }
    this._brushPointsGroup$ = markers$;
    mount$.appendChild(this._brushPointsGroup$);
    // update child bubbles
    for (let i = 0; i < this._bubbleView._children.length; i += 1) {
        this._bubbleView._children[i].update(newData);
    }
};

LineChartView.prototype._computeCanvasClickCoords = function (evt, mount$) {
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

LineChartView.prototype._setupTooltip = function (mount$) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const series = this._viewConfig.channels['color'];
    mount$.addEventListener('mousemove', (evt) => {
        if (isDefined(this._tooltip$) && mount$.contains(this._tooltip$)) {
            mount$.removeChild(this._tooltip$);
        }
        if (isDefined(this._markers$) && mount$.contains(this._markers$)) {
            mount$.removeChild(this._markers$);
        }
        if (this._brushInProgress) {
            return;
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
        let x = baseX - this._computedYAxisWidth;
        const y = baseY;
        const tooltip = new Tooltip({
            xField,
            yField,
            series,
            width: (width - this._computedYAxisWidth) - 10,
            data: this._sortedData,
            inactiveSeries: this._inactiveSeries,
        });
        const tooltipObj = tooltip.getTooltipForCoords(x, y);
        this._tooltip$ = tooltipObj.tooltip$;
        let tooltipX = point.x + 10;
        if (tooltipX + tooltipObj.width > width) {
            tooltipX -= tooltipObj.width + 10;
        }
        this._tooltip$.setAttribute('transform', `translate(${tooltipX}, ${baseY})`);
        this._drawTooltipMarkers(mount$, tooltipObj);
        mount$.appendChild(this._tooltip$);
    });
};

LineChartView.prototype._drawTooltipMarkers = function (mount$, tooltipData) {
    const width = this._viewConfig.width;
    const height = this._viewConfig.height;
    const xField = this._viewConfig.channels['x'];
    const yField = this._viewConfig.channels['y'];
    const availableWidth = (width - this._computedYAxisWidth) - 10;
    const availableHeight = (0.65 * height);
    const bands = getNumerixAxisBands(availableHeight);
    const [xStart, xEnd] = getTimeFieldRange(this._data, xField);
    const [yStart, yEnd] = getAxisBounds({
        data: this._data,
        field: yField,
        bands,
    });
    const xUnit = availableWidth / (xEnd - xStart);
    const yUnit = availableHeight / (yEnd - yStart);
    const xBase = (this._computedYAxisWidth);
    const yBase = (0.2 * height);
    const values = tooltipData.markerValues;
    const xVal = new Date(tooltipData.xVal).getTime();
    const series = Object.keys(values).sort();
    const xPos = (xVal * xUnit) + xBase - (xStart * xUnit);
    const vMarkerStartY = (0.8 * height);
    const vMarkerEndY = (0.15 * height);
    const markers$ = createSVGElem('g', { class: 'bubbles bubbles-highlight-markers' });
    const verticalMarker$ = createSVGElem('path', {
        d: `M ${xPos} ${vMarkerStartY} L ${xPos} ${vMarkerEndY}`,
        stroke: '#d6d6d6',
    });
    markers$.appendChild(verticalMarker$);
    for (let i = 0; i < series.length; i += 1) {
        if (this._inactiveSeries[series[i]]) {
            continue;
        }
        const yVal = values[series[i]];
        const yPos = height - (yVal * yUnit) - yBase;
        const circle$ = createSVGElem('circle', {
            cx: xPos,
            cy: yPos,
            r: 4,
            fill: getColorForIdx(i),
            stroke: '#ffffff',
        });
        markers$.appendChild(circle$);
    }
    this._markers$ = markers$;
    mount$.appendChild(this._markers$);
};