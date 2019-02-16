import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

	clients: Client[] = [];

	constructor(public api:ApiService) { }

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

}
