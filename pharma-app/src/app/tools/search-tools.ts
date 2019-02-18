export class SearchTools{

public static getFirstFreeId(values : number[]) : number{
    let result : number = 1;
    let found = false;
    while (!found){
      if(values.findIndex(function(element){
        return result === element; 
      }) < 0){
        found = true;
      }else{
        result++;
      }
    }
    return result;
   }
}