class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }
    // Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return `${this.course}, ${this.university}, ${this.fullName}`;
    }

    // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get getMarks() {
        if (this.dismissed) {
            return null;
        }
        return this.marks;
    }

    // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setMark(value) {
        if (this.dismissed) {
            return null;
        }
        this.marks.push(value);
    }

    // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    get getAverageMark() {
        const result = (this.marks.reduce((prev, val) => prev += val) / this.marks.length).toFixed(1);
        if (this.dismissed) {
            return null;
        }
        return result;
    }

    // Створіть метод this.dismissed, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    set dismissedStudent(value) {
        if (value) {
            this.dismissed = true;
        }
    }

    // Створіть метод this.recover, який дозволить поновити студента
    set recoverStudent(value) {
        if (value) {
            this.dismissed = false;
        }
    }
}
const studentInfo = new Student("Вищої Школи Психотерапії", "Студент 1-го курсу", "Остап Бендер", [5, 4, 4, 5]);

// Перевірки до виключення:
console.log("Перевірки до виключення / поновлення студента:")
studentInfo.dismissedStudent = false;
studentInfo.recoverStudent = false;
console.log(studentInfo.getInfo());
console.log(studentInfo.getMarks);
studentInfo.setMark = 5;
console.log(studentInfo.getMarks);
console.log(studentInfo.getAverageMark);

// Перевірки після виключення студента:
console.log("")
console.log("Перевірки після виключення студента:")
studentInfo.dismissedStudent = true;
studentInfo.recoverStudent = false;
console.log(studentInfo.getInfo());
console.log(studentInfo.getMarks);
studentInfo.setMark = 5;
console.log(studentInfo.getMarks);
console.log(studentInfo.getAverageMark);

// Перевірки після поновлення студента:
console.log("")
console.log("Перевірки після поновлення студента:")
studentInfo.dismissedStudent = true;
studentInfo.recoverStudent = true;
console.log(studentInfo.getInfo());
console.log(studentInfo.getMarks);
studentInfo.setMark = 5;
console.log(studentInfo.getMarks);
console.log(studentInfo.getAverageMark);

// ADVANCED

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, scholarShip) {
        super(university, course, fullName, marks);
        this.scholarShip = scholarShip
        setInterval(function () {
            const timer = this.getScholarShip()
            return timer
        }.bind(this), 30000)
    }
    getScholarShip() {
        if (this.recover) {
            if (this.getAverageMark >= 4) {
                return console.log(`Ви отримали ${this.scholarShip} грн. стипендії, Ура!`);
            } else {
                return "Треба було краще вчитись!!!";
            }
        } else if (this.dismissed) {
            return console.log("Вас виключено!!!");
        }
        if (this.getAverageMark >= 4) {
            return console.log(`Ви отримали ${this.scholarShip} грн. стипендії, Ура!`);
        } else {
            return console.log("Треба було краще вчитись!!!");
        }
    }
}

const budgetStudentInfo = new BudgetStudent("Вищой Школи Програмування Cursor", "Студент 2-го курсу", "Арсен Макарук", [5, 4, 4, 5], 2000);

console.log("")
console.log("Advance перевірки:")
console.log("")

// Перевірки до виключення:
console.log("Перевірки до виключення / поновлення студента:")
budgetStudentInfo.dismissedStudent = false;
budgetStudentInfo.recoverStudent = false;
console.log(budgetStudentInfo.getInfo());
console.log(budgetStudentInfo.getMarks);
budgetStudentInfo.setMark = 5;
console.log(budgetStudentInfo.getMarks);
console.log(budgetStudentInfo.getAverageMark);

// Перевірки після виключення студента:
console.log("")
console.log("Перевірки після виключення студента:")
budgetStudentInfo.dismissedStudent = true;
budgetStudentInfo.recoverStudent = false;
console.log(budgetStudentInfo.getInfo());
console.log(budgetStudentInfo.getMarks);
budgetStudentInfo.setMark = 5;
console.log(budgetStudentInfo.getMarks);
console.log(budgetStudentInfo.getAverageMark);

// Перевірки після поновлення студента:
console.log("")
console.log("Перевірки після поновлення студента:")
budgetStudentInfo.dismissededStudent = true;
budgetStudentInfo.recoverStudent = true;
console.log(budgetStudentInfo.getInfo());
console.log(budgetStudentInfo.getMarks);
budgetStudentInfo.setMark = 5;
console.log(budgetStudentInfo.getMarks);
console.log(budgetStudentInfo.getAverageMark);
