const version=document.title[0]+''+document.title[1];
console.log(version);
shuffle(version);
function shuffle(length){
  console.log('entered');
  console.log(length);
let count=0;
let rand;
let html='';//have to predefine with '' or else first box is undefined.
if(length==40){
while(count<40){
rand=Math.floor(Math.random()*40);
  if(!Deck40[rand].displayed){
html+=`<button id=${count} data number=${Deck40[rand].number} class="cards">${Deck40[rand].number+' '+Deck40[rand].type}</button>`;
Deck40[rand].displayed=true;
console.log(count);
count++;
  }
}
}
else if(length==32){
  while(count<32){
    rand=Math.floor(Math.random()*32);
      if(!Deck32[rand].displayed){
    html+=`<div id=${count} data number=${Deck32[rand].number} class="cards">${Deck32[rand].number+' '+Deck40[rand].type}</div>`;
    Deck32[rand].displayed=true;
    console.log(count);
    count++;
      }
    }
}
else{
  while(count<20){
    rand=Math.floor(Math.random()*20);
      if(!Deck20[rand].displayed){
    html+=`<button id=${count} data number=${Deck20[rand].number} class="cards">${Deck20[rand].number+' '+Deck40[rand].type}</button>`;
    Deck20[rand].displayed=true;
    console.log(count);
    count++;
      }
    }
}
document.querySelector('.place-deck').innerHTML=html;
}
const card=document.querySelectorAll('.cards');
console.log(card);
card.forEach((div)=>{
  div.addEventListener('click',()=>{
    //console.log('yay');
  });
});