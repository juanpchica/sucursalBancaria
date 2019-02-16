import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api';
import { Card } from 'src/app/interfaces/card';
import { Client } from 'src/app/interfaces/client';
import { Consumption } from 'src/app/interfaces/consumption';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card = {
	  id: 0,
	  type:"",
	  number: "",
	  ccv: 0
  }
  client: Client = {
    id: 0,
    name: '',
    address: '',
    city: '',
    phone: '',
    totalCards: 0
  }

  consumptions: Consumption[] = [];


  constructor(private route: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
      this.getCard();
    }

    //Get Card
    getCard():void {
      //Obtengo el id del cliente
      const id = this.route.snapshot.paramMap.get('id');
      this.api.getCard(+id).then(data => {
        this.card = data;
        
        //Obtengo el cliente al que le pertenece la tarjeta
		this.getClient();
		
		//Obtengo los consumos de la tarjeta
		this.getConsumptions();
      })
    }
  
    //Obtener el cliente actual
    getClient(){

       //Obtengo el id del cliente
		const id = this.route.snapshot.paramMap.get('idClient');
		this.api.getClient(+id).then(data => {
			this.client = data;

			//Luego de tener el cliente, obtengo sus tarjetas
			this.getClient();
		})
    }

	getConsumptions(){
		this.api.getConsumptions(+this.card.id).then(data =>{
			this.consumptions = data;
		})
	}


}
