import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class GlobalMediaControlService {
    playbackCommandSrc: BehaviorSubject<string>;
    playbackCommand$: import("rxjs").Observable<string>;
    constructor();
    stopAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalMediaControlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalMediaControlService>;
}
