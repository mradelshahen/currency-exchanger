import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfConversionsComponent } from './list-of-conversions.component';

describe('ListOfConversionsComponent', () => {
  let component: ListOfConversionsComponent;
  let fixture: ComponentFixture<ListOfConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfConversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
