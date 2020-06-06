import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './components/rental/rental.component';
import { RentalListingComponent } from './components/rental-listing/rental-listing.component';
import { RentalListingItemComponent } from './components/rental-listing-item/rental-listing-item.component';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalService } from './services/rental.service';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';




@NgModule({
  declarations: [RentalComponent, RentalListingComponent, RentalListingItemComponent, RentalDetailComponent],
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  providers: [RentalService] /*register a service */
})
export class RentalModule { }
