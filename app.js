const students = [{name: 'Vasya', mark: 3.8, email: 'vasya@gmail.com', isAdmin: false},
    {name: 'Helen', mark: 3.4, email: 'helen@gmail.com', isAdmin: false},
    {name: 'Marina', mark: 4.0, email: 'marina@gmail.com', isAdmin: true},
    {name: 'Alex', mark: 4.2, email: 'alex@gmail.com', isAdmin: false},
    {name: 'Martin', mark: 4, email: 'martin@gmail.com', isAdmin: true},
    {name: 'Denys', mark: 3.7, email: 'denys@gmail.com', isAdmin: false},
    {name: 'Daniel', mark: 4.8, email: 'daniel@gmail.com', isAdmin: true},
    {name: 'John', mark: 3.6, email: 'jogn@gmail.com', isAdmin: false},
    {name: 'Phil', mark: 4.5, email: 'phil@gmail.com', isAdmin: false},
    {name: 'Anna', mark: 3.8, email: 'anna@gmail.com', isAdmin: false}];

console.log(students);

function logAdmins(students) {
    //вернуть из функции список тех, у кого поле isAdmin: true
    return students.filter(function(el){
        return el['isAdmin'];
    })
}
console.log('Admins:', logAdmins(students));



function filterByMark(students) {
    //ввести оценку через prompt
    //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее

    let mark = +prompt('enter the student`s mark');
    return students.filter(function(el){
        return el['mark']>=mark;
    })
}
console.log('Best mark:', filterByMark(students));


function renderStudents(students) {
    let htmlStr =  students.reduce(function(acc, el, index){
        return acc + `
            <tr>
                <td>${index+1}</td>
                <td>${el.name}</td>
                <td>${el.mark}</td>
                <td>${el.email}</td>
                <td>${el.isAdmin}</td>
            </tr>
        `
    }, '');
    document.querySelector('.students tbody').innerHTML = htmlStr;
    //по аналогии с курсами валют
}
renderStudents(students);



function getAverageMark(students) {
    //вернуть среднюю оценку (2 знака после запятой) из списка students

    let sum = students.reduce(function(acc, el){
        return acc + el['mark'];
    }, 0);
    return +(sum/students.length).toFixed(2);
}
console.log('Average mark:', getAverageMark(students));


function getEmailList(students) {
    //вернуть список состоящий из только поля email студентов
    // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']

    return students.reduce(function(acc, el){
        acc.push(el.email)
        return acc;
    }, []);
    
}
console.log('Email list:', getEmailList(students));


function getDataList(students) {
    //вернуть список, состоящий из name и email студентов
    //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]
    return students.map(function(el){
        return {
            name: el.name,
            email: el.email
        }
    })
    
}
console.log('Data list:', getDataList(students));