const inputpass=document.getElementById("password");
const generate=document.getElementById("generatebutton")
// Length of password
const length=12;

const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+=";



function createpassword()
{
 let password="";
 let allchar=upperCaseLetters+lowerCaseLetters+numbers+symbols;
 password+=upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    password+=lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length)
    {
        password=password+allchar[Math.floor(Math.random()*allchar.length)];
    } 
    inputpass.value=password;
}

function copypassword() {
    inputpass.select();
    inputpass.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + inputpass.value);
}