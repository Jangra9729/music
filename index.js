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
       
     break;

     case "d": 
     
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






