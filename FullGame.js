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
html+=`<div id=${count} data-id=${count} data-number=${Deck40[rand].number} class="cards">${Deck40[rand].number+' '+Deck40[rand].type}</div>`;
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
    html+=`<div id=${count} data-id=${count} data-number=${Deck32[rand].number} class="cards">${Deck32[rand].number+' '+Deck40[rand].type}</div>`;
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
    html+=`<div id=${count} data-id=${count} data-number=${Deck20[rand].number} class="cards">${Deck20[rand].number+' '+Deck40[rand].type}</div>`;
    Deck20[rand].displayed=true;
    console.log(count);
    count++;
      }
    }
}
document.querySelector('.place-deck').innerHTML=html;
}

let flipped=[];
let collection=0;
let i=0;
const card=document.querySelectorAll('.cards');
console.log(card);

card.forEach((div)=>{
  div.addEventListener('click',()=>{
  if(flipped.length===0 && div.innerHTML!=='done'){
    flipped.push(div.dataset.number); 
    i=div.dataset.id;
  }
   else if(flipped.length===1 && div.innerHTML!=='done'){;
    flipped.push(div.dataset.number);
    if(flipped[0]===flipped[1]){
    console.log('same');
    collection+=2
    document.getElementById(i).innerHTML='done';
    div.innerHTML='done';
    console.log(collection);
    if(collection==version)
    console.log('You are done!');
  }
   else
    console.log('different');
    flipped=[];
   }
  });
});


