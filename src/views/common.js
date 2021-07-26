/**
 * Creates a DOM node based on the supplied parameters.
 * 
 * @param {string} tag Tag name for the DOM node.
 * @param {Object} attributes Map of attrbutes to set on the DOM node.
 * @param {string | undefined} innerText Inner text for the created node.
 * @returns Created DOM node.
 */
export function createElem(tag, attributes, innerText) {
    const elem = document.createElement(tag);
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
 * 
 */
export function createDropdown(params) {
    const dropdown$ = createElem('div', {
        class: 'bubbles-dropdown'
    }, params.name);
    const onClick = (evt) => {
        if (!dropdown$.classList.contains('bubbles-dropdown--expanded')) {
            dropdown$.innerText = '';
            const listWrapper$ = createElem('div', {
                class: 'bubbles-dropdown-list',
            });
            for (let i = 0; i < params.fields.length; i += 1) {
                const item$ = createElem('div', {
                    class: 'bubbles-dropdown-item',
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