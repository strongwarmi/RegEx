var formulario= document.querySelector(".form-signup");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});
function validateForm(){
	/* Escribe tú código aquí */
  name = document.getElementById("name").value;
  lastname = document.getElementById("lastname").value;
  date = document.getElementById("date").value;
  password = document.getElementById("password").value;
//  nombre = document.getElementById("nombre");
  var PrimeraLetraMayuscula =  "/^[A-Z].*/";

  if( name == null || name.length == 0 ||(!PrimeraLetraMayuscula.test(name)) ) {
  nombre.innerHTML = "El nombre debe empezar con mayuscula";
  }
  if( lastname == null || lastname.length == 0 ||(!PrimeraLetraMayuscula.test(lastname)) ) {
  apellido.innerHTML = "El nombre debe empezar con mayuscula";
  }
}
