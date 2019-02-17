import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adviser } from 'src/app/interfaces/adviser';

@Component({
  selector: 'app-advisers',
  templateUrl: './advisers.component.html',
  styleUrls: ['./advisers.component.css']
})
export class AdvisersComponent implements OnInit {

  advisers: Adviser[] = [];
  userAdviser: Adviser = {
    id:0,
    name: '',
    skill: ''
  }

  constructor(public api:ApiService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAdvisers();
  }

  getAdvisers(){
    this.api.getAdvisers()
      .then(data => {this.advisers = data;
        console.log(data);
      })
			.catch(error => console.log(error))
  }

  addAdviser(content){
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			
			//Guardo el nuevo cliente cuando cierre el modal
			if(result == 'save'){
				//Agrego el nuevo cliente
				if(this.userAdviser.name != '' && this.userAdviser.skill != ''){
					this.userAdviser.id += 1;
					this.advisers.push(this.userAdviser);
					console.log(this.userAdviser);
				}
			}
		})

		this.resetAdviser();
	}

	//Limpio objeto Adviser
	resetAdviser(){
		this.userAdviser.name = '';
		this.userAdviser.skill = '';
	}

	//Metodo eliminar
	deleteAdviser(adviser):void{
		this.advisers = this.advisers.filter(obj => obj !== adviser);
	}

  editAdviser(adviser: Adviser,content){
    this.userAdviser = adviser;
		this.addAdviser(content);
  }

}
