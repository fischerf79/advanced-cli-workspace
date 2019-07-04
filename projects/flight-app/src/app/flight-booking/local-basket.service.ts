import { db, basketTableName } from './db';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalBasketService {

    public save(basket: object): Promise<any> {

        const entry = {
            id: 1,
            date: new Date(),
            basket
        }

        return db.table(basketTableName).put(entry);
    }

    public load(): Promise<object> {
        return db.table(basketTableName).get(1).then(entry => entry.basket);
    }

}