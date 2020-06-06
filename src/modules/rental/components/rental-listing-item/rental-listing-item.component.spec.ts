import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalListingItemComponent } from './rental-listing-item.component';

describe('RentalListingItemComponent', () => {
  let component: RentalListingItemComponent;
  let fixture: ComponentFixture<RentalListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalListingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
