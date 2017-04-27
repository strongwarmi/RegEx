function validateForm(){
	/* Escribe tú código aquí */
  name = document.getElementById("name").value;
  lastname = document.getElementById("lastname").value;
  date = document.getElementById("date").value;
  password = document.getElementById("password").value;

  if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
  nombre.innerHTML = "Debe ingresar su nombre";
  }
  if( lastname == null || lastname.length == 0 || /^\s+$/.test(lastname) ) {
  apellido.innerHTML = "Apellido requerido";
  }
  if( email == null || email.length == 0 || /^\s+$/.test(email) || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
  correo.innerHTML = "Verifique su E-mail";
  }
  if( password == null || password.length < 6 || /^\s+$/.test(password) ) {
  pass.innerHTML = "La contraseña debe tener al menos 6 caracteres";
  }
  if( indice == null || indice == 0 ) {
    var tooltip = document.createElement('span');
    var msj = document.createTextNode("Debes seleccionar al menos un tipo de bici");
    tooltip.appendChild(msj);
    document.getElementsByClassName('input-box')[4].appendChild(tooltip);
    //console.log(document.getElementsByClassName('input-box'));
  }
}
