System.register(['angular2/core', './lib/firebase'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_1;
    var SongsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_1_1) {
                firebase_1 = firebase_1_1;
            }],
        execute: function() {
            SongsComponent = (function () {
                function SongsComponent(fs) {
                    var _this = this;
                    this.fs = fs;
                    this.trackInfo = [];
                    this.isLoading = false;
                    fs.watchMusic().subscribe(function (music) {
                        if (music === void 0) { music = any; }
                        return _this.trackInfo = music;
                    });
                }
                SongsComponent = __decorate([
                    core_1.Component({
                        selector: 'SongsComponent',
                        templateURL: 'app/songs/songs.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof firebase_1.FirebaseService !== 'undefined' && firebase_1.FirebaseService) === 'function' && _a) || Object])
                ], SongsComponent);
                return SongsComponent;
                var _a;
            }());
            exports_1("SongsComponent", SongsComponent);
        }
    }
});
//# sourceMappingURL=songs.component.js.map