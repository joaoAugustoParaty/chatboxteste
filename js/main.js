//FORMULÁRIO

// Para fazer aparecer escrito "Campo obrigatório!"
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//FORMULÁRIO
const form = document.forms.nome;
const button = document.getElementById("iniciarconversa");


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

//CONTEÚDO
const nameInput = document.getElementById("inputname")
const telInput = document.getElementById("inputtel")
  nameInput, telInput.addEventListener("change", () => {
    let att_target = button.getAttribute ("data-bs-target")
    let att_toggle = button.getAttribute ("data-bs-toggle")


    if (telInput.value, nameInput.value == "") {
      button.removeAttribute (att_target);
      button.removeAttribute (att_toggle);
      console.log(button.getAttribute("disable"))
      console.log("removeu");
    } else if( nameInput, telInput != ""){
      console.log ("Add")
      button.setAttribute("data-bs-target", "#exampleModalToggle2");
      button.setAttribute("data-bs-toggle", "modal");
    }
  });

  

  