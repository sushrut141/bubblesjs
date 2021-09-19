import {BubbleView} from './bubble_view';
import {applyTransforms, emptyTransforms} from './data/common';
import './global.css';

export function Bubbles(data) {
    this._data = data;
    this._children = [];
    this._transforms = [];
    this._viewBubbleIndex = undefined;
}

/**
 * Creates a bubble with the supplied data as a source.
 * 
 * @param {Array<Object>} data Tabular data as an array of objects.
 */
Bubbles.fromData = function(data) {
    return new Bubbles(data);
};

/**
 * Creates a new bubble after applying the supplied transforms on the current data.
 * Changes to the data will automatically update the child bubble.
 * 
 * @param {Array<Transform>} transformArray Transforms to apply on the data.
 */
Bubbles.prototype.transform = function(transformArray) {
    if (transformArray.length > 0) {
        let data = applyTransforms(this._data, transformArray);
        const childBubble = Bubbles.fromData(data);
        this._transforms.push(transformArray);
        this._children.push(childBubble);
        return childBubble;
    }
    return this;
};

/**
 * Creates a child bubble that observes changes to the parent bubble.
 */
Bubbles.prototype.fork = function () {
    return this.transform(emptyTransforms());
};

/**
 * Updates the data source for this bubble and all child bubbles.
 * @param {Array<Object>} data New Tabular data.
 */
Bubbles.prototype.update = function(data) {
    this._data = data;
    for (let i = 0 ; i < this._children.length; i += 1) {
        const childBubble = this._children[i];
        const transforms = this._transforms[i];
        const transformedData = applyTransforms(this._data, transforms);
        childBubble.update(transformedData);
    }
};

/**
 * Creates a visualization from the bubble based on the supplied view configuration.
 * Returns a child bubble that is updated when the visualization emits events.
 */
Bubbles.prototype.viewAs = function(viewConfig) {
    if (this._viewBubbleIndex === undefined) {
        const viewBubble = new BubbleView({
            viewConfig,
            data: this._data,
        });
        this._viewBubbleIndex = this._children.length;
        this._children.push(viewBubble);
        this._transforms.push(emptyTransforms());
        return viewBubble;
    }
    const viewBubble = this._children[this._viewBubbleIndex];
    viewBubble._updateViewConfig(viewConfig);
    return viewBubble;
};

Bubbles.prototype._pulseStart = function (data) {
    for (let i = 0 ; i < this._children.length; i += 1) {
        const childBubble = this._children[i];
        childBubble._pulseStart(data);
    }  
};

Bubbles.prototype._pulseEnd = function (data) {
    for (let i = 0 ; i < this._children.length; i += 1) {
        const childBubble = this._children[i];
        childBubble._pulseEnd(data);
    }  
};