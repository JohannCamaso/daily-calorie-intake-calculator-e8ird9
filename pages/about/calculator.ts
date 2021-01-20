import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "calculator.html"
})
export class CalculatorPage {
  sex: string;
  ls: number;
  clr: number;
  ht: number;
  age: number;
  bmr: number;
  wt: number;

  constructor(public navCtrl: NavController) {}
  Calculate() {
    if (this.sex == "male") {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age + 5;
      this.clr = this.bmr * this.ls;
    } else {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age - 161;
      this.clr = this.bmr * this.ls;
    }
    this.clr = parseFloat(this.clr.toFixed(2));
  }
}









