import { isDefined, isUndefined } from "../../data/common";
import { createDropdown, createElem, getMountPoint } from "../common";
import './table.css';

/**
 * Renders a Table Visualization that shows the supplied columns.
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
    this._paginator$ = undefined;
    this._render();
}

TableView.prototype.update = function (params) {
    if (isDefined(params.data)) {
        this._data = params.data;
    }
    if (isDefined(params.viewConfig)) {
        this._viewConfig = viewConfig;
    }
    this._page = 0;
    this._render();
};

TableView.prototype._render = function () {
    const root$ = getMountPoint(this._viewConfig);
    if (isDefined(this._elem$)) {
        root$.removeChild(this._elem$);
        root$.removeChild(this._paginator$);
    }
    const elem$ = createElem('table', {
        class: 'bubbles bubbles-table'
    });
    this._createTableHeaders();
    this._createTableBody();
    this._createTablePaginator();
    elem$.appendChild(this._headers$);
    elem$.appendChild(this._body$);
    this._elem$ = elem$;
    root$.appendChild(this._elem$);
    root$.appendChild(this._paginator$);
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

TableView.prototype._createTablePaginator = function () {
    const paginator$ = createElem('div', {
        class: 'bubbles bubbles-table-paginator',
    });
    // page size selector
    const pageSizeSelector$ = createDropdown({
        name: this._rowCount,
        fields: [10, 25, 50],
        value: this._rowCount,
        onSelect: (value) => {
            this._rowCount = parseInt(value, 10);
            this._page = 0;
            this._render();
        },
    });
    // row range indicator
    pageSizeSelector$.classList.add('bubbles-table-paginator__pagesize');
    const start = (this._page * this._rowCount) + 1;
    const end = start + this._rowCount - 1;
    const paginationRange$ = createElem('div', {
        class: 'bubbles-table-paginator__range'
    }, `Showing rows ${start}-${end} of ${this._data.length}`);
    paginator$.appendChild(paginationRange$);
    paginator$.appendChild(pageSizeSelector$);
    this._createPaginationArrows(paginator$);
    this._paginator$ = paginator$;
};

TableView.prototype._createPaginationArrows = function (mount$) {
    const leftArrow$ = createElem('button', {
        class: 'bubbles-table-paginator__arrow',
    }, '<');
    const rightArrow$ = createElem('button', {
        class: 'bubbles-table-paginator__arrow',
    }, '>');
    leftArrow$.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this._page -= 1;
        this._render();
    });
    rightArrow$.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this._page += 1;
        this._render();
    });
    leftArrow$.disabled = this._page == 0;
    rightArrow$.disabled = this._page === Math.ceil(this._data.length / this._rowCount);
    mount$.appendChild(leftArrow$);
    mount$.appendChild(rightArrow$);
};

