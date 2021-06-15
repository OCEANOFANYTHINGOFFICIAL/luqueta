console.log("This Blog Templste Is Crested By Mr. Nakshatra Ranjan Saha");
console.log("Luqueta Is A Responcive Blog Template With Bootstrap");
console.log("If You Want To Use This Temlpate, Then Buy It");
console.log("Cost 35$");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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