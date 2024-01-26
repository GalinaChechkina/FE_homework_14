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

function getUserNode(firstName, lastName, age){ 
    const container = document.createElement("div");
    const firstNameNode = document.createElement("p"); 
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    firstNameNode.innerText = firstName; 
    lastNameNode.innerText = lastName;
    ageNode.innerText = age;

    container.append(firstNameNode, lastNameNode, ageNode); 
    container.classList.add("item");
    if(age >=0 && age <=18){
        container.style.backgroundColor = "rgba(89, 251, 151, 0.639)";
    } else {
        if(age > 18 && age <50){
            container.style.backgroundColor = "rgba(90, 192, 129, 0.639)";
        } else {
            container.style.backgroundColor = "rgba(98, 144, 115, 0.639)";
        }
    }
    return container; 
};

function rerender(){
    const containerNode = document.querySelector("#container"); 
    containerNode.innerText = ""; 
    array.forEach(({firstName, lastName, age}) => containerNode.append(getUserNode(firstName, lastName, age)));
};