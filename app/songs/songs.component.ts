import {Component} from 'angular2/core';
import {FirebaseService} from './lib/firebase';

@Component({
    selector: 'SongsComponent',
    templateURL: 'app/songs/songs.html',
})
export class SongsComponent {
    public trackInfo: Array<any> = [];
    isLoading: boolean = false;

    constructor(private fs: FirebaseService) {
        fs.watchMusic().subscribe( (music: []any) => this.trackInfo = music );
    }

}
