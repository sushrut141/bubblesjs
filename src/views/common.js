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