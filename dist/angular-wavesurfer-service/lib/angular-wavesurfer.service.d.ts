import WaveSurfer from 'wavesurfer.js';
import { GlobalMediaControlService } from './angular-wavesurfer-service-global-media-control.service';
import { AngularWavesurferServiceOptions } from './angular-wavesurfer-service-options';
import * as i0 from "@angular/core";
export declare class AngularWavesurferService {
    gmcs: GlobalMediaControlService;
    wsOptions: any;
    wavesurferOptions: AngularWavesurferServiceOptions;
    wave: WaveSurfer;
    thisuuid: string;
    waves: any;
    constructor(gmcs: GlobalMediaControlService);
    load(trackurl: string, wavesurferOptions?: AngularWavesurferServiceOptions): void;
    play(): void;
    generateUUID(): string;
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWavesurferService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AngularWavesurferService>;
}
