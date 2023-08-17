const version=document.title[0]+''+document.title[1];
console.log(version);
shuffle(version);


function shuffle(length){
console.log('entered');
console.log(length);
let rand;
let count=0;
let html='';//have to predefine with '' or else first box is undefined.

if(length==40){
while(count<40){
rand=Math.floor(Math.random()*40);
  if(!Deck40[rand].displayed){
html+=`<div class="container">
    
<div id=${count} data-id=${count} data-side=front data-flip=${Deck40[rand].flipped} data-number=${Deck40[rand].number} class="cards">
<div class="front"><img src="backCard.jpg"></div>
<div class="back">
${Deck40[rand].number+' '+Deck40[rand].type}
</div>
</div>
 </div>`;
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
    html+=`<div class="container">
    
    <div id=${count} data-id=${count} data-side=front data-flip=${Deck32[rand].flipped} data-number=${Deck32[rand].number} class="cards">
    <div class="front"><img src="backCard.jpg"></div>
    <div class="back">
    ${Deck32[rand].number+' '+Deck32[rand].type}
    </div>
    </div>
     </div>`;
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
    html+=`<div class="container">
    <div id=${count} data-id=${count} data-side=front data-flip=${Deck20[rand].flipped} data-number=${Deck20[rand].number} class="cards">
    <div class="front"><img src="backCard.jpg"></div>
    <div class="back">
    ${Deck20[rand].number+' '+Deck20[rand].type}
    </div>
    </div>
     </div>`;
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
let amount=0;
let prev=0;
const card=document.querySelectorAll('.cards');
console.log(card);

card.forEach((div,index)=>{
  div.addEventListener('click',()=>{
  if(div.dataset.side==='front'){
  if(amount===0 && div.innerHTML!==''&& div.dataset.flip==='false'&& amount<2){
    flipped.push(div.dataset.number); 
    i=div.dataset.id;
    div.dataset.flip=true;
    prev=index;
    document.getElementById(i).classList.add('cardsAfter');
    amount++;
  }
   else if(amount===1 && div.innerHTML!=='' && div.dataset.flip==='false'&& amount<2){
    flipped.push(div.dataset.number);
    div.dataset.flip=true;
    document.getElementById(div.dataset.id).classList.add('cardsAfter');
    amount++;
    if(flipped[0]===flipped[1]){
    console.log('same');
    collection+=2
    setTimeout(()=>{
    document.getElementById(i).innerHTML='';//or display none for smoother effect
    div.innerHTML='';//or display none for smoother effect)
    amount=0;
      },
      1000
    )
    console.log(collection);
    if(collection==version)
    console.log('You are done!');
    } 
   else{
    console.log('different');
    div.dataset.flip=false;
    card[prev].dataset.flip=false;
    setTimeout(()=>{
    document.getElementById(i).classList.remove('cardsAfter');
    document.getElementById(div.dataset.id).classList.remove('cardsAfter');
    amount=0;
     },
  2000
    )
     }
   flipped=[];
  }
}
    });
});


