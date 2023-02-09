
export  const ValidEmail =(email)=>{
    const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(emailvalid.test(email)){
        return "true";
    }else{
        return "false"
    }
}

export const validatPassword =(password)=>{
const validitPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
if(validitPassword.test(password)){
    return "true"
}
else {
    return "false"
}

}


export const validusername=(username)=>{
    const UsernameRegx = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;
    if(UsernameRegx.test(username)){
        return "true"
    }
    else {
        return "false"
    }
    
}