import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinderRoutingModule } from './finder-routing.module';
import { LibFinderComponent } from './lib-finder/lib-finder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LibFinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule   
  ]
})
export class FinderModule { }
