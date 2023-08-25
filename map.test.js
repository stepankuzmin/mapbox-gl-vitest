import {assert, describe, it} from 'vitest';

import mapboxgl from 'mapbox-gl';

describe('Map', () => {
    it('constructor', () => {
        const container = window.document.createElement('div');

        const map = new mapboxgl.Map({
            container,
            testMode: true,
            interactive: true,
            style: null
        });

        assert.ok(map.getContainer());
    });
});
