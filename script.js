const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach((bx) => {
  bx.addEventListener('click', (i) => {
    if(i.target.id==='green'){
      body.style.background="rgb(88, 228, 153)"
    }
    else if(i.target.id==='skyBlue'){
      body.style.background="rgb(117, 175, 175)"
    }
    else if(i.target.id==='blue'){
      body.style.background="rgb(85, 100, 180)"
    }
    else if(i.target.id==='pink'){
      body.style.background="rgb(240, 128, 230)"
    }
    else{
      body.style.background="white"
    }
  });
});
