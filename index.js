const handleEvent = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  value.optionsCheckbox = data.getAll("optionsCheckbox");
  console.log(event.target);
};

const formListener = () => {
  const myForm = document.querySelector("form");
  myForm.addEventListener("submit", handleEvent);
};

function main() {
  formListener();
}

main();
