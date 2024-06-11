const createForm = document.querySelector("form")



createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookData = new FormData(createForm);
  const reqBody = Object.fromEntries(bookData);
  console.log(reqBody)

  fetch("/book", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(reqBody)
  })

    const createForm2 = document.querySelector("form2")

      createForm2.addEventListener("submit", (e) => {
      e.preventDefault();

        const pressData = new FormData(createForm2);
        const reqBody2 = Object.fromEntries(pressData);
        console.log(reqBody2)


          fetch("/press", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(reqBody2)
          })


            const createForm3 = document.querySelector("form3")

              createForm3.addEventListener("submit", (e) => {
                e.preventDefault();

                const quotesData = new FormData(createForm3);
                const reqBody3 = Object.fromEntries(quotesData);
                console.log(reqBody3)

                  fetch("/quotes", {
                    method: "POST",
                    headers: { "Content-Type" : "application/json"},
                    body: JSON.stringify(reqBody3)
                  })

                    const createForm4 = document.querySelector("form4")


                        const pubWorkData = new FormData(createForm4);
                        const reqBody4 = Object.fromEntries(pubWorkData);
                        console.log(reqBody4)

                          fetch("/publishedWork", {
                            method: "POST",
                            headers: { "Content-Type" : "application/json"},
                            body: JSON.stringify(reqbody4)
  })
.then(()=>{
  window.location.href = "/"
})
})

        // .then(() => {
        //  window.location.href = "/"