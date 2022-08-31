let myLevel;

function SetLevel(level){

    myLevel=level;
    openGamePage();

}

function openGamePage(){
   window.open("game.html?Level="+myLevel);
   window.close("index.html")
}

