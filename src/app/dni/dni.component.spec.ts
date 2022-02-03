import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNIComponent } from './dni.component';

describe('DNIComponent', () => {
  let component: DNIComponent;
  let fixture: ComponentFixture<DNIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DNIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
