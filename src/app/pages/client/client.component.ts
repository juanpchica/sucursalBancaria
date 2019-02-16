import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ApiService } from 'src/services/api';

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

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() { 
    this.getClient();

  }

  //Get Client
  getClient():void {

    //Obtengo el id del cliente
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getClient(+id).then(data => {
      this.client = data;
    })
  }

}
