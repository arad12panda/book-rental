import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    })

  ]
})
export class MapModule { }
