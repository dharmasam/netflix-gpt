export const validate = (email, password) => {
    
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordTest = /^[A-Za-z]\w{7,14}$/.test(password);
    // if(!emailTest) return "Bad email!"
    
    if(!passwordTest) return "Incorrect password for "+email+", You can use a sign-in code, reset your password or try again.";
    return null;

}