import {Bubbles} from './bubbles';
import {createViewFor} from './views/index';

export function BubbleView(params) {
    this._viewConfig = params.viewConfig;
    this._data = params.data;
    this._children = [];
    this._view = createViewFor({
        bubbleView: this,
        data: this._data,
        viewConfig: this._viewConfig,
    });
}

BubbleView.prototype.update = function (data) {
    this._view.update({
        data,
    });
    for (let i = 0; i < this._children.length; i += 1) {
        this._children[i].update(data);
    }
};

BubbleView.prototype.fork = function () {
    const childBubble = Bubbles.fromData(this._data);
    this._children.push(childBubble);
    return childBubble;
};

BubbleView.prototype._updateViewConfig = function(viewConfig) {
    this._viewConfig = viewConfig;
    this._view.update({
        viewConfig: this._viewConfig,
    });
};

BubbleView.prototype._pulseStart = function (data) {
    // update data to pulsed data
    this._view.update({
        data,
    });
    for (let i = 0 ; i < this._children.length; i += 1) {
        const childBubble = this._children[i];
        childBubble._pulseStart(data);
    }  
};

BubbleView.prototype._pulseEnd = function (data) {
    // reset data to main data
    this._view.update({
        data: this._data,
    });
    for (let i = 0 ; i < this._children.length; i += 1) {
        const childBubble = this._children[i];
        childBubble._pulseEnd(data);
    }  
};