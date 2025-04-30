import { Component, Input } from '@angular/core';
import { AngularWavesurferService } from './angular-wavesurfer.service';
import * as i0 from "@angular/core";
import * as i1 from "./angular-wavesurfer.service";
export class AngularWavesurferServiceComponent {
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
AngularWavesurferServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceComponent, deps: [{ token: i1.AngularWavesurferService }], target: i0.ɵɵFactoryTarget.Component });
AngularWavesurferServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AngularWavesurferServiceComponent, selector: "wavesurfer", inputs: { trackurl: "trackurl", wavesurferOptions: "wavesurferOptions" }, providers: [AngularWavesurferService], ngImport: i0, template: "<div (click)=\"ws.play()\" [id]=\"ws.thisuuid\"></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferServiceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'wavesurfer', providers: [AngularWavesurferService], template: "<div (click)=\"ws.play()\" [id]=\"ws.thisuuid\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AngularWavesurferService }]; }, propDecorators: { trackurl: [{
                type: Input
            }], wavesurferOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2Uvc3JjL2xpYi9hbmd1bGFyLXdhdmVzdXJmZXItc2VydmljZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdhdmVzdXJmZXItc2VydmljZS9zcmMvbGliL2FuZ3VsYXItd2F2ZXN1cmZlci1zZXJ2aWNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBU3hFLE1BQU0sT0FBTyxpQ0FBaUM7SUFJNUMsWUFBbUIsRUFBNEI7UUFBNUIsT0FBRSxHQUFGLEVBQUUsQ0FBMEI7SUFBRyxDQUFDO0lBRW5ELGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDOzsrSEFaVSxpQ0FBaUM7bUhBQWpDLGlDQUFpQywrR0FGakMsQ0FBQyx3QkFBd0IsQ0FBQywwQkNSdkMsMERBQ0E7NEZEU2EsaUNBQWlDO2tCQU43QyxTQUFTOytCQUNFLFlBQVksYUFHWCxDQUFDLHdCQUF3QixDQUFDOytHQUc1QixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhcldhdmVzdXJmZXJTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXdhdmVzdXJmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyV2F2ZXN1cmZlclNlcnZpY2VPcHRpb25zIH0gZnJvbSAnLi9hbmd1bGFyLXdhdmVzdXJmZXItc2VydmljZS1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2F2ZXN1cmZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLXdhdmVzdXJmZXItc2VydmljZS5jb21wb25lbnQuaHRtbCcsXG5cbiAgcHJvdmlkZXJzOiBbQW5ndWxhcldhdmVzdXJmZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyV2F2ZXN1cmZlclNlcnZpY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0cmFja3VybDogc3RyaW5nO1xuICBASW5wdXQoKSB3YXZlc3VyZmVyT3B0aW9ucz86IEFuZ3VsYXJXYXZlc3VyZmVyU2VydmljZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHdzOiBBbmd1bGFyV2F2ZXN1cmZlclNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMud3MubG9hZCh0aGlzLnRyYWNrdXJsLCB0aGlzLndhdmVzdXJmZXJPcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMud3MuZGVzdHJveSgpO1xuICB9XG59XG4iLCI8ZGl2IChjbGljayk9XCJ3cy5wbGF5KClcIiBbaWRdPVwid3MudGhpc3V1aWRcIj48L2Rpdj5cbiJdfQ==