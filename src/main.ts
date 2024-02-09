import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HtmldomComponent } from './htmldom/htmldom.component';
import { StyleEncapsulationModule } from './style-encapsulation/style-encapsulation.module';
import { AppModule } from './ng-deep/app.module';
import { HostParentComponent } from './host/host-parent.component';
import { TrackByComponent } from './track-by/track-by.component';

bootstrapApplication(TrackByComponent).catch((err) => console.error(err));
//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
