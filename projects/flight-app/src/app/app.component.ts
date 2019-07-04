import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {SwPush, SwUpdate} from "@angular/service-worker";

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private snackBar: MatSnackBar,
                private swUpdate: SwUpdate,
                private swPush: SwPush) {
        this.setupUpdates();

        console.log('setupPush');
        this.setupPush();
    }


    private setupUpdates(): void {
        const subscription = this.swUpdate.available.subscribe(u => {
            this.swUpdate.activateUpdate().then(e => {
                this.snackBar.open("App updated -- please reload!", "OK");
            });
        });
        this.swUpdate.checkForUpdate();
    }

    private setupPush(): void {
        const key = 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE';
        this.swPush.requestSubscription({
            serverPublicKey: key
        })
            .then(sub => {
                    console.log('Push Subscription', JSON.stringify(sub));
                },
                err => {
                    console.error('error registering for push', err);
                });

        this.swPush.messages.subscribe(push => {
            console.log('received push message', push);
        });
    }
}

