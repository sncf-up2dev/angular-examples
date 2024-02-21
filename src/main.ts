import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HtmldomComponent } from './htmldom/htmldom.component';
import { StyleEncapsulationModule } from './style-encapsulation/style-encapsulation.module';
import { AppModule } from './ng-deep/app.module';
import { HostParentComponent } from './host/host-parent.component';
import { TrackByComponent } from './track-by/track-by.component';
import { HooksInitComponent } from './hooks/hooks-init.component';
import { HooksMainComponent } from './hooks/hooks.component';
import { DetectionRootComponent } from './detection-cycle/detection-root.component';
import { ObservableComponent } from './rxjs/observable.component';

bootstrapApplication(ObservableComponent).catch((err) => console.error(err));
//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
