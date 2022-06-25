const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: secrets.CYPRESS_RECORD_KEY
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8080/vue-grade-calculator/"
  },
});
