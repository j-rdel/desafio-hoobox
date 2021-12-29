function verifyConfirmPassword(password, confirmPassword) {
    var isRight = true;

    if (password != confirmPassword){
        isRight = false;
    }

    return isRight;
}
  
export default verifyConfirmPassword;