const { defineConfig } = require("cypress");
//const { resolve } = require("cypress/types/bluebird");
const csv =require('@fast-csv/parse')

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  e2e: {
    env: {
      API_BASE_URL: "https://reqres.in",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        //create task read from csv
        readFromCsv() {
          return new Promise((resolve) => {
            let dataArray = [];
            csv
              .parseFile("./myCsv.csv", { headers: false })
              .on("data", (data) => {
                dataArray.push(data);
              })
              .on("end", () => {
                resolve(dataArray);
              });
          });
        },
      });
    },
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    //baseUrl: 'https://coast.noaa.gov/digitalcoast/tools/slr.html',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  },
});


