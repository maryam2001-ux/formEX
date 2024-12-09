
//  الجزء الخاص ب INPUT 

const name =  document.getElementById('NAME');
const hobby  =  document.getElementById('HOBBY') ;
const age  =  document.getElementById('AGE');


// طالجزء الخاص  باظهار الرساله لما نضغط   


const display = document.getElementById('showMessage');

// الرساله اللي هتظهر في h1  


const message = document.getElementById('yourMessage');


display.addEventListener('click', () => { 

  const Yname = name ;
  const Yage = age ;
  const Yhobby = hobby ;

  const message = `  your name is  ${name}  your age is  ${age}   your hobby is  ${hobby}  `

});



