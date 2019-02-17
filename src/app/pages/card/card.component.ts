import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api';
import { Card } from 'src/app/interfaces/card';
import { Client } from 'src/app/interfaces/client';
import { Consumption } from 'src/app/interfaces/consumption';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
	consumDate = {
		year: '',
		month: '',
		day: ''
	}

	consumU: Consumption = {
		id:0,
		date: '',
		amount: "",
		description: ""
	}

	

  consumptions: Consumption[] = [];


  constructor(
	  private route: ActivatedRoute, 
	  private api: ApiService,
	  private modalService: NgbModal
	) { }

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
  
   //Muestro Modal con formularios
    showPopUp(content){
		this.modalService.open(content).result.then((result) => {
				
			//Guardo los nuevos cambios del cliente
			if(result == 'save-card'){
		
				//Agrego el nuevo cliente
				if(this.card.type != '' && this.card.number != '' && this.card.ccv != 0){
					this.card = this.card; //Actualizo registro
					console.log(this.card);
				}
		
			}else if(result == 'save-consum'){

				//Agrego nueva tarjeta - valido que todos los campos esten llenos
				if(this.consumDate && this.consumU.amount != '' && this.consumU.description != ''){
					this.consumU.id += 1;
					
					//Genero la fecha
					this.consumU.date = this.consumDate.year+'-'+this.consumDate.month+'-'+this.consumDate.day;
					this.consumptions.push(this.consumU);
					console.log(this.consumU);
				}
			}
		})

		this.resetCard();
  }

  	//Limpio objeto
	resetCard(){
		this.consumU.date = '';
		this.consumU.amount = '';
		this.consumU.description = '';
		this.consumDate = {
			year: '',
			month: '',
			day: ''
		}
	}

  	//Metodo eliminar
	deleteConsum(consum):void{
		this.consumptions = this.consumptions.filter(obj => obj !== consum);
	}

	editConsum(consum: Consumption,content){
		this.consumU = consum;
		this.showPopUp(content);
	}


}
