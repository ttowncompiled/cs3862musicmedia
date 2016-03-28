import {Component} from 'angular2/core';
import {FirebaseService} from './lib/firebase';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { 
    trackInfo: Array<any> = [];
    isLoading: boolean = false;

    constructor(private fs: FirebaseService) {
        fs.dataRef.child('music').on('value', (snapshot: DataSnapshot) => {
            if (snapshot) {
                this.trackInfo = Object.keys(snapshot.val());
            }
        });
    }

}

