import {transformer, filter, map, groupBy} from './operators';

const BASE_DATA = [{
    category: 'A',
    rank: 'jounin',
    missions: 34,
}, {
    category: 'B',
    rank: 'chunin',
    missions: 23,
}, {
    category: 'C',
    rank: 'genin',
    missions: 14
}, {
    category: 'A',
    rank: 'chunin',
    missions: 18,
}];

describe('test transform operators', () => {
    it('filters data correctly', () => {
        const filterOperator = filter(tuple => tuple['category'] === 'B');

        const outout = transformer(filterOperator, BASE_DATA);

        expect(outout).toEqual([{
            category: 'B',
            rank: 'chunin',
            missions: 23,
        }]);
    });

    it('maps data correctly', () => {
        const mapOperator = map(tuple => {
            tuple['area']  = tuple['radius'] * tuple['radius'];
            return tuple;
        });

        const output = transformer(mapOperator, [{
            radius: 2,
        }]);

        expect(output).toEqual([{
            radius: 2,
            area: 4,
        }]);
    });

    it('can groupBy and aggregate data correctly by a single key', () => {
        const groupByOperator = groupBy('category', {
            missions: 'sum'
        });

        const output = transformer(groupByOperator, BASE_DATA);

        expect(output).toEqual([{
            category: 'A',
            missions: 52,
        }, {
            category: 'B',
            missions: 23,
        }, {
            category: 'C',
            missions: 14,
        }]);
    });

    it('can groupBy and aggregate data correctly by multiple keys', () => {
        const groupByOperator = groupBy(['category', 'rank'], {
            missions: 'sum'
        });

        const output = transformer(groupByOperator, BASE_DATA);

        expect(output).toEqual([
            { category: 'A', rank: 'jounin', missions: 34 },
            { category: 'A', rank: 'chunin', missions: 18 },
            { category: 'B', rank: 'chunin', missions: 23 },
            { category: 'C', rank: 'genin', missions: 14 }
        ]);
    });

    it('can groupBy and aggregate data as count', () => {
        const perCategoryCount = groupBy(['category'], {
            missions: 'count'
        }); 

        expect(transformer(perCategoryCount, BASE_DATA)).toEqual([
            { category: 'A', missions: 2 },
            { category: 'B', missions: 1 },
            { category: 'C', missions: 1 }
        ]);
    });

    it('can groupBy and aggregate data as minimum', () => {
        const perRankMinimum = groupBy(['rank'], {
            missions: 'min'
        });

        expect(transformer(perRankMinimum, BASE_DATA)).toEqual([
            { rank: 'jounin', missions: 34 },
            { rank: 'chunin', missions: 18 },
            { rank: 'genin', missions: 14 }
        ]);
    });

    it('can groupBy and aggregate data as maximum', () => {
        const perRankMaximum = groupBy(['rank'], {
            missions: 'max'
        });

        expect(transformer(perRankMaximum, BASE_DATA)).toEqual([
            { rank: 'jounin', missions: 34 },
            { rank: 'chunin', missions: 23 },
            { rank: 'genin', missions: 14 }
        ]);
    });

    it('can groupBy and aggregate data as mean', () => {
        const perRankMean = groupBy(['category'], {
            missions: 'mean'
        });

        expect(transformer(perRankMean, BASE_DATA)).toEqual([
            { category: 'A', missions: 26 },
            { category: 'B', missions: 23 },
            { category: 'C', missions: 14 }
        ]);
    });
});