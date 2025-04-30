import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlobalMediaControlService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2UtZ2xvYmFsLW1lZGlhLWNvbnRyb2wuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd2F2ZXN1cmZlci1zZXJ2aWNlL3NyYy9saWIvYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2UtZ2xvYmFsLW1lZGlhLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFITyx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxNQUFNLENBQUMsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt1SEFWVSx5QkFBeUI7MkhBQXpCLHlCQUF5QixjQUZ4QixNQUFNOzRGQUVQLHlCQUF5QjtrQkFIckMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVkaWFDb250cm9sU2VydmljZSB7XG4gIHB1YmxpYyBwbGF5YmFja0NvbW1hbmRTcmMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJ3N0b3AnKTtcbiAgcHVibGljIHBsYXliYWNrQ29tbWFuZCQgPSB0aGlzLnBsYXliYWNrQ29tbWFuZFNyYy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3BBbGwoKTtcbiAgfVxuXG4gIHN0b3BBbGwoKSB7XG4gICAgdGhpcy5wbGF5YmFja0NvbW1hbmRTcmMubmV4dCgnc3RvcCcpO1xuICB9XG59XG4iXX0=