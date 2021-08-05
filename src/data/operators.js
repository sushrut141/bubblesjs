import {isDefined, isUndefined} from './common';

export function transformer(operator, data) {
    const {process} = operator;
    return process(data);
}

export function filter(predicate) {
    return {
        type: 'filter',
        process: data => data.filter(predicate),
    };
}

export function map(mappingFn) {
    return {
        type: 'map',
        process: data => data.map(mappingFn),
    };
}

export function groupBy(keys, aggregationMap) {
    return {
        type: 'groupBy',
        process: (data) => {
            let aggKeys = Array.isArray(keys) ? keys: [keys];
            const dataBuckets = bucketDataByKeys(aggKeys, data);
            return aggregateDataBuckets(dataBuckets, aggregationMap, aggKeys);
        },
    };
}

/**
 * Spilts data into series by recursively bucketing data by the list of keys.
 * 
 * @param {Array<string>} keys Keys to bucket by.
 * @param {Array<Object>} data Data to bucket.
 */
export function bucketDataByKeys(keys, data) {
    function recurse(array, i) {
        if (i === keys.length) {
            return array;
        }
        const bucket = {};
        const key = keys[i];
        for (let i = 0; i < array.length; i += 1) {
            const current = array[i];
            const value = current[key];
            if (isDefined(value)) {
                if (value in bucket) {
                    bucket[value].push(current);
                } else {
                    bucket[value] = [current];
                }
            }
        }
        for (const bucketKey in bucket) {
            bucket[bucketKey] = recurse(bucket[bucketKey], i + 1);
        }
        return bucket;
    }
    return recurse(data, 0);
}

function aggregateDataBuckets(rootBucket, aggregationMap, aggregationKeys) {
    const output = [];
    function recurse(bucket, keys, level, row) {
        if (Array.isArray(bucket)) {
            const aggregation = aggregateData(bucket, aggregationMap);
            for (const aggKey in aggregation) {
                row[aggKey] = aggregation[aggKey];
            }
            output.push(row);
        } else {
            for (const bucketKey in bucket) {
                const field = keys[level];
                const value = bucketKey;
                const newBucket = Object.assign({}, {[field]: value}, row);
                recurse(bucket[bucketKey], keys, level + 1, newBucket);
            }
        }
    }
    recurse(rootBucket, aggregationKeys, 0, {});
    return output;
}

function aggregateData(data, aggMap) {
    const result = {};
    for (const key of Object.keys(aggMap)) {
        const aggreation = aggMap[key];
        let output;
        switch (aggreation) {
        case 'min':
            output = computeMin(data, key);
            break;
        case 'max':
            output = computeMax(data, key);
            break;
        case 'mean':
            output = computeMean(data, key);
            break;
        case 'sum':
            output = computeSum(data, key);
            break;
        case 'count':
            output = computeCount(data, key);
            break;
        default:
            throw new Error('Unknown aggregation operator ' + aggreation);
        }
        result[key] = output;
    }
    return result;
}

function computeMin(data, field) {
    let minimum = undefined;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            if (isUndefined(minimum)) {
                minimum = tuple[field];
            } else {
                minimum = Math.min(minimum, tuple[field]);
            }
        }
    }
    return minimum;
}

function computeMax(data, field) {
    let maximum = undefined;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            if (isUndefined(maximum)) {
                maximum = tuple[field];
            } else {
                maximum = Math.max(maximum, tuple[field]);
            }
        }
    }
    return maximum;
}

function computeSum(data, field) {
    let temp = 0;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            temp += tuple[field];
        }
    }
    return temp;
}

function computeMean(data, field) {
    let temp = 0.0;
    let counter = 0.0;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            temp += tuple[field];
            counter += 1;
        }
    }
    return counter > 0 ? (temp / counter) : 0;
}

function computeCount(data, field) {
    let counter = 0.0;
    for (let i = 0; i < data.length; i += 1) {
        const tuple = data[i];
        if (isDefined(tuple[field])) {
            counter += 1;
        }
    }
    return counter;
}
