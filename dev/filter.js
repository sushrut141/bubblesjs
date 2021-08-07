const Bubbles = bubbles.bubbles

const transform = bubbles.transform;

const bubble = Bubbles.fromData(DATA);

const filterBubble = bubble.fork().viewAs({
    mount: '.filter-bar',
    type: 'filter',
    types: {
        Acceleration: 'number',
        Cylinders: 'number',
        Displacement: 'number',
        Horsepower: 'number',
        Miles_per_Gallon: 'number',
        Name: 'string',
        Origin: 'string',
        Weight_in_lbs: 'number',
        Year: 'date',
    },
});

const lineBubble = filterBubble.fork().viewAs({
    mount: '.linechart',
    type: 'linechart',
    width: 800,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Displacement',
    },
});

const barChartBubble = filterBubble.fork().viewAs({
    mount: '.barchart',
    type: 'barchart',
    width: 800,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Acceleration',
    },
});

const seriesBarChartBubble = filterBubble.fork().viewAs({
    mount: '.series-barchart',
    type: 'barchart',
    width: 800,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Acceleration',
        color: 'Origin'
    },
});

const tableBubble = filterBubble.fork().viewAs({
    mount: '.table',
    type: 'table',
    headers: {
        Name: 'Name',
        Origin: 'Origin',
        Weight_in_lbs: 'Weight',
        Cylinders: 'Cylinders',
    },
});