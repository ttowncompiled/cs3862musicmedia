import { Component } from 'angular2/core';
import { SongsComponent } from './songs/songs.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ SongsComponent ]
})
export class AppComponent {}
