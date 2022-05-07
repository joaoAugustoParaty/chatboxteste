// // FORMULÁRIO
// (function () {
//     'use strict'
//     var forms = document.querySelectorAll('.needs-validation')
//     Array.prototype.slice.call(forms)
//       .forEach(function (form )  {

//         form.addEventListener('submit', function (event) {
//           event.preventDefault()
//           const inputName = document.getElementById('nome').value
//         //  // if((inputName.length) != 0){

//         //     if (!form.checkValidity()) {
//         //       console.log ("teste")
//         //       event.preventDefault()
//         //       // event.stopPropagation()
//         //     }
//         //   }

//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()

//   $("#telefone").mask("(00) 0000-0000");
//   $("#nome").mask("Digite seu nome completo");

// FORMULÁRIO
const form = document.forms.nome;
const button = document.getElementById("iniciarconversa");
const buttonBack = document.getElementById("backToFirst");
button.setAttribute ("disable", true)

let att_disable = button.getAttribute ("disable")
console.log(typeof(att_disable))

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(button.getAttribute ("disable") == "false"){
    console.log("teste1")
  }
  button.setAttribute ("disable", false)
  
  console.log("teste");
  
});
const nameInput = document.getElementById("inputname");
  nameInput.addEventListener("change", () => {
    let att_target = button.getAttribute ("data-bs-target")
    let att_toggle = button.getAttribute ("data-bs-toggle")


    if (nameInput.value == "") {
      button.removeAttribute (att_target);
      button.removeAttribute (att_toggle);
      console.log(button.getAttribute("disable"))
      console.log("removeu");
    } else if( nameInput != ""){
      console.log ("Add")
      button.setAttribute("data-bs-target", "#exampleModalToggle2");
      button.setAttribute("data-bs-toggle", "modal");
    }
  });

  buttonBack.addEventListener("click", () =>{
    button.setAttribute("data-bs-target", "testeee");
      button.setAttribute("data-bs-toggle", "testee");
  })
