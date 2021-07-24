import {transformer} from './operators';

export function applyTransforms(sourceData, transformArray) {
    let data = sourceData;
    for (let i = 0; i < transformArray.length; i += 1) {
        data = transformer(transformArray[i], data);
    }
    return data;
}

export function emptyTransforms() {
    return [];
}

export function isDefined(val) {
    if (val === undefined || val === null) {
        return false;
    }
    return true;
}

export function isUndefined(val) {
    return !isDefined(val);
}

export function getDataFields(data) {
    if (data.length) {
        return Object.keys(data[0]);
    }
    return [];
}

export function getFieldValues(data, field) {
    const values = {};
    for (let i = 0; i < data.length; i += 1) {
        if (field in data[i]) {
            values[data[i][field]] = true;
        }
    }
    return Object.keys(values);
}