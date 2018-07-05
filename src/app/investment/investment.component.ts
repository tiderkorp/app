import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-investment',
    templateUrl: './investment.component.html',
    styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    money: number = 6000;
    // tslint:disable-next-line:no-inferrable-types
    time: number = 12;
    // tslint:disable-next-line:no-inferrable-types
    // tslint:disable-next-line:max-line-length
    total: number = this.money + 1 + (this.money * (this.time * 0.01232));

    large: any = 'large';
    constructor() { }

    ngOnInit() { }

    updateTotal() {
        // tslint:disable-next-line:max-line-length
        this.total = this.money + 1 + (this.money * (this.time * 0.01232));
    }
}
