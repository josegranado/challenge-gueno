import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCuitComponent } from './card-cuit.component';

describe('CardCuitComponent', () => {
  let component: CardCuitComponent;
  let fixture: ComponentFixture<CardCuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
