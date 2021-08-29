import { isDefined } from "../data/common";

/**
 * Creates an HTML element in the SVG namespace with the supplied attributes.
 * 
 * @param {string} tagName Tag name for the SVG node.
 * @param {Object} attributes Map of attributes to set on the SVG node.
 * @param {string|undefined} innerText Inner text foor the created node.
 * @returns Created SVG node.
 */
export function createSVGElem(tagName, attributes = {}, innerText) {
    const elem$ = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    for (const key in attributes) {
        elem$.setAttribute(key, attributes[key]);
    }
    if (isDefined(innerText)) {
        elem$.textContent = innerText;
    }
    return elem$;
}