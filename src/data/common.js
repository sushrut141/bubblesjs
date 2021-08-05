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
    return Object.keys(values);
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

export function getDataSeries(data, ) {

}