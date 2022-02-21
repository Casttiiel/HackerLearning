import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampeonesComponent } from './lista-campeones.component';

describe('ListaCampeonesComponent', () => {
  let component: ListaCampeonesComponent;
  let fixture: ComponentFixture<ListaCampeonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCampeonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
