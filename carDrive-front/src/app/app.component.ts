import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from './models/Client';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carDrive-front';

  // Objeto do tipo componente
  client = new Client();

  // Variáveis de visibilidade
  btnCadastro:boolean = true;
  tabela:boolean = true;

  //Json de cliente
  cliente:Client[] = [];

  //construtor
  constructor(private service:ClientService){}

  //Método de seleção
  select():void{
    this.service.select()
    .subscribe(clientReturn => this.cliente = clientReturn)
  }

  //Método de cadastro
  create():void{
    this.service.create(this.client)
    .subscribe(createReturn => {

      //cadastrar no vetor
      this.cliente.push(createReturn);})

      //limpar o form
      this.client = new Client();

      //mensagem
      alert('Novo registro efetuado com sucesso!');
    
  }

  //Método de selção
  selectClient(posicao:number):void{

    //selecionar o cliente no vetor
    this.client = this.cliente[posicao];

    //visibilidade dos botões
    this.btnCadastro = false;

    //visibilidade da tabela
    this.tabela = false;
  } 

  //metodo para editar clientes
  update(){
    this.service.update(this.client)

    .subscribe(updateReturn => {

      //localizar a posição no vetor
      let posicao = this.cliente.findIndex(obj => {
        return obj.id == updateReturn.id;
      });

      //alterar os dados do cliente
      this.cliente[posicao] = updateReturn;

      //visibilidade dos botões
      this.btnCadastro = true;
      this.tabela = true;

      //mensagem
      alert('Alteração realizada com sucesso!')

      this.client = new Client;
    });

  }

  // Método para deletar

  delete(){
    this.service.delete(this.client.id)
    .subscribe(deleteReturn =>{
      let posicao = this.cliente.findIndex(obj => {
        return obj.id == this.client.id;
      });

      this.cliente.splice(posicao, 1);

            //visibilidade dos botões
            this.btnCadastro = true;
            this.tabela = true;
      
            //mensagem
            alert('Exclusão realizada com sucesso!')
      
            this.client = new Client;
    })
  }

  // método pata cancelar
  cancelar():void{
    this.client = new Client();
    this.btnCadastro = true;
    this.tabela = true;

  }

  //Método de inicialização
  ngOnInit(){
    this.select();
  }
}