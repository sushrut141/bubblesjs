import {transformer} from './operators';

/**
 * Computes result of applying supplied transforms to the data.
 * 
 * @param {Array<Object>} sourceData Data array to visualize with bubbles.
 * @param {Array<Object>} transformArray List of operators to transform the data by.
 */
export function applyTransforms(sourceData, transformArray) {
    let data = sourceData;
    for (let i = 0; i < transformArray.length; i += 1) {
        data = transformer(transformArray[i], data);
    }
    return data;
}

/**
 * Utlity to represent empty transform list.
 */
export function emptyTransforms() {
    return [];
}

/**
 * Returns true if value is defined or null.
 */
export function isDefined(val) {
    if (val === undefined || val === null) {
        return false;
    }
    return true;
}

/**
 * Returns true if value is not undefined or null.
 */
export function isUndefined(val) {
    return !isDefined(val);
}

/**
 * Gets the list of fields present in the dataset.
 */
export function getDataFields(data) {
    if (data.length) {
        return Object.keys(data[0]);
    }
    return [];
}

/**
 * Gets the list of unique values in a categorical dataset. 
 * 
 * @param {Array<Object>} data Data array to visualize with bubbles.
 * @param {string} field Field whose unique values in the data are to computed.
 */
export function getFieldValues(data, field) {
    const values = {};
    for (let i = 0; i < data.length; i += 1) {
        if (field in data[i]) {
            values[data[i][field]] = true;
        }
    }
    return Object.keys(values).sort();
}

/**
 * Get the sorted list of values associated with a numeric field.
 */
export function getNumericFieldData(data, field) {
    const output = [];
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            output.push(tuple[field]);
        }
    }
    return output.sort();
}

export function getTemporalFieldData(data, field) {
    const output = [];
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            output.push(new Date(tuple[field]).getTime());
        }
    }
    return output;
}

/**
 * Computes the [min, max] range for a field in the supplied data.
 * 
 * @param {Array<Object>} data Data array to visualize with bubbles.
 * @param {string} field Name of the field whose range to compute.
 * @returns Array with [min, max] values of the field.
 */
export function getFieldRange(data, field) {
    let minimum = undefined;
    let maximum = undefined;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isUndefined(minimum) && isDefined(tuple[field])) {
            minimum = tuple[field];
        }
        if (isUndefined(maximum) && isDefined(tuple[field])) {
            maximum = tuple[field];
        }
        if (isDefined(tuple[field])) {
            minimum = Math.min(minimum, tuple[field]);
            maximum = Math.max(maximum, tuple[field]);
        }
    }
    return [minimum, maximum];
}

export function getTimeFieldRange(data, field) {
    let minimum = undefined;
    let maximum = undefined;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isUndefined(minimum) && isDefined(tuple[field])) {
            minimum = new Date(tuple[field]).getTime();
        }
        if (isUndefined(maximum) && isDefined(tuple[field])) {
            maximum = new Date(tuple[field]).getTime();
        }
        if (isDefined(tuple[field])) {
            const epoch = new Date(tuple[field]).getTime();
            minimum = Math.min(minimum, epoch);
            maximum = Math.max(maximum, epoch);
        }
    }
    return [minimum, maximum];
}



/**
 * Gets the value assciated with a field split by series.
 * 
 * @param {Array<Object>} data Data array to visualize.
 * @param {string} keyField Primary key whose value to read.
 * @param {string} valueField Field whose value to read.
 * @param {string} series Field to split the data series by.
 * @returns Data mapping associated with this split.
 */
export function getSeriesDataMapping(data, keyField, valueField, series) {
    const mapping = {};
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (
            isDefined(tuple[keyField]) &&
            isDefined(tuple[valueField]) &&
            isDefined(tuple[series])
        ) {
            mapping[`${tuple[series]}-${tuple[keyField]}`] = tuple[valueField];
        }
    }
    return mapping;
}

/**
 * Creates an association between the columsn used on x and y axis.
 * This utility overwrites the value when multiple y values are present for 
 * a given x axis value.
 * @param {Array<Object>} data Data array to visualize.
 * @param {string} xField x axis field to read.
 * @param {string} yField y axis field to read.
 */
export function getDataMapping(data, xField, yField) {
    const mapping = {};
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (
            isDefined(tuple[xField]) &&
            isDefined(tuple[yField])
        ) {
            mapping[tuple[xField]] = tuple[yField];
        }
    }
    return mapping;
}

/**
 * Gets the list of values that are either equal to the target or
 * the list of largest value tuples less than the target.
 * 
 * @param {Array<Object>} sortedData Data tuples.
 * @param {String} field The data field.
 * @param {Number} targetValue Target value to find.
 * @returns 
 */
export function getDataRangeForValue(sortedData, field, targetValue) {
    const data = sortedData.filter(tuple => isDefined(tuple[field]));
    // find the largest value <= target
    let start = 0;
    let end = data.length - 1;
    // 0 1 1 1 3
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const row = data[mid];
        const value = row[field];
        if (value > targetValue) {
            end = mid - 1;
        } else if (value < targetValue) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    if (start < data.length && data[start][field] === targetValue) {
        const output = [];
        for (let i = start; i < data.length; i += 1) {
            output.push(data[i]);
        }
        return output;
    }
    if (start < data.length && end >= 0) {
        const right = Math.abs(data[start][field] - targetValue);
        const left = Math.abs(data[end][field] - targetValue);
        if (left <= right) {
            const output = [data[end]];
            for (let i = end - 1; i >= 0; i -= 1) {
                if (data[i][field] === data[end][field]) {
                    output.push(data[i]);
                }
            }
            return output;
        }
        const output = [data[start]];
        for (let i = start + 1; i < data.length; i += 1) {
            if (data[i][field] === data[start][field]) {
                output.push(data[i]);
            }
        }
        return output;
    }
    return [];
}

/**
 * Prettifies a number so that it can be represented concisely.
 * Example: 32456 -> 3.24k
 */
export function prettifyNumber(number) {
    // TODO(sushruts) - add better logic to handle larger numbers.
    return number.toFixed(2);
}

/**
 * Finds the row with the smallest value greater than or equal 
 * to the target value specified for a given field.
 * 
 * @param {Array<Object>} sortedData Array of objects to visualize.
 * @param {string} field FIeld whose value to read.
 * @param {number} target Target value to compare against.
 */
export function bisectDataLeft(sortedData, field, target) {
    const data = sortedData.filter(tup => isDefined(tup[field]));
    let l = 0;
    let r = data.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const tuple = data[mid];
        if (new Date(tuple[field]).getTime() > new Date(target).getTime()) {
            r = mid - 1
        } else {
            l = mid + 1;
        }
    }
    return r + 1;
}

/**
 * Sorts the data by the specified field.
 * 
 * @param {Array<Object>} data Array of objects to visualize.
 * @param {string} field Field to sort by.
 */
export function sortByField(data, field, temporal = false) {
    if (temporal) {
        return data.filter(tuple => isDefined(tuple[field])).sort((a, b) => {
            const x = new Date(a[field]).getTime(); 
            const y = new Date(b[field]).getTime();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    return data.filter(tuple => isDefined(tuple[field])).sort((a, b) => {
        const x = a[field]; 
        const y = b[field];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}