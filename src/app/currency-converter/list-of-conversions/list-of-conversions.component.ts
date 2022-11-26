import { Component, Input, OnInit } from '@angular/core';
import { From_To_Values } from 'src/app/models/from-to.model';
import { CurrencyCoverterService } from 'src/app/services/currency-coverter.service';

@Component({
  selector: 'app-list-of-conversions',
  templateUrl: './list-of-conversions.component.html',
  styleUrls: ['./list-of-conversions.component.css']
})
export class ListOfConversionsComponent implements OnInit {
  @Input() fromValue_toValue !: From_To_Values;
  @Input() swape: boolean = false;
  randomvalues = [
    1, 5, 10, 50, 100
  ]
  resulte: From_To_Values[] = [
    {
      fromValue: "1",
      toValue: ""
    },
    {
      fromValue: "5",
      toValue: ""
    },
    {
      fromValue: "10",
      toValue: ""
    },
    {
      fromValue: "50",
      toValue: ""
    },
    {
      fromValue: "100",
      toValue: ""
    },
  ];
  constructor(private currencyCoverterService: CurrencyCoverterService) { }

  ngOnInit(): void {
    if (this.fromValue_toValue) {
      if (this.swape == false) {
        for (let i = 0; i < this.resulte.length; i++) {
          this.convertCurrency(this.fromValue_toValue.fromValue, this.fromValue_toValue.toValue, this.resulte[i].fromValue, i);
        }
      }
      else if (this.swape == true) {
        for (let i = 0; i < this.resulte.length; i++) {
          this.convertCurrency(this.fromValue_toValue.toValue, this.fromValue_toValue.fromValue, this.resulte[i].fromValue, i);
        }
      }
    }
  }

  // convert currencies
  convertCurrency(from: string, to: string, enterd_value: string, index: number) {
    this.currencyCoverterService.GetMethod(`convert?to=${to}&from=${from}&amount=${enterd_value}`).subscribe((res) => {
      this.resulte[index].toValue = res.result;
    })
  }

}
