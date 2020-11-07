export const checkPawwordPattern = str => {
    if(str.length < 6){ return false; }
    if(/\s/.test(str)){ return false; }
    if(!/[a-b]/.test(str)){ return false; }
    if(!/[A-Z]/.test(str)){ return false; }
    if(!/[0-9]/.test(str)){ return false; }
    if(!/\W/.test(str)){ return false; }
    return true;
};


export const checkValidURL = str => {
    if(
        !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(str)
        ){
            console.log("Checking checkValidURL : ", str);
            return false; 
        }
            console.log("i am into problem");
    return true;
}