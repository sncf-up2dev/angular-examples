import { Injectable } from "@angular/core";
import { Observable, interval, Observer, Subscription, PartialObserver, of, from, timer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    coldObservable$: Observable<number> = new Observable((subscriber) => {
        let i = 0

        subscriber.next(i++)
        subscriber.next(i++)
        subscriber.next(i++)
        let intervalId = setInterval(() => {
            subscriber.next(i++)
        }, 1000);
        return () => {
            console.log("Teardown")
            clearInterval(intervalId)
        }
    })

    i = 0

    hotObservable$: Observable<number> = new Observable((subscriber) => {
        subscriber.next(this.i++)
        subscriber.next(this.i++)
        subscriber.next(this.i++)
        let intervalId = setInterval(() => {
            subscriber.next(this.i++)
        }, 1000);
        return () => {
            console.log("Teardown")
            clearInterval(intervalId)
        }
    })

    interval$ = interval(1000)

    observer: Observer<number> = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
    }

    subscription: Subscription = this.coldObservable$.subscribe(this.observer)

    constructor() {
        console.log("Constructeur")
    }

    resubscribe() {
        this.subscription.unsubscribe()
        this.subscription = this.coldObservable$.subscribe(this.observer)
    }
}