import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ApiService } from 'src/services/api';
import { Card } from 'src/app/interfaces/card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: Client = {
    id: 0,
    name: '',
    address: '',
    city: '',
    phone: '',
    totalCards: 0
  }

  //Card user for ngmodel form
  userCard: Card = {
    id:0,
    type : '',
		number : '',
		ccv : 0
  }

  cards: Card[] = [];

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private modalService:NgbModal
  ) { }

  ngOnInit() { 
    this.getClient();
  }

  //Get Client
  getClient():void {

    //Obtengo el id del cliente
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getClient(+id).then(data => {
      this.client = data;
      
      //Luego de tener el cliente, obtengo sus tarjetas
      this.getCards();
    })
  }

  //Obtener tarjetas del cliente
  getCards(){
    this.api.getCards(this.client.id).then(cards=>{
      this.cards = cards;
    })
  }


  //Vista de tarjeta
  showCard(card: Card, element){
    console.log(card,element);

  }

  //Muestro Modal con formularios
  showPopUp(content){
    this.modalService.open(content).result.then((result) => {
			
			//Guardo los nuevos cambios del cliente
			if(result == 'save-client'){
        
        //Agrego el nuevo cliente
				if(this.client.name && this.client.name != ''){
					this.client = this.client; //Actualizo registro
					console.log(this.client);
        }
        
			}else if(result == 'save-card'){

        //Agrego nueva tarjeta - valido que todos los campos esten llenos
        if(this.userCard.type != '' && this.userCard.number != '' && this.userCard.ccv != 0){
					this.userCard.id += 1;
					this.cards.push(this.userCard);
					console.log(this.userCard);
				}

      }
		})

		this.resetCard();
  }

  //Limpio objeto cliente
	resetCard(){
		this.userCard.type = '';
		this.userCard.number = '';
		this.userCard.ccv = 0;
	}

  //Metodo eliminar
	deleteCard(card):void{
		this.cards = this.cards.filter(obj => obj !== card);
	}
}
