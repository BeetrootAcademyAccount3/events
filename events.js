const btn = document.getElementById("btn");
const item = document.querySelector("li");
const listItems = document.querySelectorAll("li");
const list = document.querySelector("#list");

const item3 = document.querySelector("li:nth-child(3)");

const ancestor = document.querySelector(".ancestor");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

ancestor.addEventListener("click", () => {
  console.log("Ancestor clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});

ancestor.addEventListener(
  "click",
  () => {
    console.log("Ancestor clicked capturing");
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent clicked capturing");
  },
  { capture: true }
);

child.addEventListener(
  "click",
  () => {
    console.log("Child clicked capturing");
  },
  { capture: true }
);

/*
function sayHello() {
  alert("Hello");
}

btn.onclick = sayHello;
*/

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

// item.addEventListener("dblclick", () => {
//   item.style.backgroundColor = "pink";

//   //   alert("Alert coming from list item");
// });

/*
listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    console.log(listItem);
    // listItem.style.backgroundColor = "pink";
    e.target.classList.toggle("highlight");
  });

  listItem.addEventListener("mouseenter", (e) => {
    console.log(listItem);
    // listItem.style.backgroundColor = "pink";
    e.target.classList.add("highlight");
  });

  listItem.addEventListener("mouseleave", (e) => {
    console.log(listItem);
    // listItem.style.backgroundColor = "pink";
    e.target.classList.remove("highlight");
  });
});
*/

/*
//Nested list in a list
list.addEventListener("click", (event) => {
  const listItem = event.target.closest("#list>li");

  listItem.classList.toggle("highlight");
});

*/

/*
list.addEventListener("click", (event) => {
  const listItem = event.target.closest("li");

  //   listItem.classList.toggle("highlight");
  listItem.remove();
});
*/

/*
btn.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = "Item X";
  p.textContent = "Description";

  newListItem.appendChild(h2);
  newListItem.appendChild(p);

  item3.after(newListItem);
});

list.addEventListener("click", (event) => {
  const listItem = event.target.closest("li");

  const newListItem = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = "Item X";
  p.textContent = "Description";

  newListItem.appendChild(h2);
  newListItem.appendChild(p);
  listItem.replaceWith(newListItem);
});
*/

const firstNameInput = document.querySelector("#firstName");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const error = document.getElementById("error");

  const firstName = e.target[0].value;
  const lastName = e.target[1].value;

  if (firstName.length < 3) {
    error.textContent = "Fist Name should be at least 3 characters";
    error.style.display = "block";
    console.error("First name should be at least 3 characters");
  } else if (lastName.length < 3) {
    error.textContent = "Last Name should be at least 3 characters";
    error.style.display = "block";
    console.error("Last name should be at least 3 characters");
  } else {
    error.style.display = "none";
  }
});

// firstNameInput.addEventListener("input", (e) => {
//   console.dir(e.target);
// });
