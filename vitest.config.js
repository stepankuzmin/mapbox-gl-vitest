import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        include: ['**/*.test.js'],
        testTimeout: 60_000,
        hookTimeout: 60_000,
    },
    browser: {
        enabled: true,
        name: 'chrome',
        provider: 'webdriverio',
        headless: false,
    }
});
