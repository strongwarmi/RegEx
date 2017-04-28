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
  var celular = document.getElementById("celular").value;
  var casa = document.getElementById("casa").value;
  var password = document.getElementById("password").value;
  var Nombre = document.getElementById("Nombre");
  var Apellido=document.getElementById("Apellido");
  var FechNac=document.getElementById("FechNac");
  var NumDni = document.getElementById("NumDni");
  var Celu = document.getElementById("Celu");
  var Casita =  document.getElementById("Casita");

  var PrimeraLetraMayuscula =  /^[A-Z].*/ ;
  var RegExDNI = /[0-9]{8}/ ;
  var RegFechNac= /[1,2]/ ; //2017-04-28
  var RegExCelu = /[9][0-9]{8}/ ;
  var RegExCasa = /[2-7][0-9]{6}/ ;

  if( name == null || name.length == 0 ||(!PrimeraLetraMayuscula.test(name)) ) {
  Nombre.innerHTML = "El nombre debe empezar con mayúscula";
  }
  if( lastname == null || lastname.length == 0 ||(!PrimeraLetraMayuscula.test(lastname)) ) {
  Apellido.innerHTML = "El apellido debe empezar con mayúscula";
  }
  if( dni == null || dni.length == 0 || dni.length>8 ||(!RegExDNI.test(dni)) ) {
  NumDni.innerHTML = "Dni debe tener 8 digitos";
  }
  if( date == null || date.length == 0  ) {
  FechNac.innerHTML = date;
  }
  if( celular == null || celular.length == 0 || celular.length>9 ||(!RegExCelu.test(celular)) ) {
  Celu.innerHTML = "Numero de celular no válido debe contener 9 caracteres";
  }
  if( casa == null || casa.length == 0  || casa.length>7 ||(!RegExCasa.test(casa)) ) {
  Casita.innerHTML = "Numero de casa no válido debe contener 7 caracteres";
  }
}
