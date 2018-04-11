var fs = require('fs');
var file = './text.txt';

var readWrite = process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		fs.readdir(instruction, 'utf-8', function(err, item) {
			if (err) throw err;
			fs.writeFile(file, '', function(err) {
				if (err) throw err;
				item.forEach(function(name) {
					fs.appendFile(file, name + "\n", function(err) {
						if (err) throw err;
						console.log('Folder content is saved in ' + file);
						process.exit();
					});
				});
			});
		});
	};
});

process.stdout.write('Please provide valid path to the folder: ', readWrite);