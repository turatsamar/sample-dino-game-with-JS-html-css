const dino = document.getElementById("dino");
const kactus = document.getElementById("kactus");

document.addEventListener("keydown", function(event){
    jump();
});
 function jump(){
     if(dino.classList !="jump"){
         dino.classList.add("jump")
     }
     setTimeout(function(){
         dino.classList.remove("jump")
     },300)
 }
 let isAlive = setInterval(function(){
     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
     let kactusLeft = parseInt(window.getComputedStyle(kactus).getPropertyValue("left"));

     if (kactusLeft < 50 && kactusLeft > 0 && dinoTop >= 140){
         alert("GAME OVER!!")

     }
    },10)