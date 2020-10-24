export const checkPawwordPattern = str => {
    if(str.length < 6){ return false; }
    if(/\s/.test(str)){ return false; }
    if(!/[a-b]/.test(str)){ return false; }
    if(!/[A-Z]/.test(str)){ return false; }
    if(!/[0-9]/.test(str)){ return false; }
    if(!/\W/.test(str)){ return false; }
    return true;
};