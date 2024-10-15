const testFolder = '.';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
	files = files.filter(n => n.indexOf('.mp3') > -1)

	fs.writeFile('index.js', `export default ${JSON.stringify(files)};`, err => {
		if (err) {
		  console.error(err);
		} else {
		  console.log('Index was created')
		}
	});
});



