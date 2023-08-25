import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        include: ['**/*.test.js'],
        testTimeout: 60_000,
        hookTimeout: 60_000,
        browser: {
            name: 'chrome',
            enabled: true,
            headless: true,
        }
    }
});
