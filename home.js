var size = window.matchMedia( "(min-width: 601px)" ); 
var hovertime = 0;
function OpenBar() {
    hovertime++;
    console.log(hovertime);
    bodychange();            
    if (size.matches) {  // window width is min 601px 
        console.log("opening big sidebar");
        document.getElementById("bar").style.transform = "translateX(0%)";
        document.getElementById("bar").style.right = "0vw";
        document.getElementById("span1").textContent = "bout";
        document.getElementById("span2").textContent = "rojects";
        document.getElementById("span3").textContent = "ontact";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("ul").style.width = "100%";
        
    }
     
    else { // window width is less than 601px
        console.log("opening small sidebar");

        document.getElementById("bar").style.transform = "translateY(0%)";
        document.getElementById("bar").style.top = "0";
        document.getElementById("span1").textContent = "bout";
        document.getElementById("span2").textContent = "rojects";
        document.getElementById("span3").textContent = "ontact";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("ul").style.height = "10vh";
                        
    }  
}
    
function CloseBar() { 

    if (size.matches) { // window width is min 601px 

        console.log("closing big sidebar");
        document.getElementById("bar").style.transform = "translateX(100%)";
        document.getElementById("bar").style.right = "4vw";
        document.getElementById("span1").textContent = "";
        document.getElementById("span2").textContent = "";
        document.getElementById("span3").textContent = "";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("ul").style.width = "4vw";
    }

    else { // window width is less than 601px
        
        console.log("closing small sidebar");
        document.getElementById("bar").style.transform = "translateY(-100%)";
        document.getElementById("bar").style.top = "5vh";
        document.getElementById("span1").textContent = "";
        document.getElementById("span2").textContent = "";
        document.getElementById("span3").textContent = "";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("ul").style.height = "8vh"; 
    }        
}

function bodychange() {


    switch(hovertime) {
        case 1:
            document.getElementById("hidtext").style.color = "blue";
            document.getElementById("hidtext").textContent = "Good job! Move Your curzor on the menu again!";
          break;
        case 2:
            document.getElementById("hidtext").textContent = "Sometimes when You are not looking for them...";
          break;
        case 3:
            document.getElementById("hidtext").textContent = "But seems like You are searching now";
          break;
        case 4:
            document.getElementById("hidtext").textContent = "So I think I should disappear...";
          break;
        case 5:
            document.getElementById("hidtext").textContent = "Bye.";
          break;
        case 6:
            document.getElementById("hidtext").textContent = "Sometimes You find new things when You are not looking for them.";
          break;
        case 7:
            document.getElementById("hidtext").textContent = "Ubelievable...";
          break;
        case 8:
            document.getElementById("hidtext").textContent = "...and You are still doing it"
          break;
        case 9:
            document.getElementById("hidtext").textContent = "Please just klick on something in the menu"
          break;

        default:
        document.getElementById("hidtext").textContent = "Sometimes You find new things when You are not looking for them.";
      }

}