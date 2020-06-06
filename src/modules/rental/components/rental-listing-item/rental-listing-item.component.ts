import { Component, OnInit, Input } from '@angular/core';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-rental-listing-item',
  templateUrl: './rental-listing-item.component.html',
  styleUrls: ['./rental-listing-item.component.scss']
})
export class RentalListingItemComponent implements OnInit {
  @Input() currentRental: Rental;
  constructor() { }

  ngOnInit(): void {
  }

}
