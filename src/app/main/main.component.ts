import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    money: number = 6000;
    // tslint:disable-next-line:no-inferrable-types
    time: number = 12;
    // tslint:disable-next-line:no-inferrable-types
    // tslint:disable-next-line:max-line-length
    total: number = (this.money / this.time) + 1 + ((this.money / this.time) * (this.time * 0.01432)); // + (this.money * (0.05 * this.time))

    large: any = 'large';
    constructor() { }

    ngOnInit() { }

    updateTotal() {
        // tslint:disable-next-line:max-line-length
        this.total = (this.money / this.time) + 1 + ((this.money / this.time) * (this.time * 0.01432)); // + (this.money * (0.05 * this.time))
    }
}
