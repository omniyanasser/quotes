var def= document.querySelector("#default");
var x = document.querySelectorAll(".q");
var del = null;

function move(){
    def.innerHTML = "";

    if(del != null){
        x[del].style.display="none";
 
    }
    
        var rand = Math.floor(Math.random() * x.length);
        x[rand].style.display="block";
        del = rand;
    

}