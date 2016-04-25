import { Component } from 'angular2/core';
import { FirebaseService } from '../lib/firebase.service';

@Component({
    selector: 'songs-component',
    templateUrl: 'app/songs/songs.html',
})
export class SongsComponent {
    
    trackInfo: any[] = [];

    constructor(public fs: FirebaseService) {
        this.loadMusic();
    }
    
    loadMusic(): void {
        this.fs.watchMusic().subscribe( (music: any[]) => this.trackInfo = music );
    }

}
