const Bubbles = bubbles.bubbles

const root = Bubbles.fromData(DATA);

const refugees = root.viewAs({
    type: 'linechart',
    mount: '.linechart',
    width: 900,
    height: 400,
    channels: {
        x: 'Date',
        y: 'Count',
    },
});
