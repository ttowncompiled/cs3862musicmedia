import { Component } from 'angular2/core';
import { SongsComponent } from './songs/songs.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
<<<<<<< HEAD
    directives: []
=======
    directives: [ SongsComponent ]
>>>>>>> 359184d6b9cf01ed49d1409c2a787860f3b6748e
})
export class AppComponent {}
