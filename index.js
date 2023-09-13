var numberOfButtons=document.querySelectorAll(".drum").length;



for(var i=0; i<numberOfButtons; i++){

    
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
  console.log("I Got Clicked Instrumental" +" " +this.innerHTML);


var btninnerHTML=this.innerHTML;

this.style.color= "green";  

 switch (btninnerHTML) {
   
   case "w":             
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
    
     case "a":    
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
     break;

     case "s":
        var tom3 = new Audio("sounds/Tom-3.mp3");
        tom3.play();
     break;

     case "d":
                function() {
                var audio = new Audio("../../media/KR881.mp3");
                audio.play();
            }
         
        // var tom4 = new Audio("sounds/Tom-4.mp3");
        // tom4.play();
     break;  

     case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
     break;

     case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
     break;

     case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
     break;

  default:  console.log(btninnerHTML);
     break; 


 }
   


}); 

         // document.addEventListener("keypress",function(event){
         //    console.log(event);
         // });




         // function makessound(key){



         // }

      

}
                            

                             //anominous function

                           //   var audio = new Audio("sounds/Tom-1.mp3");
                           //   audio.play();






