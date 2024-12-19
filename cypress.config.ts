import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Cypress task configuration:
      on('task', {
        storeValue(value: any) {
          global.sharedValue = value;
          return null;
        },
        getValue() {
          return global.sharedValue || null;
        },
      });
    },
    baseUrl: 'http://example.com',
    supportFile: 'cypress/support/e2e.ts',
  },
});
