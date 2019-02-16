import {Injectable} from "@angular/core";
import { Client } from 'src/app/interfaces/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

	//Peticion get
	get(url:string): Observable<any>{
		return this.http.get(`${this.URL_API+url}.json`);
	}

}