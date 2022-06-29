import { TmplAstTextAttribute } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetter = false;
  includeNumber = false;
  includeSymbol = false;
  password = '';
  
  onChangeLength(value : string){
    const parsedvalue = parseInt(value);
    if(!isNaN(parsedvalue)) {
      this.length=parsedvalue;      
    }
    else {this.length=0};
  }

  onChangeUseLetter() {
    this.includeLetter = !this.includeLetter;
  }
  onChangeUseNumber() {
    this.includeNumber = !this.includeNumber;
  }
  onChangeUseSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }
  onBottonClick() {
    console.log(this.length);
    console.log(this.includeLetter);
    console.log(this.includeNumber);
    console.log(this.includeSymbol);

    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeNumber){
      validChars += numbers;
    }

    if (this.includeLetter){
      validChars += letters;
    }

    if (this.includeSymbol){
      validChars += symbols;
    }

    let generatePasswords = '';
    for (let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length); 
      //genera un numero aleatorio entre 0 y un maximo (en este caso el tamanno de la variale validChars)
      generatePasswords += validChars[index];      
    }
    this.password = generatePasswords;
    
  }
}
