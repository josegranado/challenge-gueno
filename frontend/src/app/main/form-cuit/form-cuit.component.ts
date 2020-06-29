import { Component, OnInit } from '@angular/core';
import { CuitService } from '../../services/cuit.service';
import { Router } from '@angular/router';
import { Cuit } from '../../interfaces/Cuit';
@Component({
  selector: 'app-form-cuit',
  templateUrl: './form-cuit.component.html',
  styleUrls: ['./form-cuit.component.css']
})
export class FormCuitComponent implements OnInit { 
	public cuit: Cuit;
  public error: boolean = false;
  constructor(
  	private cuitService: CuitService, 
  	private router:Router) 
  { }

  ngOnInit(): void {
  }
  getCuit(cuit:HTMLInputElement):boolean
  {
  	this.cuitService.getCuit(cuit.value).subscribe( res => 
  		{
  			this.cuit = res.data;
  			this.router.navigate(['view', this.cuit.cuit]);
        this.error = false;
  		});

  	return false;
  }
}
