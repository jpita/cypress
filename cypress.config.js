const { defineConfig } = require("cypress");

module.exports = defineConfig({
  integration: {
    integrationFolder: "cypress/integration/api-tests",
  },
  e2e: {
    baseUrl: "https://demoqa.com/books",
    watchForFileChanges: false,
    viewportWidth: 1200,
    viewportHeight: 1060,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
