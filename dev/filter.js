const Bubbles = bubbles.bubbles

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
    width: 700,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Displacement',
        color: 'Origin',
    },
});

const seriesBarChartBubble = lineBubble.fork().viewAs({
    mount: '.series-barchart',
    type: 'barchart',
    width: 600,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Acceleration',
        color: 'Origin'
    },
});

const barChartBubble = seriesBarChartBubble.fork().viewAs({
    mount: '.barchart',
    type: 'barchart',
    width: 600,
    height: 400,
    channels: {
        x: 'Origin',
        y: 'Acceleration',
    },
});

const tableBubble = filterBubble.fork().viewAs({
    mount: '.table',
    type: 'table',
    rowCount: 7,
    headers: {
        Name: 'Name',
        Origin: 'Origin',
        Weight_in_lbs: 'Weight',
        Cylinders: 'Cylinders',
    },
});