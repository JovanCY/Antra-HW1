const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");
const clearBtn = document.getElementById("clearBtn")
const personList = document.getElementById("person-display");

// const people = JSON.parse(localStorage.getItem("people")) || [];

function insertPerson (person) {//add to personList
  const personItem = document.createElement("div")

  const {name: username, age  } = person
  console.log("username = ", username)
  personItem.className = "person-item"
  
  const name = document.createElement("div")
  name.innerHTML = `name = ${username}, age =${age} `
  personItem.appendChild(name)

  personList.appendChild(personItem)
}


let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];
people.map ( (person) => {
  
  console.log("person == ",person)

  insertPerson(person)
  
}
)


personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    id: uuidv4(),
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));

  document.getElementById;

  insertPerson(newPerson)
});

clearBtn.addEventListener ("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  
  personList.replaceChildren()//clear in dom

}

)

