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

const totalCountKPI = filterBubble.fork().viewAs({
    mount: '.count-kpi',
    type: 'kpi',
    label: 'Vehicles',
    compute: function (data) {
        return data.length;
    },
});

const meanWeight = filterBubble.fork().viewAs({
    mount: '.mean-kpi',
    type: 'kpi',
    label: 'Average Weight',
    compute: function (data) {
        return data.reduce((accum, tuple) => accum + (tuple['Weight_in_lbs'] || 0), 0) / data.length;
    },
});

const lineBubble = filterBubble.fork().transform([
    bubbles.transform.groupBy(['Origin', 'Year'], {
        'Displacement': 'mean',
        'Acceleration': 'mean',
    })
]).viewAs({
    mount: '.linechart',
    type: 'linechart',
    width: 700,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Acceleration',
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