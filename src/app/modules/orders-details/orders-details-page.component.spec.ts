import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsPageComponent } from './orders-details-page.component';

describe('OrdersDetailsPageComponent', () => {
  let component: OrdersDetailsPageComponent;
  let fixture: ComponentFixture<OrdersDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
