const Bubbles = bubbles.bubbles

const DATA_1989_1995 = AFGHAN_DATA.filter(item => (item['Year'] >= 1989 && item['Year'] <= 1995));

const root = Bubbles.fromData(AFGHAN_DATA).transform([
    bubbles.transform.map(item => {
        return {
            ...item,
            'Year': `${item['Year']}`,
        };
    }),
    bubbles.transform.filter(item => item['Province']),
    bubbles.transform.filter(item => item['Count'])
]);

const bubble = root.viewAs({
    mount: '.filter-bar',
    type: 'filter',
    types: {
        'Year': 'date',
        'Province': 'string',
        'Count': 'number',
    },
});

const countPerYear = bubble.fork().transform([
    bubbles.transform.groupBy(['Year'], {
        'Count': 'sum',
    })
]).viewAs({
    title: 'Deaths per Year',
    type: 'linechart',
    mount: '.linechart',
    width: 800,
    height: 400,
    channels: {
        x: 'Year',
        y: 'Count',
    },
});

const perProvince = bubble.fork().transform([
    bubbles.transform.filter(item => item['Count'] > 0),
    bubbles.transform.groupBy(['Province'], {
        'Count': 'sum',
    })
]).viewAs({
    title: 'Deaths Per Province',
    type: 'barchart',
    mount: '.barchart',
    width: 1200,
    height: 400,
    channels: {
        x: 'Province',
        y: 'Count',
    },
});

