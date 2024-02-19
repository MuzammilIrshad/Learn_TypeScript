import { measure } from "helpful-decorators";

class DateClass {

    constructor(){
    }
    @measure
     measureTime(){  
      let total = 0
      for (var i = 0; i < 10000000000; i++){
        total += i
      }
    };
}
const timeTaken = new DateClass();
timeTaken.measureTime();