import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailComponent} from './components/rental-detail/rental-detail.component';



const routes: Routes = [
  {path: 'rental', component: RentalComponent },
  {path: 'rental/:rentalId', component: RentalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }
