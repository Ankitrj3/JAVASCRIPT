let arr = [10,234,21,34,12];
function Insert(arr,index,element){
    for(let i=0;i<arr.length;i++){
       arr.splice(index,0,element);
    }
}
Insert(arr,2,33);