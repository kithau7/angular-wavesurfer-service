import { Injectable } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import * as i0 from "@angular/core";
import * as i1 from "./angular-wavesurfer-service-global-media-control.service";
export class AngularWavesurferService {
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
            this.waves[this.thisuuid] = WaveSurfer.create({
                ...this.wsOptions,
                ...wavesurferOptions
            });
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
AngularWavesurferService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, deps: [{ token: i1.GlobalMediaControlService }], target: i0.ɵɵFactoryTarget.Injectable });
AngularWavesurferService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularWavesurferService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.GlobalMediaControlService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13YXZlc3VyZmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdhdmVzdXJmZXItc2VydmljZS9zcmMvbGliL2FuZ3VsYXItd2F2ZXN1cmZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPdkMsTUFBTSxPQUFPLHdCQUF3QjtJQVNuQyxZQUFtQixJQUErQjtRQUEvQixTQUFJLEdBQUosSUFBSSxDQUEyQjtRQUpsRCxhQUFRLEdBQVUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRDLFVBQUssR0FBUSxFQUFFLENBQUM7SUFJaEIsQ0FBQztJQUNELElBQUksQ0FBQyxRQUFnQixFQUFFLGlCQUFtRDtRQUN4RSxJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLGVBQWUsRUFBRSxhQUFhO2dCQUM5QixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxXQUFXLEVBQUUsQ0FBQztnQkFDZCxhQUFhLEVBQUUsZ0JBQWdCO2dCQUMvQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsY0FBYyxFQUFFLEdBQUc7Z0JBQ25CLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixNQUFNLEVBQUUsR0FBRztnQkFDWCxpQkFBaUIsRUFBRSxJQUFJO2FBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxHQUFHLElBQUksQ0FBQyxTQUFTO2dCQUNqQixHQUFHLGlCQUFpQjthQUNyQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUk7b0JBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTt3QkFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2xDO2lCQUNGO2dCQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxJQUFJO1FBQ1QsSUFBSTtZQUNGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkM7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7SUFDcEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLENBQUM7O3NIQXJFVSx3QkFBd0I7MEhBQXhCLHdCQUF3QixjQUZ2QixNQUFNOzRGQUVQLHdCQUF3QjtrQkFIcEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tICd3YXZlc3VyZmVyLmpzJztcbmltcG9ydCB7IEdsb2JhbE1lZGlhQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItd2F2ZXN1cmZlci1zZXJ2aWNlLWdsb2JhbC1tZWRpYS1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5ndWxhcldhdmVzdXJmZXJTZXJ2aWNlT3B0aW9ucyB9IGZyb20gJy4vYW5ndWxhci13YXZlc3VyZmVyLXNlcnZpY2Utb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJXYXZlc3VyZmVyU2VydmljZSB7XG4gIHdzT3B0aW9uczogYW55O1xuICB3YXZlc3VyZmVyT3B0aW9uczogQW5ndWxhcldhdmVzdXJmZXJTZXJ2aWNlT3B0aW9ucztcbiAgcHVibGljIHdhdmU6IFdhdmVTdXJmZXI7XG5cbiAgdGhpc3V1aWQ6IHN0cmluZz0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcblxuICB3YXZlczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGdtY3M6IEdsb2JhbE1lZGlhQ29udHJvbFNlcnZpY2UpIHtcblxuICB9XG4gIGxvYWQodHJhY2t1cmw6IHN0cmluZywgd2F2ZXN1cmZlck9wdGlvbnM/OiBBbmd1bGFyV2F2ZXN1cmZlclNlcnZpY2VPcHRpb25zKSB7XG4gICAgaWYgKHdhdmVzdXJmZXJPcHRpb25zICYmIHdhdmVzdXJmZXJPcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy50aGlzdXVpZCA9IHdhdmVzdXJmZXJPcHRpb25zLmNvbnRhaW5lcjtcbiAgICB9XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy53c09wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogYCMke3RoaXMudGhpc3V1aWR9YCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBjdXJzb3JDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LC45KScsXG4gICAgICAgIGN1cnNvcldpZHRoOiA1LFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxuICAgICAgICB3YXZlQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICAgIGF1dG9DZW50ZXI6IHRydWUsXG4gICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsUGFyZW50OiBmYWxzZSxcbiAgICAgICAgYmFja2VuZDogJ1dlYkF1ZGlvJyxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbWF4Q2FudmFzV2lkdGg6IDEwMCxcbiAgICAgICAgaGlkZVNjcm9sbGJhcjogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgIGNsb3NlQXVkaW9Db250ZXh0OiB0cnVlXG4gICAgICB9O1xuICAgICAgdGhpcy53YXZlc1t0aGlzLnRoaXN1dWlkXSA9IFdhdmVTdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgLi4udGhpcy53c09wdGlvbnMsXG4gICAgICAgIC4uLndhdmVzdXJmZXJPcHRpb25zXG4gICAgICB9KTtcbiAgICAgIHRoaXMud2F2ZXNbdGhpcy50aGlzdXVpZF0ubG9hZCh0cmFja3VybCk7XG4gICAgICB0aGlzLmdtY3MucGxheWJhY2tDb21tYW5kJC5zdWJzY3JpYmUoY21kID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy53YXZlc1t0aGlzLnRoaXN1dWlkXSAmJiB0aGlzLndhdmVzW3RoaXMudGhpc3V1aWRdLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICB0aGlzLndhdmVzW3RoaXMudGhpc3V1aWRdLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHBsYXkoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLndhdmVzW3RoaXMudGhpc3V1aWRdICYmIHRoaXMud2F2ZXNbdGhpcy50aGlzdXVpZF0uaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgdGhpcy5nbWNzLnN0b3BBbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ21jcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMud2F2ZXNbdGhpcy50aGlzdXVpZF0ucGxheVBhdXNlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBnZW5lcmF0ZVVVSUQoKSB7XG4gICAgdmFyIGZpcnN0UGFydCA9IChNYXRoLnJhbmRvbSgpICogNDY2NTYpIHwgMDtcbiAgICB2YXIgc2Vjb25kUGFydCA9IChNYXRoLnJhbmRvbSgpICogNDY2NTYpIHwgMDtcbiAgICB2YXIgZmlyc3RQYXJ0eCA9ICgnMDAwJyArIGZpcnN0UGFydC50b1N0cmluZygzNikpLnNsaWNlKC0zKTtcbiAgICB2YXIgc2Vjb25kUGFydHggPSAoJzAwMCcgKyBzZWNvbmRQYXJ0LnRvU3RyaW5nKDM2KSkuc2xpY2UoLTMpO1xuICAgIHJldHVybiAnd3MnICsgZmlyc3RQYXJ0eCArIHNlY29uZFBhcnR4O1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy53YXZlc1t0aGlzLnRoaXN1dWlkXS5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==