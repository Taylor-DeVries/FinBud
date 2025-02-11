"use client"
import React, { createRef, RefObject } from 'react';

class RefInput {
    textInput: RefObject<HTMLInputElement>;

  constructor() {
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.logInputValue = this.logInputValue.bind(this);
  }

  focusTextInput() {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  logInputValue() {
    if (this.textInput.current) {
      console.log(this.textInput.current.value); // Print the value of the input
    }
  }
}
export default RefInput;