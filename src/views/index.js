import {FilterView} from './filter/index';
import {TableView} from './table/index';
import {BarChartView} from './barchart/index';

const VIEW_MAP = {
    'filter': FilterView,
    'table': TableView,
    'barchart': BarChartView,
};

export function createViewFor(params) {
    const type = params.viewConfig.type;
    const View = VIEW_MAP[type];
    return new View(params);
}