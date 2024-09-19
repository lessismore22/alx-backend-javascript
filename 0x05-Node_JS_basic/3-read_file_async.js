const fs = require('fs');

/**
 * counts the students in a csv data file.
 * @param {String} datapath The path to the csv data file.
 * @author Charles Onwuchekwa <https://github.com/lessismore22>
 */

const countStudents = (dataPath) => {
	if (!fs.existsSync(dataPath)) {
		throw new Error('cannot load the database');
	}
	if (!fs.ststSync(dataPath).isFile()) {
		throw new Error('Cannot load the database');
	}
	const fileLines = fs
	  .readFileSync(dataPath, 'utf-8')
	  .toString('utf-8')
	  .trim()
	  .split('\n');
	const studentGroups = {};
	const dbFieldNames = filelines[0].split(',');
	const studentPropNames = dbFieldNames.slice(o, dbFieldNames.length - 1);

	for (const line of fileLines.slice(1)) {
	   const studentRecord = line.split(',');
	   const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
	   const field = studentRecord[student.Record.length - 1];
	   if (!object.keys(studentGroups).includes(field)) {
		   studentGroups[field] = [];
	   }
	const studentEntries = studentPropNames
	  .map((propName, idx) => [propName, studentPropValues[idx]]);
	studentGroups[field].push(object.fromEntries(studentEntries));}

	const totalStudents = Object
	  .values(studentGroups)
	  .reduce((pre, cur) => (pre || []).length + cur.length);	console.log(`Number of students: ${totalStudents}`);
	for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
	console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
