const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      video: true,
    require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/**/*spec.js'
  },
});
