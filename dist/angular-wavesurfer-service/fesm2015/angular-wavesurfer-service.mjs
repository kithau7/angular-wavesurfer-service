import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { BehaviorSubject } from 'rxjs';

class WaveService {
    constructor() {
        console.clear();
    }
    create(options) {
        return WaveSurfer.create(options);
    }
}
WaveService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WaveService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
WaveService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WaveService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WaveService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class GlobalMediaControlService {
    constructor() {
        this.playbackCommandSrc = new BehaviorSubject('stop');
        this.playbackCommand$ = this.playbackCommandSrc.asObservable();
        this.stopAll();
    }
    stopAll() {
        this.playbackCommandSrc.next('stop');
    }
}
GlobalMediaControlService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GlobalMediaControlService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GlobalMediaControlService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GlobalMediaControlService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GlobalMediaControlService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AngularWavesurferService {
    constructor(gmcs) {
        this.gmcs = gmcs;
        this.thisuuid = this.generateUUID();
        this.waves = {};
    }
    load(trackurl, wavesurferOptions) {
        if (wavesurferOptions && wavesurferOptions.container) {
            this.thisuuid = wavesurferOptions.container;
        }
        Promise.resolve(null).then(() => {
            this.wsOptions = {
                container: `#${this.thisuuid}`,
                backgroundColor: 'transparent',
                cursorColor: 'rgba(0,255,255,.9)',
                cursorWidth: 5,
                progressColor: 'rgba(0,0,0,.9)',
                waveColor: 'rgba(0,0,0,.5)',
                autoCenter: true,
                normalize: true,
                scrollParent: false,
                backend: 'WebAudio',
                responsive: true,
                maxCanvasWidth: 100,
                hideScrollbar: true,
                height: 100,
                closeAudioContext: true
            };
            this.waves[this.thisuuid] = WaveSurfer.create(Object.assign(Object.assign({}, this.wsOptions), wavesurferOptions));
            this.waves[this.thisuuid].load(trackurl);
            this.gmcs.playbackCommand$.subscribe(cmd => {
                try {
                    if (this.waves[this.thisuuid] && this.waves[this.thisuuid].isPlaying()) {
                        this.waves[this.thisuuid].stop();
                    }
                }
                catch (error) { }
            });
        });
    }
    play() {
        try {
            if (this.waves[this.thisuuid] && this.waves[this.thisuuid].isPlaying()) {
                this.gmcs.stopAll();
            }
            else {
                this.gmcs.stopAll();
                this.waves[this.thisuuid].playPause();
            }
        }
        catch (error) { }
    }
    generateUUID() {
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        var firstPartx = ('000' + firstPart.toString(36)).slice(-3);
        var secondPartx = ('000' + secondPart.toString(36)).slice(-3);
        return 'ws' + firstPartx + secondPartx;
    }
    destroy() {
        this.waves[this.thisuuid].destroy();
    }
}
AngularWavesurferService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, deps: [{ token: GlobalMediaControlService }], target: i0.ɵɵFactoryTarget.Injectable });
AngularWavesurferService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: GlobalMediaControlService }]; } });

class AngularWavesurferServiceComponent {
    constructor(ws) {
        this.ws = ws;
    }
    ngAfterViewInit() {
        this.ws.load(this.trackurl, this.wavesurferOptions);
    }
    ngOnDestroy() {
        this.ws.destroy();
    }
}
AngularWavesurferServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceComponent, deps: [{ token: AngularWavesurferService }], target: i0.ɵɵFactoryTarget.Component });
AngularWavesurferServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AngularWavesurferServiceComponent, selector: "wavesurfer", inputs: { trackurl: "trackurl", wavesurferOptions: "wavesurferOptions" }, providers: [AngularWavesurferService], ngImport: i0, template: "<div (click)=\"ws.play()\" [id]=\"ws.thisuuid\"></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'wavesurfer', providers: [AngularWavesurferService], template: "<div (click)=\"ws.play()\" [id]=\"ws.thisuuid\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: AngularWavesurferService }]; }, propDecorators: { trackurl: [{
                type: Input
            }], wavesurferOptions: [{
                type: Input
            }] } });

class AngularWavesurferServiceModule {
}
AngularWavesurferServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularWavesurferServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceModule, declarations: [AngularWavesurferServiceComponent], exports: [AngularWavesurferServiceComponent] });
AngularWavesurferServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularWavesurferServiceComponent
                    ],
                    imports: [],
                    exports: [
                        AngularWavesurferServiceComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-wavesurfer-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWavesurferService, AngularWavesurferServiceComponent, AngularWavesurferServiceModule, GlobalMediaControlService, WaveService };
//# sourceMappingURL=angular-wavesurfer-service.mjs.map
