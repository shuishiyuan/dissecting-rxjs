import {Observable} from 'rxjs/Observable';

const observable = new Observable(subscriber => {
    let timer = 0;
    const intervalId = setInterval(() => {
       subscriber.next(++timer);
       if (timer === 3) {
           clearInterval(intervalId);
       }
    }, 5000);
});

const observer = {
    next: item => {
        console.log(item);
    }
}

observable.subscribe(observer);