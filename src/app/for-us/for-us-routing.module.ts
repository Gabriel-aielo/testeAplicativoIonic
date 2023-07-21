import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForUsPage } from './for-us.page';

const routes: Routes = [
  {
    path: '',
    component: ForUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForUsPageRoutingModule {}
