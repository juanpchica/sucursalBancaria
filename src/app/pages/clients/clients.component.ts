import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api';
import { Client } from 'src/app/interfaces/client';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
	userClient: Client = {
		id:0,
		name:'',
		address: '',
		city: '',
		phone: '',
		totalCards: 0
	}
	clients: Client[] = [];
	closeResult: string;

	constructor(public api:ApiService, private modalService: NgbModal) { }

	ngOnInit() {

		//Muestro los clientes
		this.getClients();
	}

	//Obtengo los clientes 
	getClients(){
		this.api.getClients()
			.then(data => this.clients = data)
			.catch(error => console.log(error))
	}

	//Agrego nuevo cliente
	addClient(content){
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			
			//Guardo el nuevo cliente cuando cierre el modal
			if(result == 'save'){
				//Agrego el nuevo cliente
				if(this.userClient.name && this.userClient.name != ''){
					this.userClient.id += 1;
					this.clients.push(this.userClient);
					console.log(this.userClient);
				}
			}
		})

		this.resetClient();
	}

	//Limpio objeto cliente
	resetClient(){
		this.userClient.name = '';
		this.userClient.address = '';
		this.userClient.city = '';
		this.userClient.phone = '';
	}

	//Metodo eliminar
	deleteClient(client):void{
		this.clients = this.clients.filter(obj => obj !== client);
	}

}
