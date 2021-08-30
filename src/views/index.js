import {FilterView} from './filter/index';
import {TableView} from './table/index';
import {BarChartView} from './barchart/index';
import {LineChartView} from './linechart/index';
import {KPIView} from './kpi/index';

const VIEW_MAP = {
    'filter': FilterView,
    'table': TableView,
    'barchart': BarChartView,
    'linechart': LineChartView,
    'kpi': KPIView,
};

/**
 * Creates a view depending on the supplied view configuration.
 * 
 * @param {Object} params.viewConfig View configuration fr the view.
 * @param {Array<Object>} params.data Data array to be visualized.
 * @param {BubbleView} params.bubbleView Bubble view associated with this view.
 */
export function createViewFor(params) {
    const type = params.viewConfig.type;
    const View = VIEW_MAP[type];
    return new View(params);
}