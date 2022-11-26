import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyCoverterService } from 'src/app/services/currency-coverter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  all_currencies: string[] = [];
  enterd_value: number = 0;
  titleOfEnterdValue = "Enter number to change currency"
  resulte: number = 0
  ConverterForm!: FormGroup;
  swapFlage: boolean = false;
  @Output() formValue_ToValue = new EventEmitter();

  constructor(private currencyCoverterService: CurrencyCoverterService) { }

  ngOnInit(): void {
    this.getAllCurrency();
    this.initConverterForm();
    this.disableFields();
  }

  // initiate converter Form
  initConverterForm() {
    this.ConverterForm = new FormGroup({
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
    });
  }

  // disable fields
  disableFields() {
    this.getFormControl['from'].disable();
    this.getFormControl['to'].disable();
  }
  // disable & enable fields
  desableEnableFields(event: any) {
    if (event.target.value <= 0) {
      this.getFormControl['from'].disable();
      this.getFormControl['to'].disable();
      this.titleOfEnterdValue = "***please enter true value";
    }
    else {
      this.getFormControl['from'].enable();
      this.getFormControl['to'].enable();
      this.titleOfEnterdValue = "Enter number to change currency"
    }
  }

  // get controls
  get getFormControl() {
    return this.ConverterForm.controls;
  }

  // swap selected currencies
  swapSelectedCurrency() {
    this.swapFlage = !this.swapFlage;
    // if (this.swapFlage == true) {
    //   this.convertCurrency(to, from);
    // }
    // else {
    //   this.convertCurrency(from, to);
    // }
  }

  // convert currencies
  convertCurrency(from: string, to: string) {
    this.currencyCoverterService.GetMethod(`convert?to=${to}&from=${from}&amount=${this.enterd_value}`).subscribe((res) => {
      this.resulte = res.result;
      
      this.formValue_ToValue.emit({ fromValue: from, toValue: to });
    })
  }

  // get all currencies
  getAllCurrency() {
    this.currencyCoverterService.GetMethod("symbols").subscribe((res) => {
      this.all_currencies = Object.keys(res.symbols);
    })
  }

}
