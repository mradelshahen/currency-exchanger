import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterModuleComponent } from './starter-module.component';

describe('StarterModuleComponent', () => {
  let component: StarterModuleComponent;
  let fixture: ComponentFixture<StarterModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
