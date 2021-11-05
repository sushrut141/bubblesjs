import { getDataRangeForValue, getFieldValues, getTemporalFieldData, getTimeFieldRange, isDefined, isUndefined } from "../../data/common";
import { getTextDimensions } from "../common";
import { createSVGElem } from "../svg_common";

/**
 * Creates tooltip for a line chart.
 * 
 * @param {string} params.xField Temporal field used along x axis.
 * @param {string} params.yField Field used on y axis.
 * @param {Array<Object>} params.data Data used to visualize the bubble.
 * @param {string|undefined} params.series Field to render color series by.
 * @param {Object} params.inactiveSeries Map of series name to whether it is active.
 * @param {number} params.width Width available for chart x axis.
 */
export function Tooltip(params) {
    this._xField = params.xField;
    this._yField = params.yField;
    this._data = params.data
    .filter(tuple => isDefined(tuple[this._xField]))
    .map((tuple) => {
        return {
            ...tuple,
            [this._xField]: new Date(tuple[this._xField]).getTime(),
        };
    });
    this._series = params.series;
    this._inactiveSeries = params.inactiveSeries;
    this._width = params.width;
    // range of fields
    this._xRange = undefined;
    this._seriesRange = undefined;
    this._init();
}

Tooltip.prototype._init = function () {
    this._xRange = this._data.map(tuple => tuple[this._xField]);
    if (isDefined(this._series)) {
        this._seriesRange = getFieldValues(this._data, this._series);
    }
};

Tooltip.prototype.getTooltipForCoords = function (x, y) {
    const values = {};
    let xVal = undefined;
    const tooltip$ = createSVGElem('g', { class: 'bubbles-linechart-tooltip' });
    let highlightedData = [];

    const [xStart, xEnd] = getTimeFieldRange(this._data, this._xField);
    const unit = ((xEnd - xStart) / this._width);
    const target = Math.floor(xStart + (unit * x));
    const tuples = getDataRangeForValue(this._data, this._xField, target);
    if (isDefined(this._series)) {
        for (let i = 0; i < tuples.length; i += 1) {
            const row = tuples[i];
            if (isDefined(row[this._xField])) {
                xVal = row[this._xField];
            }
            if (isDefined(row[this._series]) && isDefined(row[this._yField])) {
                values[row[this._series]] = row[this._yField];
            }
        }
        highlightedData = tuples;
    } else {
        // non series line chart tooltip
        for (let i = 0; i < tuples.length; i += 1) {
            const row = tuples[i];
            if (isDefined(row[this._xField])) {
                xVal = row[this._xField];
            }
            if (isDefined(row[this._yField])) {
                values[this._yField] = row[this._yField];
            }
        }
        highlightedData = tuples;
    }
    xVal = new Date(xVal).toDateString();
    const timeLabelDimensions = getTextDimensions(xVal, '12px sans-serif');
    const series = Object.keys(values).sort().filter(color => isUndefined(this._inactiveSeries[color]));
    let maxKeyWidth = 0
    let maxWidth = 0;
    const keyWidths = [];
    for (let i = 0; i < series.length; i += 1) {
        const value = (values[series[i]]).toLocaleString();
        const keyDimensions = getTextDimensions(`${series[i]}:`, '14px sans-serif');
        const valueDimensions = getTextDimensions(value, '14px sans-serif');
        maxKeyWidth = Math.max(maxKeyWidth, keyDimensions.width);
        maxWidth = Math.max(maxWidth, timeLabelDimensions.width, maxKeyWidth + valueDimensions.width + 10);
        keyWidths.push(keyDimensions.width);
    }
    const timeLabel$ = createSVGElem('text', {
        'x': 8,
        'y': 8, 
        'style': 'font-size:12px;fill:#989292'
    }, xVal);
    const divider$ = createSVGElem('path', {
        'd': `M 8 16 L ${maxWidth + 8} 16`,
        'stroke': 'rgb(202 193 193)',
        'fill': 'none',
    });
    const rows$ = createSVGElem('g', {
        class: 'bubbles bubbles-tooltip-rows',
        'transform': 'translate(8, 18)',
    });
    for (let i = 0; i < series.length; i += 1) {
        const seriesKey = series[i];
        const row$ = createSVGElem('text', {
            'transform': `translate(0,${(i + 1) * 18})`,
        });
        const value = (values[seriesKey]).toLocaleString();
        const field$ = createSVGElem('tspan', {
            style: 'font-size:14px;color:rgb(95, 95, 95);'
        }, `${seriesKey}:`);
        const value$ = createSVGElem('tspan', {
            'dx': maxKeyWidth + 10 - keyWidths[i],
            'style': 'font-size:14px;color:rgb(95, 95, 95);'
        }, value);
        row$.appendChild(field$);
        row$.appendChild(value$);
        rows$.appendChild(row$);
    }
    const border$ = createSVGElem('rect', {
        'x': -5,
        'y': -12,
        'width': maxWidth + 32,
        'height': ((series.length + 1) * 18) + 24,
        'style': 'fill:rgb(255, 255, 255);stroke:rgb(232, 232, 232);',
        'rx': 4,
    });
    tooltip$.appendChild(border$);
    tooltip$.appendChild(timeLabel$);
    tooltip$.appendChild(divider$);
    tooltip$.appendChild(rows$);
    return {
        tooltip$: tooltip$,
        xVal: xVal,
        markerValues: values,
        width: maxWidth + 32,
    };
};