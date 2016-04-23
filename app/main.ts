import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { FirebaseService } from './lib/firebase.service';

bootstrap(AppComponent, [
    FirebaseService
  ]);
