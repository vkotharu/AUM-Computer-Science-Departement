var $ = function (id) {
	return document.getElementById(id);
};

function calculateGPA() {
	const creditHours1 = parseInt(document.getElementById('ch1').value);
	const grade1 = document.getElementById('g1').value.toUpperCase();

	const creditHours2 = parseInt(document.getElementById('ch2').value);
	const grade2 = document.getElementById('g2').value.toUpperCase();

	if (isNaN(creditHours1) || isNaN(creditHours2) ||
		!isValidGrade(grade1) || !isValidGrade(grade2)) {
		alert('Please enter at least 2 courses.');
		return;
	}

	const creditHours3 = parseInt(document.getElementById('ch3').value);
	const grade3 = document.getElementById('g3').value.toUpperCase();

	const creditHours4 = parseInt(document.getElementById('ch4').value);
	const grade4 = document.getElementById('g4').value.toUpperCase();

	const creditHours5 = parseInt(document.getElementById('ch5').value);
	const grade5 = document.getElementById('g5').value.toUpperCase();

	let gpa = (getGradePoint(grade1) * creditHours1 +
		getGradePoint(grade2) * creditHours2) / (creditHours1 + creditHours2);

	if (!isNaN(creditHours3) || isValidGrade(grade3))
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3
		) / (creditHours1 + creditHours2 + creditHours3)

	if (!isNaN(creditHours4) || isValidGrade(grade4))
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3 +
			getGradePoint(grade4) * creditHours4 
		) / (creditHours1 + creditHours2 + creditHours3 + creditHours4)

	if (!isNaN(creditHours5) || isValidGrade(grade5))
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3 +
			getGradePoint(grade4) * creditHours4 + 
			getGradePoint(grade5) * creditHours5
		) / (creditHours1 + creditHours2 + creditHours3 + creditHours4 + creditHours5)

	document.getElementById('grade').value = gpa.toFixed(2);
}

function resetForm() {
	document.getElementById('ch1').value = "";
	document.getElementById('ch2').value = "";
	document.getElementById('ch3').value = "";
	document.getElementById('ch4').value = "";
	document.getElementById('ch5').value = "";
	document.getElementById('g1').value = "";
	document.getElementById('g2').value = "";
	document.getElementById('g3').value = "";
	document.getElementById('g4').value = "";
	document.getElementById('g5').value = "";
	document.getElementById('grade').value = "";

}

function isValidGrade(grade) {
	const validGrades = ['A', 'B', 'C', 'D', 'F'];
	return validGrades.includes(grade.toUpperCase());
}

function getGradePoint(grade) {
	if (grade) {
		switch (grade.toUpperCase()) {
			case 'A':
				return 4.0;
			case 'B':
				return 3.0;
			case 'C':
				return 2.0;
			case 'D':
				return 1.0;
			case 'F':
				return 0.0;
			default:
				return 0.0;
		}
	}
}