import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { ListOfConversionsComponent } from './list-of-conversions/list-of-conversions.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { StarterModuleComponent } from './starter-module/starter-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrencyConverterComponent,
    ListOfConversionsComponent,
    StarterModuleComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CurrencyConverterModule { }
