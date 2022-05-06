// FORMULÁRIO 
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
  
  $("#telefone").mask("(00) 0000-0000");
  $("#nome").mask("Digite seu nome completo");

  