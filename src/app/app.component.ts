import { TmplAstTextAttribute } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ver = 0;
  cantid = true;
  length = 0;
  includeLetter = false;
  includeNumber = false;
  includeSymbol = false;
  password = '';
  cond = 0;
  condL = 0;
  condS = 0;
  numincluido = false;
  letincluido = false;
  simincluido = false;
  
  onChangeLength(value : string){
    const parsedvalue = parseInt(value);
    if(!isNaN(parsedvalue))     
       {
        this.length=parsedvalue;
        if (this.length >= this.ver){
          this.length=parsedvalue;
          this.cantid = true;
        }       
       }
       else {
        this.length=0;
        this.cantid = false;
      }
       console.log("length", this.length);
       console.log("---", this.cantid);
  }

  onChangeUseLetter() {
    this.includeLetter = !this.includeLetter;
    if (this.includeLetter) this.ver ++;
       else this.ver --;
    if (this.ver > this.length) this.cantid = false;
       else this.cantid = true;
    console.log("---", this.ver);
    console.log("---", this.cantid);
    
  } 
  onChangeUseNumber() {
    this.includeNumber = !this.includeNumber;
    if (this.includeNumber) this.ver ++;
       else this.ver --;
    if (this.ver > this.length) this.cantid = false;
       else this.cantid = true;  
    console.log("---", this.ver);
    console.log("---", this.cantid);
  }
  onChangeUseSymbol() {
    this.includeSymbol = !this.includeSymbol;
    if (this.includeSymbol) this.ver ++;
       else this.ver --;
    if (this.ver > this.length) this.cantid = false;
       else this.cantid = true;
    console.log("---", this.ver);
    console.log("---", this.cantid);
  }

  onBottonClick() {
    
    console.clear();
    //console.log("Letter", this.includeLetter);
    //console.log("Number", this.includeNumber);
    //console.log("Symbol", this.includeSymbol);

    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnmAQWERTYUIOPSDFGHJKLZXCVBNM';
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
      console.count() 
      // condicion para verificar que existe numeros en la clave
      if(this.cond==0)
        if (this.includeNumber){
          if ( numbers.includes(validChars[index]) ) {          
            this.numincluido=!this.numincluido;
            console.log("Incluye numero", this.numincluido);
            this.cond=1;
          }
          else console.log("Incluye numero", this.numincluido);
      }
      // condicion para verificar que existe letras en la clave
      if(this.condL==0)
      if (this.includeLetter){
        if ( letters.includes(validChars[index]) ) {          
          this.letincluido=!this.letincluido;
          console.log("Incluye letra", this.letincluido);
          this.condL=1;
        }
        else console.log("Incluye letra", this.letincluido);
      }

      // condicion para verificar que existe simbolos en la clave
      if(this.condS==0)
      if (this.includeSymbol){
        if ( symbols.includes(validChars[index]) ) {          
          this.simincluido=!this.simincluido;
          console.log("Incluye simbolo", this.simincluido);
          this.condS=1;
        }
        else console.log("Incluye simbolo", this.simincluido);
    }
      // desecha clave por solicitud de numeros no cumplida
      if (i==this.length-1)
       if (this.includeNumber)
        if (this.numincluido==false){
          i=-1;
          generatePasswords='';
          this.cond = 0;
          this.condL = 0;
          this.condS = 0;
          this.numincluido = false;
          this.letincluido = false;
          this.simincluido = false;
          console.log("no numero",);
        } 
        // desecha clave por solicitud de letras no cumplida
        if (i==this.length-1)
          if (this.includeLetter)
            if (this.letincluido==false){
               i=-1;
               generatePasswords='';
               this.cond = 0;
               this.condL = 0;
               this.condS = 0;
               this.numincluido = false;
               this.letincluido = false;
               this.simincluido = false;
              console.log("no letra",);
            } 
        // desecha clave por solicitud de simbolos no cumplida
        if (i==this.length-1)
          if (this.includeSymbol)
            if (this.simincluido==false){
               i=-1;
               generatePasswords='';
               this.cond = 0;
               this.condL = 0;
               this.condS = 0;
               this.numincluido = false;
               this.letincluido = false;
               this.simincluido = false;
               console.log("no simbolo",);
            } 
      console.log("clave",generatePasswords);

      // acepta clave de letras, numeros y simbolos
      if (i==this.length-1)
        if (this.includeNumber)
          if (this.includeLetter)
            if (this.includeSymbol)
              if (this.numincluido==true)
                if (this.simincluido==true)
                  if (this.letincluido==true){
                    this.password = generatePasswords;
                    this.cond = 0;
                    this.condL = 0;
                    this.condS = 0;
                    this.numincluido = false;
                    this.letincluido = false;
                    this.simincluido = false;
                    console.log("**********");
        }

      // acepta clave de letras y numeros
      if (i==this.length-1)
        if (this.includeNumber)
          if (this.includeLetter)
            if (this.numincluido==true)
              if (this.letincluido==true){
                 this.password = generatePasswords;
                 this.cond = 0;
                 this.condL = 0;
                 this.condS = 0;
                 this.numincluido = false;
                 this.letincluido = false;
                 this.simincluido = false;
                 console.log("**********");
        }  

       // acepta clave de letras y simbolos
       if (i==this.length-1)
       if (this.includeLetter)
         if (this.includeSymbol)
           if (this.simincluido==true)
             if (this.letincluido==true){
                this.password = generatePasswords;
                this.cond = 0;
                this.condL = 0;
                this.condS = 0;
                this.numincluido = false;
                this.letincluido = false;
                this.simincluido = false;
                console.log("**********");
       }

      // acepta clave de numeros y simbolos
       if (i==this.length-1)
       if (this.includeNumber)
         if (this.includeSymbol)
           if (this.simincluido==true)
             if (this.numincluido==true){
                this.password = generatePasswords;
                this.cond = 0;
                this.condL = 0;
                this.condS = 0;
                this.numincluido = false;
                this.letincluido = false;
                this.simincluido = false;
                console.log("**********");
       }
      // acepta clave de solo numeros      
      if (i==this.length-1)
        if (this.includeNumber)
          //if (this.includeLetter)
            if (this.numincluido==true){
              //if (this.letincluido==true){
                 this.password = generatePasswords;
                 this.cond = 0;
                 this.condL = 0;
                 this.condS = 0;
                 this.numincluido = false;
                 this.letincluido = false;
                 this.simincluido = false;
                 console.log("**********");
              }

      // acepta clave de solo letras      
      if (i==this.length-1)
        //if (this.includeNumber)
          if (this.includeLetter)
            //if (this.numincluido==true){
              if (this.letincluido==true){
                 this.password = generatePasswords;
                 this.cond = 0;
                 this.condL = 0;
                 this.condS = 0;
                 this.numincluido = false;
                 this.letincluido = false;
                 this.simincluido = false;
                 console.log("**********");
              } 

      // acepta clave de solo simbolos      
      if (i==this.length-1)
        //if (this.includeNumber)
          if (this.includeSymbol)
            //if (this.numincluido==true){
              if (this.simincluido==true){
                 this.password = generatePasswords;
                 this.cond = 0;
                 this.condL = 0;
                 this.condS = 0;
                 this.numincluido = false;
                 this.letincluido = false;
                 this.simincluido = false;
                 console.log("**********");
              }
      
    }
    
    
  }
}

