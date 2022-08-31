let solution = [
    [3,8,7,4,9,1,6,2,5],
    [2,4,1,5,6,8,3,7,9],
    [5,6,9,3,2,7,4,1,8],
    [7,5,8,6,1,9,2,3,4],
    [1,2,3,7,8,4,5,9,6],
    [4,9,6,2,5,3,1,8,7],
    [9,3,4,1,7,6,8,5,2],
    [6,7,5,8,3,2,9,4,1],
    [8,1,2,9,4,5,7,6,3]
 ]
 let board1 =
    [//20
    [3,0,7,4,9,1,6,0,5],
    [0,0,1,0,6,0,3,0,9],
    [5,6,0,3,0,7,0,1,0],
    [7,5,8,6,1,0,2,0,4],
    [0,0,3,0,8,0,5,9,0],
    [4,0,6,2,5,0,1,8,7],
    [9,0,4,0,7,0,8,0,2],
    [0,7,0,8,3,2,9,0,1],
    [8,0,2,0,4,5,0,0,3]
 ]
 let board2 = 
  [//40
  [3,0,7,4,9,1,6,0,5],
  [2,0,0,0,6,0,3,0,9],
  [0,0,0,0,0,7,0,1,0],
  [0,5,8,6,0,0,2,0,4],
  [1,0,3,0,0,4,0,9,0],
  [0,0,6,2,0,0,1,8,7],
  [9,0,4,0,7,0,0,0,2],
  [6,7,0,8,3,0,0,4,0],
  [8,1,0,0,4,5,0,0,0]
]
let board3 = 
  [//60
  [3,0,0,0,9,0,0,0,5],
  [2,0,0,0,6,0,0,0,9],
  [0,0,0,0,0,7,0,1,0],
  [0,5,0,6,0,0,0,0,4],
  [0,0,0,0,0,0,0,9,0],
  [0,0,6,0,0,0,0,0,7],
  [9,0,4,0,0,0,0,0,2],
  [0,7,0,8,0,0,0,0,0],
  [8,0,2,0,0,0,0,6,0]
]
 window.onload = function() {
    setGame();
}

function setGame(){

 for(let i=0; i<9 ;i++){
     for(let j=0; j<9; j++){
       let newDiv = document.createElement("div")
       newDiv.id=i.toString()+"-"+j.toString() //"0-0" 
       newDiv.classList.add("cube");
       document.getElementById("digits").appendChild(newDiv)

       if(board1[i][j]!=0){
        newDiv.innerText= board1[i][j]
        newDiv.classList.add("cube_start");
       }else{
        let newInput = document.createElement("input")
        newInput.classList.add("cube");
        newDiv.appendChild(newInput)
       }

       if(i==2||i==5){
        newDiv.classList.add("horizontal-line");
       }
       if(j==2||j==5){
        newDiv.classList.add("vertical-line");
       }

     }
 }

}

function finishBoard(){


}

function restartBoard(){

  for(let i=0; i<9 ;i++){
    for(let j=0; j<9; j++){

     let index = i.toString()+"-"+j.toString() ;//"0,0"
     if(board1[i][j]==0){
      document.getElementById(index).innerHTML=null
     }else{
      document.getElementById(index).innerHTML=board1[i][j]
     }
    
    }
  }

}

function StartBoard(){
  let bool;
  for(let i=0; i<4 ;i++){
    for(let j=0; j<4; j++){
      bool=true;
      while(bool==true){//ללולאה הרצה עד שמוצאת מספר תקין ומכניסה ללוח
        let rand = Math.floor(Math.random() * (10-1)) + 1//הגרלת מספר בין 1 ל9
        if(findInRow(rand,i) && findInCol(rand,j) && findInCube(rand,i,j)){//שליחה לפונקציה שבודקת האם המספר לא קיים בשורה בעמודה ובקוביה
          mat[i][j]=rand
          bool=false;
        }
      }
    }
  }
}

function StartBoard(){
  let bool;
  let num;
  let arrNumbers =[1,2,3,4,5,6,7,8,9]
  let arr=[];
  for(let i=0; i<5; i++){
    arrNumbers =[1,2,3,4,5,6,7,8,9]
    for(let j=0; j<5; j++){
      validnum(i,j,arrNumbers);
     
    }
  }
}
function validnum(i,j,arrNumbers){
  let arrNumbers =[1,2,3,4,5,6,7,8,9];
  let bool=true;
  let num;
 
  while(bool==true){//ללולאה הרצה עד שמוצאת מספר תקין ומכניסה ללוח
    let rand = Math.floor(Math.random() * arrNumbers.length);//הגרלת מספר בין 1 ל9
    num=arrNumbers[rand]
    if(findInRow(num,i) && findInCol(num,j) && findInCube(num,i,j)){//שליחה לפונקציה שבודקת האם המספר לא קיים בשורה בעמודה ובקוביה
      mat[i][j]=num
      bool=false;
      arrNumbers=arrNumbers.filter(numfilter=>numfilter!=num);
      //arrNumbers.slice(rand,1);
     // console.log(arrNumbers);
    }
  }
};

function StartBoard(){

  if(validMat(0,0)){
    return true;
  }
  else return false;
  /*for(let i=0; i<RowAndColumnNumber; i++){
    arrNumbers =[1,2,3,4,5,6,7,8,9]
    for(let j=0; j<RowAndColumnNumber; j++){
      validnum(i,j);
     
    }
  }*/
}
function validMat(row,col){
  let bool=true;
 
  if (row < RowAndColumnNumber && col < RowAndColumnNumber){
    for (let i = 0; i < RowAndColumnNumber; ++i){

     //while(bool==true){//ללולאת הרצה עד שמוצאת מספר תקין ומכניסה ללוח
       let rand = Math.floor(Math.random() * (10-1))+1;//הגרלת מספר בין 1 ל9

       if(findInRow(rand,row) && findInCol(rand,col) && findInCube(rand,row,col)){//שליחה לפונקציה שבודקת האם המספר לא קיים בשורה בעמודה ובקוביה
         mat[row][col]=rand
        // bool=false;
         if ((col + 1) < 9){
						//רקורסיה
			     if (validMat(row, col+1)) return true;
					 else mat[row, col] = 0;
					}
			   else if ((row + 1) <9)
					{
				  	//רקורסיה
					 if (validMat(row + 1, 0)) return true;
					 else mat[row, col] = 0;
					}
			   else return true;
        //console.log(arrNumbers);
        } 
        return false;
     // }
    }
  }
  else return true
};

function StartBoard(){

  let arrNumbers;
  let bool=true;
  let num;
  let counter;
  //מערך מונים
  for(let i=0; i<9 ;i++){
    arrNumbers =[1,2,3,4,5,6,7,8,9];
    for(let j=0; j<9; j++){
      counter=0;
      bool=true;
      while(bool==true){//ללולאה הרצה עד שמוצאת מספר תקין ומכניסה ללוח
       let rand = Math.floor(Math.random() * arrNumbers.length);
       num=arrNumbers[rand];
      
       if(findInRow(num,i) && findInCol(num,j) && findInCube(num,i,j)){//שליחה לפונקציה שבודקת האם המספר לא קיים בשורה בעמודה ובקוביה
          mat[i][j]=num
          bool=false;
          arrNumbers=arrNumbers.filter(numfilter=>numfilter!=num);
    
       }
       if(arrNumbers.length==1){
        counter++;
       }
       if(counter>=3){
         mat[i][j]=0;
        /* mat[i][j]=mat[i][j-1];
         //לשלוח לפני לבדיקה של 
         mat[i][j-1]=num;*/
         bool=false;
       }
      }
    } 
  }
}