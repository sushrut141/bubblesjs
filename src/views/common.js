import { getFieldRange, isDefined } from "../data/common";

/**
 * Creates a DOM node based on the supplied parameters.
 * 
 * @param {string} tagName Tag name for the DOM node.
 * @param {Object} attributes Map of attrbutes to set on the DOM node.
 * @param {string | undefined} innerText Inner text for the created node.
 * @returns Created DOM node.
 */
export function createElem(tagName, attributes, innerText) {
    const elem = document.createElement(tagName);
    for (const key in attributes) {
        elem.setAttribute(key, attributes[key]);
    }
    if (innerText) {
        elem.innerText = innerText;        
    }
    return elem;
}

/**
 * Creates a dropdown that can be used to select a value from a list.
 * 
 * @param {string} params.name Name to show in default state.
 * @param {Array<string>} params.fields List of fields to render in dropdown.
 * @param {Function} params.onSelect Callback to execute with selected item.
 * @param {string} params.value Currently selected field in drop down.
 */
export function createDropdown(params) {
    const dropdown$ = createElem('div', {
        class: 'bubbles-dropdown',
    }, params.value || params.name);
    const onClick = (evt) => {
        if (!dropdown$.classList.contains('bubbles-dropdown--expanded')) {
            dropdown$.innerText = '';
            const listWrapper$ = createElem('div', {
                class: 'bubbles-dropdown-list',
            });
            for (let i = 0; i < params.fields.length; i += 1) {
                let className = 'bubbles-dropdown-item';
                if (params.value === params.fields[i]) {
                    className += ' bubbles-dropdown-item--selected';
                }
                const item$ = createElem('div', {
                    class: className,
                    'data-idx': i,
                }, params.fields[i]);
                listWrapper$.appendChild(item$);
            }
            dropdown$.classList.add('bubbles-dropdown--expanded');
            dropdown$.appendChild(listWrapper$);
        } else {
            dropdown$.innerText = evt.target.innerText;
            dropdown$.classList.remove('bubbles-dropdown--expanded');
            params.onSelect(evt.target.innerText, evt.target.getAttribute('data-idx'));
        }
    };
    dropdown$.addEventListener('click', onClick);
    return dropdown$;
}

/**
 * Gets the mount point from the bubble view configuration.
 * 
 * @returns {HTMLElement} DOM node to mount the bubble visualization at.
 */
export function getMountPoint(viewConfig) {
    if (viewConfig.mount) {
        if (viewConfig.mount instanceof HTMLElement) {
            return viewConfig.mount;
        }
        return document.querySelector(viewConfig.mount);
    }
    throw new Error('mount field needs to be specified in view configuration.');
}


/**
 * Computes the ideal number off bands to use while rendering axis.
 */
export function getNumerixAxisBands(width) {
    return Math.floor(width / 50);
}

/**
 * Computes the axis range of the data that can be split into the supplied
 * number of bands.
 * 
 * @param {Array<Object>} params.data Data used by the bubble.
 * @param {string} params.field Name of the field whose range to compute.
 * @param {number} params.bands Number of bands range can be split into.
 */
export function getAxisBounds(params) {
    const bands = params.bands;
    const [_, maximum] = getFieldRange(params.data, params.field);
    // find the smallest multiple of `bands` that can divide the maximum value
    return [0, (1 + Math.floor(maximum / bands)) * bands];
}