import {isDefined, isUndefined} from './common';

describe('transform utils', () => {
    it('isDefined should return true for defined values', () => {
        expect(isDefined('')).toBe(true);
    });

    it('isUndefined should return true for undefined values', () => {
        expect(isUndefined('')).toBe(false);
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(null)).toBe(true);
    });
});