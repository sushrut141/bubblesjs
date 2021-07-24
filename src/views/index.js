import {FilterView} from './filter/index';
import {TableView} from './table/index';

const VIEW_MAP = {
    'filter': FilterView,
    'table': TableView,
};

export function createViewFor(params) {
    const type = params.viewConfig.type;
    const View = VIEW_MAP[type];
    return new View(params);
}