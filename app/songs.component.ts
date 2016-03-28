import {Component} from 'angular2/core';
import {FirebaseService} from './lib/firebase';

@Component({
    selector: 'my-app',
    templateURL: 'app/app.html',
})
export class SongsComponent {
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
