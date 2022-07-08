const add = (a,b) => a+b;
const mul = (a,b) => a*b;
const sub = (a,b) => a-b;
const div = (a,b) => a/b;

const palindrome = (str) => {
    str = str.replace(/[^A-Z0-9]/ig, "");
    str = str.toLowerCase();
    let strPertama = str;
    let newArray = str.split("");
    let strKedua = newArray.reverse().join("");
    if(strPertama === strKedua) {
        return true;
    } else if(strPertama !== strKedua) {
        return false;
    }
}

module.exports = {add,mul,sub,sub,div,palindrome};