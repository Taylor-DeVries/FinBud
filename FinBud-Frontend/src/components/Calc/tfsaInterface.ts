"use client";
import RefInput from "./Reference";

interface TFSA {
  born: RefInput;
  resident: RefInput;
  contributed: RefInput;
  withdrawn: RefInput;
  withdrawnCurr: RefInput;
}

class TFSAvars implements TFSA {
  resident: RefInput;
  born: RefInput;
  contributed: RefInput;
  withdrawn: RefInput;
  withdrawnCurr: RefInput;

  constructor() {
    (this.resident = new RefInput()),
      (this.born = new RefInput()),
      (this.contributed = new RefInput()),
      (this.withdrawn = new RefInput());
    this.withdrawnCurr = new RefInput();
  }

  public getTFSAProps(inputted: TFSAvars) {
    try {
      if (
        inputted.born.textInput.current &&
        inputted.resident.textInput.current &&
        inputted.contributed.textInput.current &&
        inputted.withdrawn.textInput.current &&
        inputted.withdrawnCurr.textInput.current
      ) {
        let temp = [
          inputted.resident.textInput.current.value,
          inputted.born.textInput.current.value,
          inputted.contributed.textInput.current.value,
          inputted.withdrawn.textInput.current.value,
          inputted.withdrawnCurr.textInput.current.value,
        ];
        return temp;
      }
    } catch (e) {
      return ["error!!!!"];
    }
    return [];
  }
}

export default TFSAvars;
