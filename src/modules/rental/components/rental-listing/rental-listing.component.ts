import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit {
  rentals: Rental[] ;

  constructor(private rentalService: RentalService ) { }

  ngOnInit(): void {
    const rentalObservable = this.rentalService.getRental();
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {

      },
      () => {

      }
    );
  }

}
