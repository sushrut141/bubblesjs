import { isDefined } from "../../data/common";

export const TYPE_COMPARATOR_MAP = {
    'string': ['contains', 'does not contain', 'equals', 'does not equal', 'is empty', 'is not empty'],
    'number': ['greater than', 'less than', 'equal to'],
    'date': ['before', 'after'],
};

export const COMPARATOR_PREDICATE_MAP = {
    'contains': (value, base) => isDefined(value) && value.indexOf(base) !== -1,
    'does not contain': (value, base) => value && value.indexOf(base) === -1,
    'equals':  (value, base) => value === base,
    'does not equal': (value, base) => value !== base,
    'is empty': (value) => isDefined(value) && value.length === 0,
    'is not empty': (value) => isDefined(value) && value.length !== 0,
    'greater than': (value, base) => value > base,
    'less than': (value, base) => value < base,
    'equal to': (value, base) => value === base,
    'before': (value, base) => new Date(value) < new Date(base),
    'after': (value, base) => new Date(value) > new Date(base),
};