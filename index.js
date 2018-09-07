var fs = require('fs');

fs.readdir('./maindir', 'utf-8', function (err, files) {
    fs.writeFile('fileslist.txt', files, 'utf8', function (err, data) {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});