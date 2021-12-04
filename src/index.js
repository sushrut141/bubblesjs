import {Bubbles} from './bubbles';
import {
    map,
    filter,
    groupBy,
} from './data/operators';

// TODO(sushruts) - make bubbles the default export

export default {
    bubbles: Bubbles,
    transform: {
        map,
        filter,
        groupBy,
    },
};