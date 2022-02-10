import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRotationComponent } from './free-rotation.component';

describe('FreeRotationComponent', () => {
  let component: FreeRotationComponent;
  let fixture: ComponentFixture<FreeRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
