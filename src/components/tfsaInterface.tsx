"use client"
import  RefInput from "./Reference"

interface TFSA {
    born: RefInput;
    resident: RefInput;
    contributed: RefInput;
    withdrawn: RefInput;
  }

  class TFSAvars implements TFSA {
    born: RefInput;
    resident: RefInput;
    contributed: RefInput;
    withdrawn: RefInput;

    constructor() {
            this.born = new RefInput(),
            this.resident = new RefInput(),
            this.contributed = new RefInput(),
            this.withdrawn = new RefInput()
        
    }

    
    public getTFSAProps( inputted: TFSAvars, ) {
        try {
        if (inputted.born.textInput.current && inputted.resident.textInput.current && inputted.contributed.textInput.current && inputted.withdrawn.textInput.current) {
        let temp = [inputted.born.textInput.current.value, inputted.resident.textInput.current.value, inputted.contributed.textInput.current.value, inputted.withdrawn.textInput.current.value];
        return temp; }
        } catch (e) {
            return ["error!!!!"];
        }
    }

    
}
  
export default TFSAvars;