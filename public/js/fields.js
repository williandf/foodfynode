function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}



function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainers = document.querySelectorAll(".preparation");

  const newFields = fieldContainers[fieldContainers.length -1].cloneNode(true);

  if (newFields.children[0].value == "") return false;

  newFields.children[0].value = "";
  preparations.appendChild(newFields);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

document
  .querySelector(".add-preparation")
  .addEventListener("click", addPreparation);

