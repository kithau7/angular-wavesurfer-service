import WaveSurfer from 'wavesurfer.js';
import { WaveSurferParams } from 'wavesurfer.js/types/params';
import * as i0 from "@angular/core";
export declare class WaveService {
    wave: WaveSurfer;
    constructor();
    create(options: WaveSurferParams): WaveSurfer;
    static ɵfac: i0.ɵɵFactoryDeclaration<WaveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WaveService>;
}
