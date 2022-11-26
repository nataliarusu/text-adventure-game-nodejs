const unvisitedRooms = [23,56,12,22]

const randomRoom =(array)=> {//unvisitedRooms
  return array[Math.floor(Math.random() * array.length)];
}

const validateInput=(input)=>{
  if(input==1||input==2){
      return true;
  }
  return false;

}