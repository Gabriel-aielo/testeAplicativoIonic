import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForUsPageRoutingModule } from './for-us-routing.module';

import { ForUsPage } from './for-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForUsPageRoutingModule
  ],
  declarations: [ForUsPage]
})
export class ForUsPageModule {}
