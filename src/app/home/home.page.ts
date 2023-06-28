import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

	resultado: any = "";
  igual: any = "";

	exibir(numero: any) {
		// usamos this para acessar a variável que foi criada acima
		this.igual += numero;
    this.atualizaResultado();
	}
  // Função que apaga o resultado da conta 
  clear(){
    this.igual = '';
    this.resultado = '';
  }

  //Função que apaga o último número do resultado/último número ou caractere digitado
  apagaUltimo(){
    let chars = this.igual.slice(0, -1);
    this.igual = chars;
    this.atualizaResultado();

    chars = this.resultado.slice(0, -1);
    this.resultado = chars;
  }

  //Função que inverte o sinal do número
  inverterSinal(){
    this.resultado = (this.resultado * (-1)).toString();
  }

  operadores(numero: any){
    this.igual += numero;
    this.atualizaResultado();
  }

 // Função Eval para fazer as contas (adição, subtração, multiplicação e divisão) que são feitas a partir do click no botão igual.
  botaoIgual(){
    this.igual = this.resultado;
    this.resultado = null;
  }
  
  atualizaResultado() {
    this.resultado = eval(this.igual);
  }

}

