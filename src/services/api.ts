import {Injectable} from "@angular/core";
import { Client } from 'src/app/interfaces/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card';

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

	//Metodos CRUD
	
	//Peticion get
	get(url:string): Observable<any>{
		return this.http.get(`${this.URL_API+url}.json`);
	}

}