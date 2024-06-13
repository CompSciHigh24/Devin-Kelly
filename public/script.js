console.log("script running");

const createForm = document.querySelector("form");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookData = new FormData(createForm);
  const reqBody = Object.fromEntries(bookData);
  console.log(reqBody);

  fetch("/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  }).then(() => {
    window.location.href = "/admin";
  });
});

const createForm2 = document.querySelector("#form2");

createForm2.addEventListener("submit", (e) => {
  e.preventDefault();

  const pressData = new FormData(createForm2);
  const reqBody2 = Object.fromEntries(pressData);
  console.log(reqBody2);

  fetch("/press", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody2),
  }).then(() => {
    window.location.href = "/admin";
  });
});

const createForm3 = document.querySelector("#form3");

createForm3.addEventListener("submit", (e) => {
  e.preventDefault();

  const quotesData = new FormData(createForm3);
  const reqBody3 = Object.fromEntries(quotesData);
  console.log(reqBody3);

  fetch("/quotes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody3),
  }).then(() => {
    window.location.href = "/admin";
  });
});

const createForm4 = document.querySelector("#form4");

createForm4.addEventListener("submit", (e) => {
  e.preventDefault();
  const pubWorkData = new FormData(createForm4);
  const reqBody4 = Object.fromEntries(pubWorkData);
  console.log(reqBody4);

  fetch("/publishedWork", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody4),
  }).then(() => {
    window.location.href = "/admin";
  });
});

// delete button js //

const deleteForm = document.querySelectorAll(".delForm");
console.log(deleteForm);
for (let i = 0; i < deleteForm.length; i++) {
  deleteForm[i].addEventListener("click", () => {
    console.log("that tickles");
    console.log(deleteForm[i].id);
    fetch("/book/" + deleteForm[i].id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  });
}

const deleteForm2 = document.querySelectorAll(".delForm2");
console.log(deleteForm2);
for (let i = 0; i < deleteForm2.length; i++) {
  deleteForm2[i].addEventListener("click", () => {
    console.log("that tickles");
    console.log(deleteForm2[i].id);
    fetch("/press/" + deleteForm2[i].id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  });
}

const deleteForm3 = document.querySelectorAll(".delForm3");
console.log(deleteForm3);
for (let i = 0; i < deleteForm3.length; i++) {
  deleteForm3[i].addEventListener("click", () => {
    console.log("that tickles");
    console.log(deleteForm3[i].id);
    fetch("/quotes/" + deleteForm3[i].id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  });
}

const deleteForm4 = document.querySelectorAll(".delForm4");
console.log(deleteForm4);
for (let i = 0; i < deleteForm4.length; i++) {
  deleteForm4[i].addEventListener("click", () => {
    console.log("that tickles");
    console.log(deleteForm4[i].id);
    fetch("/publishedWork/" + deleteForm4[i].id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  });
}