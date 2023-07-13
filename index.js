function newTask() {
  const addWrapper = document.querySelector(".addBox1");

  valInput.className = "add-input";
  addWrapper.appendChild(valInput);
}

const valInput = document.createElement("input");

const addButton = document.querySelectorAll(".btn");
console.log(addButton);

addButton[0].addEventListener("click", () => newTask());
