"use client";
import RefInput from "./Reference";

class FHSAvars  {
  contributed: RefInput;
  opened: RefInput;
  

  constructor() {
    (this.contributed = new RefInput()),
      (this.opened = new RefInput())
  }
  public getFHSAProps(inputted: FHSAvars) {
    try {
      if (
        inputted.opened.textInput.current &&
        inputted.contributed.textInput.current 
      ) {
        let temp = [
          inputted.contributed.textInput.current.value,
          inputted.opened.textInput.current.value
        ];
        return temp;
      }
    } catch (e) {
      return ["error!!!!"];
    }
    return [];
  }
}

export default FHSAvars;
