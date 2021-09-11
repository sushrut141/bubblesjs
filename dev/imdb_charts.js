const Bubbles = bubbles.bubbles

const bubble = Bubbles.fromData(IMDB_DATA);

const filterBubble = bubble.fork().viewAs({
    mount: '.filter-bar',
    type: 'filter',
    types: {
        "Title": "string",
        "Genre": "string",
        "Director": "string",
        "Year": "date",
        "Runtime (Minutes)": 'number',
        "Rating": 'number',
        "Votes": 'number',
        "Revenue (Millions)": 'number'
    },
});

const tableBubble = filterBubble.fork().transform([
    bubbles.transform.groupBy(['Genre', 'Director'], {
        'Revenue (Millions)': 'max',
    })
]).viewAs({
    mount: '.table',
    width: 600,
    height: 400,
    type: 'table',
    rowCount: 5,
    headers: {
        'Revenue (Millions)': 'Revenue',
        'Genre': 'Genre',
        'Director': "Director",
    },
});

const totalMovesBubble = filterBubble.fork().viewAs({
    mount: '.total-kpi',
    type: 'kpi',
    label: 'Total Movies',
    compute: function (data) {
        return data.length;
    },
});

const averageRvenueBubble = filterBubble.fork().viewAs({
    mount: '.mean-revenue-kpi',
    type: 'kpi',
    label: 'Average Revenue (Millions)',
    compute: function (data) {
        return data.reduce((accum, tup) => {
            const revenue = tup['Revenue (Millions)'];
            if (typeof revenue === 'number') {
                return accum + revenue;
            }
            return accum;
        }, 0) / data.length;
    },
});

const barChart = filterBubble.fork().transform([
    bubbles.transform.groupBy('Genre', {
        'Revenue (Millions)': 'max',
    }),
]).viewAs({
    mount: '.barchart',
    width: 800,
    height: 400,
    type: 'barchart',
    channels: {
        x: 'Genre',
        y: 'Revenue (Millions)'
    }
})

const lineChart = filterBubble.fork().transform([
    bubbles.transform.groupBy('Year', {
        'Revenue (Millions)': 'sum',
        'Votes': 'mean',
        'Runtime (Minutes)': 'mean',
    }),
    bubbles.transform.map(tuple => {
        return {
            ...tuple,
            'Revenue (Millions)': tuple['Revenue (Millions)'].toFixed(2),
        };
    }),
]).viewAs({
    mount: '.linechart',
    width: 580,
    height: 400,
    type: 'linechart',
    channels: {
        x: 'Year',
        y: 'Revenue (Millions)'
    },
});