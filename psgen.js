const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
var array = [];
var array1 = [];
if (array = [])  {
  function genPass() {
    let k = 0;
    let passE2 = document.getElementById("pass2");
    for (k = 0; k < 15; k++) {
      let randomGeindex3 = Math.floor(Math.random() * characters.length);
      array.push(characters[randomGeindex3]);
      passE2.textContent += array[k];
    }

    let i = 0;
    let passE1 = document.getElementById("pass1");
    for (i = 0; i < 15; i++) {
      let randomGeindex2 = Math.floor(Math.random() * characters.length);
      array1.push(characters[randomGeindex2]);
      passE1.textContent += array1[i];
    }
  }
}
else if(array1=[]){
    function genPass() {
        let k = 0;
        let passE2 = document.getElementById("pass2");
        for (k = 0; k < 15; k++) {
          let randomGeindex3 = Math.floor(Math.random() * characters.length);
          array.push(characters[randomGeindex3]);
          passE2.textContent += array[k];
        }
    
        let i = 0;
        let passE1 = document.getElementById("pass1");
        for (i = 0; i < 15; i++) {
          let randomGeindex2 = Math.floor(Math.random() * characters.length);
          array1.push(characters[randomGeindex2]);
          passE1.textContent += array1[i];
        }
      }
}
else(alert="try refresh")
let passE2 = document.getElementById("pass2");
let passE1 = document.getElementById("pass1");
function reset() {
  passE1.textContent = array1 = [];
  passE2.textContent = array = [];
  genPass();
}
