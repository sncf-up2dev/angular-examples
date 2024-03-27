import { Injectable } from "@angular/core";
import { Observable, interval, Observer, Subscription, PartialObserver, of, from, timer, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    id = 0
    coldObservable$: Observable<number> = new Observable((subscriber) => {
        let i = 0

        let id = this.id
        this.id++

        console.log(`(${id} - cold) : Début de l'émission`)
        subscriber.next(i++)
        let intervalId = setInterval(() => {
            console.log(`(${id} - cold) : Emission d'une valeur : ${i}`)
            subscriber.next(i++)
        }, 1000);
        return () => {
            console.log(`(${id} - cold) : Fin de l'émission`)
            clearInterval(intervalId)
        }
    })

    i = 0
    hotObservable$: Observable<number> = new Observable((subscriber) => {
        let id = this.id
        this.id++

        console.log(`(${id} - hot) : Début de l'émission`)
        subscriber.next(this.i++)
        let intervalId = setInterval(() => {
            console.log(`(${id}- hot) : Emission d'une valeur : ${this.i}`)
            subscriber.next(this.i++)
        }, 1000);
        return () => {
            console.log(`(${id}- hot) : Fin de l'émission`)
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
    }

    resubscribe() {
        this.subscription.unsubscribe()
        this.subscription = this.coldObservable$.subscribe(this.observer)
    }
}