import { isDefined, isUndefined } from "../../data/common";

const IDX_TO_MONTH = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

/**
 * Computes the ideal time axis for the supplied data.
 * @param {Array<Object>} params.data Data array to visualize.
 * @param {string} params.field Time field to create axis from.
 * @param {number} params.width Available width to render time axis.
 */
export function computeTimeAxis(params) {
    const data = params.data;
    const field = params.field;
    const width = params.width;
    const dates = [];
    let months = {};
    let minimum = undefined;
    let maximum = undefined;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        const value = tuple[field];
        if (isDefined(value)) {
            const date = new Date(value);
            if (isUndefined(minimum)) {
                minimum = date.getTime();
            }
            if (isUndefined(maximum)) {
                maximum = date.getTime();
            }
            months[date.getMonth()] = true;
            minimum = Math.min(minimum, date.getTime());
            maximum = Math.max(maximum, date.getTime());
            dates.push(date);
        }
    }
    const numOfYears = new Date(maximum).getFullYear() - new Date(minimum).getFullYear();
    const axisParams = {
        dates: dates.sort(),
        minimum,
        maximum,
        width,
    };
    if (numOfYears >= 4) {
        return computeYearAxis(axisParams);
    } else if (numOfYears > 1 && numOfYears < 4) {
        return computeMonthYearAxis(axisParams);
    }
    // less than or equal to one year
    const numOfMonths = Object.keys(months);
    if (numOfMonths >= 4) {
        return computeMonthYearAxis(axisParams);
    }
    return computeDayMonthAxis(axisParams);
}

function computeYearAxis(axisParams) {
    const parts = Math.ceil(axisParams.width / 100);
    const stride = axisParams.width / parts;
    const valueStride = (axisParams.maximum - axisParams.minimum) / parts;
    const output = [];
    let currentPosition = 0;
    for (let i = 0; i < parts - 1; i += 1) {
        currentPosition += stride;
        const currentValue = axisParams.minimum + ((i + 1) * valueStride);
        const year = new Date(currentValue).getFullYear();
        output.push({
            position: currentPosition,
            label: year,
            value: currentValue,
        });
    }
    return output;
}

function computeMonthYearAxis(axisParams) {
    const parts = Math.ceil(axisParams.width / 100);
    const stride = axisParams.width / parts;
    const valueStride = (axisParams.maximum - axisParams.minimum) / parts;
    const output = [];
    let currentPosition = 0;
    for (let i = 0; i < parts - 1; i += 1) {
        currentPosition += stride;
        const currentValue = axisParams.minimum + ((i + 1) * valueStride);
        const date = new Date(currentValue);
        const year = date.getFullYear();
        const month = IDX_TO_MONTH[date.getMonth()];
        output.push({
            position: currentPosition,
            label: `${month} ${year}`,
            value: currentValue,
        });
    }
    return output;
}

function computeDayMonthAxis(axisParams) {
    const parts = Math.ceil(axisParams.width / 100);
    const stride = axisParams.width / parts;
    const valueStride = (axisParams.maximum - axisParams.minimum) / parts;
    const output = [];
    let currentPosition = 0;
    for (let i = 0; i < parts - 1; i += 1) {
        currentPosition += stride;
        const currentValue = axisParams.minimum + ((i + 1) * valueStride);
        const date = new Date(currentValue);
        const month = IDX_TO_MONTH[date.getMonth()];
        const day = date.getDate() + 1;
        output.push({
            position: currentPosition,
            label: `${day} ${month}`,
            value: currentValue,
        });
    }
    return output;
}