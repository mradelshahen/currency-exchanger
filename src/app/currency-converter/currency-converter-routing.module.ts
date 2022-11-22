import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterModuleComponent } from './starter-module/starter-module.component';

const routes: Routes = [
  {
    path: '',
    component: StarterModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConverterRoutingModule { }
