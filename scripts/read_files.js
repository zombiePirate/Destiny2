const fs = require('fs');
const path = require('path');
// directory path
const weaponsFolder = path.join(__dirname,'../weapons');

// list all files in the directory
fs.readdir(weaponsFolder, (err, files) => {
    if (err) {
        throw err;
    }

    // files object contains all files names
    // log them on console
    files.forEach(file => {
        let weaponFile = path.join(weaponsFolder, file);
        fs.readFile(weaponFile, 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            //let xpto = data.split(/\r?\n/);
            //console.log(xpto);
            splitFileData(data);
          });
    });
});



function splitFileData(fileData){
    let data = fileData.split(/\r?\n/);
    // data.forEach(line => {
    //     console.log(line.length)
    // })
    //return data;
    data.sort(compare);
    console.log(data);
}

function compare(a, b) {
    if (a.length < b.length) {
      return -1;
    }
    if (a.length > b.length) {
      return 1;
    }
    // a deve ser igual a b
    return 0;
  }