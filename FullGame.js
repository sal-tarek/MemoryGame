const version=document.title[0]+''+document.title[1];
console.log(version);
let html='';//have to predefine with '' or else first box is undefined.
shuffle(version);


function shuffle(length){
console.log('entered');
console.log(length);
let rand;
let count=0;

if(length==40){
while(count<40){
rand=Math.floor(Math.random()*40);
  if(!Deck40[rand].displayed){
html+=`<div class="container">
    
<div id=${count} data-id=${count} data-flip=${Deck40[rand].flipped} data-number=${Deck40[rand].number} class="cards">
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
    
    <div id=${count} data-id=${count} data-flip=${Deck32[rand].flipped} data-number=${Deck32[rand].number} class="cards">
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
    <div id=${count} data-id=${count} data-flip=${Deck20[rand].flipped} data-number=${Deck20[rand].number} class="cards">
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

let tries=0;
let flipped=[];
let collection=0 //version-2 //--> to check end result faster;
let i=0;
let amount=0;
let prev=0;
const card=document.querySelectorAll('.cards');
console.log(card);

card.forEach((div,index)=>{
  div.addEventListener('click',()=>{
  if(amount===0 && div.innerHTML!==''&& div.dataset.flip==='false'&&!open){
    flipped.push(div.dataset.number); 
    i=div.dataset.id;
    div.dataset.flip=true;
    prev=index;
    document.getElementById(i).classList.add('cardsAfter');
    amount++;
  }
   else if(amount===1 && div.innerHTML!=='' && div.dataset.flip==='false' &&!open){
    flipped.push(div.dataset.number);
    div.dataset.flip=true;
    document.getElementById(div.dataset.id).classList.add('cardsAfter');
    amount++;
    if(flipped[0]===flipped[1]){
    tries++;
    console.log('same');
    collection+=2
   if(collection==version){
    setTimeout(()=>{
      document.querySelector('.cont').innerHTML=`
      <h2 class="end">End Of Game</h2>
      <p class="end-message"> You have collected the ${version} cards in ${tries} tries. </p>
      <p><button class="play-again" onclick="addlevel();"> Play Again </button></p>
      <div class="levels"></div>
      <button> <a onclick="href='/Home.html'"> Home Page </a> </button>
      </div>`;
      document.querySelector('.cont').style.display='block';
      document.querySelector('.place-deck').innerHTML='';
      document.querySelector('.navi').style.display='none';
       },
      700
      )
  }
  else{
    setTimeout(()=>{
    document.getElementById(i).innerHTML='';
    div.innerHTML='';
    amount=0;
      },
      1000
    )
  }
    } 
   else{
    tries++;
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
    });
});

let open=false;

function menu(id){
  open=true;
  if(id==='one'){
    document.getElementById('one').classList.add('active');
    document.getElementById('two').classList.remove('active');
    document.getElementById('three').classList.remove('active');
    document.querySelector('.cont').innerHTML=`
    <h2 class="end">About Game</h2>
    <p class="end-message"> This game was implemented to challenge your memory. You should start by picking 2 cards and if they have a similar design/number, you have collected these cards. The goal is to collect all cards (number of cards depends on chosen level). It all comes back to whether you remember what cards you had previously flipped and their location, so focus and show us what you've got! Good Luck and Have Fun! </p> <p><button class="back-to-game"onclick="back();">Back To Game</button></p>`;
  }
  else if(id==='two'){
    document.getElementById('two').classList.add('active');
    document.getElementById('one').classList.remove('active');
    document.getElementById('three').classList.remove('active');
    document.querySelector('.cont').innerHTML=`
    <h2 class="end">Settings</h2>
    <p class="end-message">
   <button  class="play-again" onclick=" addlevel();">
    Restart
    </button>
    </p>
    <div class="levels"></div>
    <p>
    <button class="play-again"> <a onclick="href='/Home.html'"> Home Page </a>
    </button>
    </p>
    <p>
    <button class="lev" onclick="back();">Back To Game</button>
    </p>`;
  }
  else{
    document.getElementById('three').classList.add('active');
    document.getElementById('two').classList.remove('active');
    document.getElementById('one').classList.remove('active');
    document.querySelector('.cont').innerHTML=` 
    <h2 class="end">Credits</h2>
    <p class="end-message"> Program and website produced by <span>Salma Tarek Soliman</span></p>
    <p>Instagram:<a class="level" href="https://www.instagram.com/salma_.tarek/" target="_blank">salma_.tarek</a></p>
    <p class="end-message"> Card designs were created by <span> Rania Mekky</span></p>
    <p>Instagram:<a class="level" href="https://www.instagram.com/raniamekkyy/ "target="_blank">raniamekky</a> </p>
    <p><button onclick="back();" class="back-to-game"">Back To Game</button></p>
   `;
  }
  document.querySelector('.place-deck').style.opacity='0.3'; 
  document.querySelector('.cont').style.display='block';
}


function back(){
  document.querySelector('.cont').style.display='none'; 
  document.querySelector('.place-deck').style.opacity='1'; 
  document.getElementById('one').classList.remove('active');
  document.getElementById('two').classList.remove('active');
  document.getElementById('three').classList.remove('active');
  open=false;
}


function addlevel(){
  if(document.querySelector('.levels').innerHTML===''){
  document.querySelector('.levels').innerHTML=` 
     <a class="level" onclick="href='/20-Game.html'">Easy</a> 
     <a class="level" onclick="href='/32-Game.html'">Medium</a> 
     <a class="level" onclick="href='/40-Game.html'">Hard</a> `;
}
else
  document.querySelector('.levels').innerHTML='';

}


