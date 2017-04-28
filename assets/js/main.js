var formulario= document.querySelector(".form-signup");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});
function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var dni = document.getElementById("dni").value;
  var date = document.getElementById("date").value;
  var password = document.getElementById("password").value;
  var nombre = document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
  var NumDni = document.getElementById("NumDni");
  var PrimeraLetraMayuscula =  /^[A-Z].*/ ;
  var RegExDNI = /[0-9]{8}/ ;

  if( name == null || name.length == 0 ||(!PrimeraLetraMayuscula.test(name)) ) {
  nombre.innerHTML = "El nombre debe empezar con mayuscula";
  }
  if( lastname == null || lastname.length == 0 ||(!PrimeraLetraMayuscula.test(lastname)) ) {
  apellido.innerHTML = "El apellido debe empezar con mayuscula";
  }
  if( dni == null || dni.length == 0 ||(!RegExDNI.test(dni)) ) {
  NumDni.innerHTML = "Dni debe tener 8 digitos y solo numeros";
  }
}
