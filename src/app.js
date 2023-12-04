const {User}=require("./class/User");
const {Student}=require("./class/Students");

const userOne=new User('Jonas','Jonaitis@gmail.com');
userOne.setRole('admin');
userOne.setDepartment('IT');
console.log(userOne.getFullUserData());
userOne.displayUI();

// Naujas studentas

const studentas=new Student('Karolis', 'karoluxas@gmail.com', 'JS');
const studentas2=new Student('Algis','Algiukas@gmail.com','Nezinomas');

console.log(studentas);
console.log(studentas2)
