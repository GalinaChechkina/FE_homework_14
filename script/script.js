const array = [];

const formNode = document.querySelector("#addForm");

formNode.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const firstName = e.target.firstName.value; 
    const lastName = e.target.lastName.value; 
    const age = e.target.age.value;

    const person = { 
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    array.push(person); 
    console.log(array); // для наглядности
    rerender(); 
    e.target.reset(); 
});

function getContainerNode(firstName, lastName, age){ 
    const container = document.createElement("div");
    const firstNameNode = document.createElement("p"); 
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    firstNameNode.innerText = firstName; 
    lastNameNode.innerText = lastName;
    ageNode.innerText = age;

    container.append(firstNameNode, lastNameNode, ageNode); 
    return container; 
};

function rerender(){
    const containerNode = document.querySelector("#container"); 
    containerNode.innerText = ""; 
    array.forEach(({firstName, lastName, age}) => containerNode.append(getContainerNode(firstName, lastName, age)));
};