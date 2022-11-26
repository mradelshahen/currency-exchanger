import { Component, OnInit } from '@angular/core';
import { From_To_Values } from 'src/app/models/from-to.model';
import { CurrencyCoverterService } from 'src/app/services/currency-coverter.service';

@Component({
  selector: 'app-starter-module',
  templateUrl: './starter-module.component.html',
  styleUrls: ['./starter-module.component.css']
})
export class StarterModuleComponent implements OnInit {

  fromValue_toValue !: From_To_Values;
  constructor() { }

  ngOnInit(): void {

  }

  getFromvalue_ToValue(event: any) {
    this.fromValue_toValue = event
    console.log(this.fromValue_toValue);
  }

}
