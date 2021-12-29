function verifyEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
  }
  
  export default verifyEmail;