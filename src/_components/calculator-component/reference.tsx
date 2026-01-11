'use client';
import { createRef, RefObject } from 'react';

class RefInput {
  textInput: RefObject<HTMLInputElement>;

  constructor() {
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }
}
export default RefInput;
