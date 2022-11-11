const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'clear:data': () => {
          const utility = require("./server/utility.js")
          return utility.clearData()
        }
      })
    },
  },
});
