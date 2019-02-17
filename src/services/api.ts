import {Injectable} from "@angular/core";
import { Client } from 'src/app/interfaces/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card';
import { Consumption } from 'src/app/interfaces/consumption';
import { Adviser } from 'src/app/interfaces/adviser';

@Injectable()
export class ApiService{

	URL_API = 'http://localhost:4200/assets/data/';

	constructor(private http: HttpClient){}


	//Devuelvo todos los clientes
	getClients(){
		//Retorno tipo cliente
		return new Promise<Client[]>((resolve,reject)=>{
			this.get('clients').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Devuelvo todos los clientes
	getClient(id:number){
		//Retorno tipo cliente
		return new Promise<Client>((resolve,reject)=>{
			this.get('client').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Devuelvo todas las tarjetas de un cliente
	getCards(idClient:number){
		
		//Retorno tarjetas
		return new Promise<Card[]>((resolve,reject)=>{
			this.get('cards').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Devuelvo una tarjeta en base a su id
	getCard(id:number){
		
		//Retorno tarjetas
		return new Promise<Card>((resolve,reject)=>{
			this.get('card').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Devuelvo todos los consumos en esta tarjeta
	getConsumptions(idCard:number){
		
		//Retorno consumos
		return new Promise<Consumption[]>((resolve,reject)=>{
			this.get('consumptions').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Devuelvo todos los clientes
	getAdvisers(){
		//Retorno tipo cliente
		return new Promise<Adviser[]>((resolve,reject)=>{
			this.get('advisers').subscribe((data)=>{
				resolve(data);
			},(error)=>{
				reject(error);
			})
		})
	}

	//Metodos CRUD
	
	//Peticion get
	get(url:string): Observable<any>{
		return this.http.get(`${this.URL_API+url}.json`);
	}
}