import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
@Component({
  selector: 'app-card-cuit',
  templateUrl: './card-cuit.component.html',
  styleUrls: ['./card-cuit.component.css']
})
export class CardCuitComponent implements OnInit {
	id:number;
	user: User;
	form: boolean = false;
	approved: boolean;
	date: Date;
  constructor(
  		private activatedRoute: ActivatedRoute,
  		private router: Router,
  		private userService: UserService
  	) { }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe( params =>
  		{
  			this.id = params['cuit'];
  			this.userService.getUser(this.id).subscribe( res =>
	  			{
	  				this.user = res.data;
	  				this.approved = this.user?.scoring.approved || false;
	  			});
  		});
  }

  setUser(	name:HTMLInputElement, 
  			surname:HTMLInputElement, 
  			birthday: HTMLInputElement, 
  			confidence: HTMLInputElement )
  {

  		this.userService.setUser(
  					name.value, 
  					surname.value, 
  					birthday.value, 
  					confidence.value, 
  					this.id)
  				.subscribe( res =>
  				{
  					// NO HAY QUE HACER NADA
  				});
  		this.router.navigate(['view',this.id]).then(() => { location.reload() })
  		return false;
  }

}
