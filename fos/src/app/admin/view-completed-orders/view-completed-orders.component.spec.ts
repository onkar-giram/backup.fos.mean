import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedOrdersComponent } from './view-completed-orders.component';

describe('ViewCompletedOrdersComponent', () => {
  let component: ViewCompletedOrdersComponent;
  let fixture: ComponentFixture<ViewCompletedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompletedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompletedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
