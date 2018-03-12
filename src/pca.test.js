// @flow
import test from 'ava';
import _ from 'lodash/fp';
import PCA from 'ml-pca';

test('', t => {
    const dataset = [[0, 0], [0.25, 0.155], [0.5, 0.2], [0.75, 0.4], [1, 0.5]];

    const pca = new PCA(dataset, {
        center: true,
        scale: false
    });

    const transposed = pca.getLoadings();
    const pc1 = _.nth(0, transposed);
    const pc2 = _.nth(1, transposed);

    t.true(Array.isArray(transposed));

    for (let vec of transposed) {
        t.true(Array.isArray(vec));
    }
});