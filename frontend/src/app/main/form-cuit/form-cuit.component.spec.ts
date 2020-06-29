import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuitComponent } from './form-cuit.component';
import { CuitService } from '../../services/cuit.service';
import { Cuit } from '../../interfaces/Cuit';

describe('FormCuitComponent', () => {
  let component: FormCuitComponent;
  let fixture: ComponentFixture<FormCuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
});
