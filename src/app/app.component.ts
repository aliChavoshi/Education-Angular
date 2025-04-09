import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  showMyPass = false;
  title = 'Your Password';
  length: number = 0;
  disableBtn = true;
  private password: string = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  constructor() {
    // this.password = 'New Value from Constructor';
  }
  onChangeLength(e: any) {
    let value = e.target.value as string;
    this.disableBtn = !(value.length > 0);
    this.password = value;
  }
  public onButtonClick() {
    const numbers = '12345678905';
    const letters = 'abcdefABCDEF';
    const symbols = '!@#$%^&*()_+';
    let validPassword = '';
    if (this.includeLetters) {
      validPassword += letters;
    }
    if (this.includeNumbers) {
      validPassword += numbers;
    }
    if (this.includeSymbols) {
      validPassword += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validPassword.length);
      generatedPassword += validPassword[index];
    }
    this.password = generatedPassword;
    this.showMyPass = true;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  getPassword(): string {
    return this.password;
  }
}
