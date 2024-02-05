const array = [];

const formNode = document.querySelector("#addForm");

formNode.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const firstName = e.target.firstName.value; // единственный раз забираем имена input-ов из HTML-файла
    const lastName = e.target.lastName.value; // в остальных местах кода- это эл-ты массива
    const age = e.target.age.value;

    const person = { 
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    array.push(person); 
    console.log(array); // для наглядности
    rerender(); 
    e.target.reset(); //target-ссылка на эл-т, с кот. произошло событие
});

//функция рандомного распределения цвета контейнера для карточек
function setRandomColor(node){
    const randomValue = () => Math.floor(Math.random()*255);//или Math.round
    //25+Math.random()*230
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    node.style.backgroundColor = color;
};

//ф-я создания карточки 
function getUserNode(firstName, lastName, age){ 
    const user = document.createElement("div");
    const firstNameNode = document.createElement("p"); 
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    firstNameNode.innerText = firstName; 
    lastNameNode.innerText = lastName;
    ageNode.innerText = age;

    user.append(firstNameNode, lastNameNode, ageNode); 
    //setRandomColor(container);//будет работать, если закомментировать условный оператор с инлайн распределением цвета
    user.classList.add("item");
    if(age >=0 && age <=18){
        user.style.backgroundColor = "rgba(89, 251, 151, 0.639)";
    } else {
        if(age > 18 && age <50){
            user.style.backgroundColor = "rgba(90, 192, 129, 0.639)";
        } else {
            user.style.backgroundColor = "rgba(98, 144, 115, 0.639)";
        }
    }
    return user; 
};

/*пример для вывода случайного числа в диапазоне 25-255
const arr =[];
for (let i=0;i<10000;i++){
    arr.push(25+Math.random()*230);
};
console.log(Math.max(...arr));//sprad-operator, чтобы подставить в ф-ю max не массив, а его значения 
console.log(Math.min(...arr));*/

//ф-ия создания контейнера с карточками
function rerender(){
    const containerNode = document.querySelector("#container"); 
    containerNode.innerText = ""; 
    array.forEach(({firstName, lastName, age}) => containerNode.append(getUserNode(firstName, lastName, age)));
};
//Math.round округляет математ. способом
//Math.floor округляет в меньшую сторону
//Math.ceil округляет в большую сторону
