var fs = require('fs');
const FILE = "./server/data.json"

module.exports = {
    clearData: function () {
        const emptyArray = [];
        const emptyString = JSON.stringify(emptyArray)
        fs.writeFile(FILE, emptyString, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync(FILE, "utf8"));
            }
        })
        return 1;
    },
    bar: function () {
        // whatever
    }
};
