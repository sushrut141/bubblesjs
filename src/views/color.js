const COLORS = [
    '#7cb5ec',
    '#f7a35c',
    '#28a745',
    '#20c997',
    '#17a2b8',
    '#868e96',
    '#343a40',
    '#007bff',
    '#868e96',
    '#007bff',
    '#6610f2',
    '#6f42c1',
    '#e83e8c',
    '#dc3545',
    '#fd7e14',
    '#ffc107',
    '#28a745',
    '#17a2b8',
    '#ffc107',
    '#dc3545',
];

/**
 * Returns a color associated with the supplied index.
 * Color will repeat if index grows too large.
 */
export function getColorForIdx(idx) {
    const i = idx % COLORS.length;
    return COLORS[i];
}