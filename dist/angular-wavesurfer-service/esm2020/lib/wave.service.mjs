import { Injectable } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import * as i0 from "@angular/core";
export class WaveService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2Uvc3JjL2xpYi93YXZlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSxlQUFlLENBQUM7O0FBTXZDLE1BQU0sT0FBTyxXQUFXO0lBR3RCO1FBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBeUI7UUFDOUIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O3lHQVRVLFdBQVc7NkdBQVgsV0FBVyxjQUZWLE1BQU07NEZBRVAsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tICd3YXZlc3VyZmVyLmpzJztcbmltcG9ydCB7IFdhdmVTdXJmZXJQYXJhbXMgfSBmcm9tICd3YXZlc3VyZmVyLmpzL3R5cGVzL3BhcmFtcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdhdmVTZXJ2aWNlIHtcbiAgd2F2ZTogV2F2ZVN1cmZlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmNsZWFyKCk7XG4gIH1cblxuICBjcmVhdGUob3B0aW9uczogV2F2ZVN1cmZlclBhcmFtcykge1xuICAgIHJldHVybiBXYXZlU3VyZmVyLmNyZWF0ZShvcHRpb25zKTtcbiAgfVxufVxuIl19