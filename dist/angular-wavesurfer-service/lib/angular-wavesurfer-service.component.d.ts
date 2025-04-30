import { AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from './angular-wavesurfer.service';
import { AngularWavesurferServiceOptions } from './angular-wavesurfer-service-options';
import * as i0 from "@angular/core";
export declare class AngularWavesurferServiceComponent implements AfterViewInit, OnDestroy {
    ws: AngularWavesurferService;
    trackurl: string;
    wavesurferOptions?: AngularWavesurferServiceOptions;
    constructor(ws: AngularWavesurferService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWavesurferServiceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWavesurferServiceComponent, "wavesurfer", never, { "trackurl": "trackurl"; "wavesurferOptions": "wavesurferOptions"; }, {}, never, never, false, never>;
}
