import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

    carousel = ['Wanna', 'buy', 'some', 'coin ?'];

    visible: boolean;

    constructor() { }

    ngOnInit() { }


    clickMe(): void {
        this.visible = false;
    }
}
