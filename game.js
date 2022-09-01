const RowAndColumnNumber=9;
let mat =  [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];
let solution =  [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];
StartBoard();

let timer;
let timeRemaining;
let selectedNum;
const para = new URLSearchParams(window.location.search);//חילוץ השלב הנבחר משורת הURL
const level = para.get("Level");
let counterFailed =3;
let boardLevel = mat;

 window.onload = function() {
  cleanBoardByLevel();
  setGame();   
}

function setGame(){
 startTimer();
 for(let i=0; i<RowAndColumnNumber ;i++){
     for(let j=0; j<RowAndColumnNumber; j++){
       let newInput = document.createElement("input")
       newInput.id=i.toString()+"-"+j.toString() //"0-0" 
       newInput.classList.add("cube");
       if(boardLevel[i][j]==0){//כNUMBER להגדיר רק את הקוביות המלאות 
        newInput.type="number";
        newInput.maxLength="1"
        newInput.max="9"
        newInput.min="1"
        
       }
      // newInput.onkeypress="check()";
       newInput.onkeydown="check()";
       document.getElementById("digits").appendChild(newInput)

       if(boardLevel[i][j]!=0){
        newInput.value= boardLevel[i][j]
        newInput.classList.add("cube_start");
        newInput.disabled="false";
       }else{
        newInput.value=null
       }
       if(i==2||i==5){
        newInput.classList.add("horizontal-line");
       }
       if(j==2||j==5){
        newInput.classList.add("vertical-line");
       }

     }
 }

}

function cleanBoardByLevel(){//ניקוי הלוח בהתאם לשלב
  let counter=0;
  
  if(level=="easyLevel"){
    counter=20;
  }else if(level=="mediumLevel"){
    counter=40;
  }else{
    counter=60;
  }

  while(counter!=0){
    let rowRandom = Math.floor(Math.random() * (10-1))  ;//הגרלת מספרים בין 0 ל 8
    let colRandom = Math.floor(Math.random() * (10-1))  ;
    
    if(boardLevel[rowRandom][colRandom]!=""){
      boardLevel[rowRandom][colRandom]=""
      counter--;
    }

  }
}
function finishBoard(){
  let index;
  let mistakeCounter= 0 ; 
  console.log(solution)
  for(let i=0; i<RowAndColumnNumber; i++){
    for(let j=0; j<RowAndColumnNumber; j++){
      if(boardLevel[i][j]==0){
        index=i.toString()+"-"+j.toString()
        if(document.getElementById(index).value!=""){
          if(document.getElementById(index).value>RowAndColumnNumber||document.getElementById(index).value<1){
            alert("Only numbers between 1 and 9 should be entered")
            return 0;
          }
          else if(parseInt(document.getElementById(index).value)!=solution[i][j]){
            mistakeCounter++
          }
       }else{
          alert("Complete Board!")
          return 0;
        }
      }
    }
  }
  if(mistakeCounter>0){
    document.getElementById("msg").textContent="You failed "
    document.getElementById("counterWrong").textContent=` ${mistakeCounter} You have only ${--counterFailed} attempts `
    counterFailed
    if(counterFailed<=0){
      GameOver();
    }
  }
  else{
    alert(`Great!`)
  if(alert){
    window.open("levelPage.html")
  }
  }

}
function GameOver(){
  alert(`GameOver : Fails three times in a row`)
  if(alert){
    window.open("levelPage.html")
  }
}
function restartBoard(){

  for(let i=0; i<RowAndColumnNumber ;i++){
    for(let j=0; j<RowAndColumnNumber; j++){

     let index = i.toString()+"-"+j.toString() ;//"index cube "
     if(boardLevel[i][j]==0){
      document.getElementById(index).value=" "
     }else{
      document.getElementById(index).value=boardLevel[i][j]
     }
    
    }
  }

}
function StartBoard(){

  let arrNumbers;
  let bool=true;
  let num;
  let counter;
  let flag = false;

  for(let i=0; i<RowAndColumnNumber ;i++){
    flag?--i:null;
    flag = false;
    arrNumbers =[1,2,3,4,5,6,7,8,9];
    for(let j=0; j<RowAndColumnNumber; j++){
      counter=0;
      bool=true;
      while(bool==true){//ללולאה הרצה עד שמוצאת מספר תקין ומכניסה ללוח
       let rand = Math.floor(Math.random() * arrNumbers.length);
       num=arrNumbers[rand];
       if(findInRow(num,i) && findInCol(num,j) && findInCube(num,i,j)){//שליחה לפונקציה שבודקת האם המספר לא קיים בשורה בעמודה ובקוביה
          mat[i][j]=num
          solution[i][j]=num
          bool=false;
          arrNumbers=arrNumbers.filter(numfilter=>numfilter!=num);
    
       }else {
        counter++;
       }

       if(counter>=50){ //איפוס וחזרה מחדש 
         for(let v=0; v<RowAndColumnNumber; v++){
          mat[i][v]=0;
          solution[i][v]=0;
         }
         if(i!=0){
          i--;
         }else{
          flag = true;
         }
         break;
        
        }
      }
    } 
  }
}
function returnfuncion(){
  StartBoard();
}
function findInRow(rand,row){
  for(let col=0; col<RowAndColumnNumber; col++){
      try {
        if(mat[row][col]==rand){
          return false;
        }
      } catch (error) {
        console.log(rand,row ,col )
      }
  }
  return true;
}
function findInCol(rand,col){
  for(let row=0; row<RowAndColumnNumber; row++){
    try {
      if(mat[row][col]==rand){
        return false;
      }
    } catch (error) {
      console.log(rand,row ,col )
    }
    
  }
  return true;
}
function findInCube(rand,row,col){

 let indexRow =Math.floor(row/3)*3
 let indexCol =Math.floor(col/3)*3

 for(let i=indexRow; i<=indexRow+2; i++){
   for(let j=indexCol; j<=indexCol+2; j++){
     if(mat[i][j]==rand){
      return false;
     }
   }
 }
 return true;
}
function Solve(){
  for(let i=0; i<RowAndColumnNumber; i++){
    for(let j=0; j<RowAndColumnNumber; j++){
      index=i.toString()+"-"+j.toString()
      if(boardLevel[i][j]==0){
        document.getElementById(index).value=solution[i][j];
      }
    }
  }
        
}
function startTimer(){
 
  //set time 
  if(level=="easyLevel"){
    timeRemaining = 180;
  } else if (level=="mediumLevel"){
    timeRemaining = 300;
  } else {timeRemaining = 600};

  document.getElementById("timer").textContent = timeConversion(timeRemaining);
  //
  timer= setInterval(function(){
      timeRemaining--;
      //
      if(timeRemaining === 0){
        document.getElementById("timer").textContent = timeConversion(timeRemaining);
        myStopFunction();
      }
      document.getElementById("timer").textContent = timeConversion(timeRemaining);
  }, 1000)
}
function timeConversion(time){
  let minutes = Math.floor(time /60);
  if(minutes <10) minutes = "0" + minutes;
  let seconds = time % 60;
  if(seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;

}
function myStopFunction() {
  clearInterval(timer);
  alert(`GameOver : time's over`)
  if(alert){
    window.open("levelPage.html")
  }
}
