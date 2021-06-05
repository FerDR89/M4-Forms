const handleEvent = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const objeto = Object.fromEntries(data.entries());
  objeto.optionsCheckbox = data.getAll("optionsCheckbox");
  console.log(objeto);
};

const formListener = () => {
  const myForm = document.querySelector("form");
  myForm.addEventListener("submit", handleEvent);
};

function main() {
  formListener();
}

main();
