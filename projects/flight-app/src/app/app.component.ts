import {Component, OnDestroy} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {SwUpdate} from "@angular/service-worker";
import {Subscription} from "rxjs";

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private snackBar: MatSnackBar,
                private swUpdate: SwUpdate) {
        this.setupUpdates();
    }



    private setupUpdates(): void {
        console.log('setupUpdates');
        const subscription = this.swUpdate.available.subscribe(u => {
            this.swUpdate.activateUpdate().then(e => {
                this.snackBar.open("App updated -- please reload!", "OK");
            });
        });

        console.log('checkForUpdate');
        this.swUpdate.checkForUpdate();
    }
}

