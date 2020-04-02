// const cmdIndex = require('./index.template');
// const cmdBase = require('./cmd/cmd-base.template.txt');
// const cmdBuilder = require('./cmd/cmd-builder.template.txt');
const fs = require('fs');



const buildKeys = () =>{
    return {
        key: "#command-aggregated#", 
        value: "getLocationCommand : require('./get-location.command'), getStopByNumberCommand : require('./get-stop-by-number.command'),"
    }
}


const buildCmdIndex = () => {
    try {
        const data = fs.readFileSync('./templates/cmd/index.template', 'utf8');
        var keys = buildKeys();
        var resData = data.replace(keys.key, keys.value);
        fs.mkdirSync('./output/cmd', {recursive: true}, (err) => {
            console.error("error to create directory" + err)
        });

        fs.writeFileSync('./output/cmd/index.js', resData);
      } catch (err) {
        console.error(err)
      }
}

module.exports =  { buildCmdIndex };