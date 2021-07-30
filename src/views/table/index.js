import { isDefined } from "../../data/common";
import { createElem, getMountPoint } from "../common";
import './table.css';

/**
 * Render a Table Visualization that shows the supplied columns.
 * 
 * @param {Array<Object>} params.data Data array to visualize with bubbles.
 * @param {Object} params.viewConfig View configuration for the Table view.
 * @param {Object} params.viewConfig.headers Map of field name to Table header.
 * @param {Object} params.viewConfig.rowCount Maximum number of rows to render in a page.
 */
export function TableView(params) {
    this._data = params.data;
    this._viewConfig = params.viewConfig;
    this._rowCount = this._viewConfig.rowCount || 10;
    this._columns = Object.keys(this._viewConfig.headers);
    this._page = 0;
    this._elem$ = undefined;
    this._headers$ = undefined;
    this._render();
}

TableView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = viewConfig;
    }
    this._render();
};

TableView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (isDefined(this._elem$)) {
        root$.removeChild(this._elem$);
    }
    this._createTableHeaders();
    this._createTableBody();
    const elem$ = createElem('table', {
        class: 'bubbles bubbles-table'
    });
    elem$.appendChild(this._headers$);
    elem$.appendChild(this._body$);
    this._elem$ = elem$;
    root$.appendChild(this._elem$);
};

TableView.prototype._createTableHeaders = function () {
    const headers$ = createElem('thead', {
        class: 'bubbles-table-header',
    });
    const row$ = createElem('tr', {
        class: 'bubbles-table-row'
    });
    const headers = this._viewConfig.headers;
    for (let i = 0; i < this._columns.length; i += 1) {
        const cell$ = createElem('th', {
            class: 'bubbles-table-column'
        }, headers[this._columns[i]]);
        row$.appendChild(cell$);
    }
    headers$.appendChild(row$);
    this._headers$ = headers$;
};

TableView.prototype._createTableBody = function () {
    const total = this._rowCount;
    const start = (this._page * total);
    const end = Math.min(start + total, this._data.length);
    const body$ = createElem('tbody', {
        class: 'bubbles-table-body'
    });
    for (let i = start; i < end; i += 1) {
        const tuple = this._data[i];
        const row$ = createElem('tr', {
            class: 'bubbles-table-row'
        });
        for (let j = 0; j < this._columns.length; j += 1) {
            const cell$ = createElem('td', {
                class: 'bubbles-table-column',
            }, tuple[this._columns[j]]);
            row$.appendChild(cell$);
        }
        body$.appendChild(row$);
    }
    this._body$ = body$;
};

TableView.prototype._createPaginator = function () {
    const paginator$ = createElem('div', {
        class: 'bubbles-table-paginator',
    });

};

