// FUNCTIONS

const getValue = (msg) => {
  return prompt(msg);
};

const validateCredentials = (user, validUser) => {
  while (true) {
    user.userName = getValue("Usuario: ");
    user.password = getValue("Contraseña: ");
    if (equals(user, validUser)) {
      showMessage("Bienvenido!");
      break;
    } else {
      showMessage("Usuario incorrecto, vuelva a intentarlo.");
    }
  }
};

const equals = (validUser, user) => {
  return (
    validUser.userName.toLowerCase() == user.userName.toLowerCase() &&
    validUser.password.toLowerCase() == user.password.toLowerCase()
  );
};

const showMessage = (msg) => {
  alert(msg);
}
