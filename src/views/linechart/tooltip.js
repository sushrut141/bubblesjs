import { getDataRangeForValue, getFieldValues, getNumericFieldData, getTemporalFieldData, isDefined, isUndefined } from "../../data/common";
import { getTextDimensions } from "../common";
import { createSVGElem } from "../svg_common";

export function Tooltip(params) {
    this._xField = params.xField;
    this._data = params.data.filter(tuple => isDefined(tuple[this._xField])).sort((a, b) => {
        const x = a[this._xField]; 
        const y = b[this._xField];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    this._yField = params.yField;
    this._series = params.series;
    this._inactiveSeries = params.inactiveSeries;
    this._width = params.width;
    this._height = params.height;
    // range of fields
    this._xRange = undefined;
    this._seriesRange = undefined;
    this._init();
}

Tooltip.prototype._init = function () {
    this._xRange = getTemporalFieldData(this._data, this._xField);
    if (isDefined(this._series)) {
        this._seriesRange = getFieldValues(this._data, this._series);
    }
};

Tooltip.prototype.getTooltipForCoords = function (x, y) {
    const values = {};
    let xVal = undefined;
    const tooltip$ = createSVGElem('g', { class: 'bubbles bubbles-series-tooltip' });
    let highlightedData = [];
    const xIdx = Math.floor(x / this._width * this._xRange.length);
    const target = this._xRange[xIdx];
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
    const series = Object.keys(values).sort().filter(color => isUndefined(this._inactiveSeries[color]));
    let maxKeyWidth = 0
    let maxWidth = 0;
    const keyWidths = [];
    for (let i = 0; i < series.length; i += 1) {
        const keyDimensions = getTextDimensions(`${series[i]}:`, '11px sans-serif');
        const valueDimensions = getTextDimensions(values[series[i]], '11px sans-serif');
        maxKeyWidth = Math.max(maxKeyWidth, keyDimensions.width);
        maxWidth = Math.max(maxWidth, maxKeyWidth + valueDimensions.width + 10);
        keyWidths.push(keyDimensions.width);
    }
    const timeLabelDimensions = getTextDimensions(xVal, '12px sans-serif');
    const rows$ = createSVGElem('g', { class: 'bubbles bubbles-tooltip-rows' });
    const timeLabel$ = createSVGElem('text', {
        style: 'font-size:12px;'
    }, xVal);
    for (let i = 0; i < series.length; i += 1) {
        const seriesKey = series[i];
        const row$ = createSVGElem('text', {
            'transform': `translate(0,${(i + 1) * 15})`,
        });
        const field$ = createSVGElem('tspan', {
            style: 'font-size:11px;color:rgb(95, 95, 95);'
        }, `${seriesKey}:`);
        const value$ = createSVGElem('tspan', {
            'dx': maxKeyWidth + 10 - keyWidths[i],
            'style': 'font-size:11px;font-weight:bold;color:rgb(95, 95, 95);'
        }, values[seriesKey]);
        row$.appendChild(field$);
        row$.appendChild(value$);
        rows$.appendChild(row$);
    }
    const border$ = createSVGElem('rect', {
        x: -5,
        y: -12,
        width: timeLabelDimensions.width + 10,
        height: ((series.length + 1) * 12) + 12,
        style: 'fill:rgba(255, 255, 255, 0.9);stroke:rgb(232, 232, 232);',
    });
    tooltip$.appendChild(border$);
    tooltip$.appendChild(timeLabel$);
    tooltip$.appendChild(rows$);
    return {
        tooltip$: tooltip$,
        xVal: xVal,
        markerValues: values,
        width: timeLabelDimensions.width + 10,
    };
};