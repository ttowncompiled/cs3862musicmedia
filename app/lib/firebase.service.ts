import { Injectable } from 'angular2/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class FirebaseService {
  
  static MUSIC: string = 'songs';
  static VAL: string = 'value';
  
  dataRef: Firebase;

  constructor() {
    this.dataRef = new Firebase('https://musicmedia.firebaseIO.com');
  }

  public watchMusic(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.dataRef.child(FirebaseService.MUSIC).on(FirebaseService.VAL, (snapshot: FirebaseDataSnapshot) => {
        var val: any = snapshot.val();
        if (!val) {
          observer.next([]);
        }
        observer.next(Object.keys(val).map((key: string) => val[key]));
      });
    });
  }
}
