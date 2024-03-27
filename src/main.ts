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
import { ObservableComponent } from './observables/observable.component';
import { HttpTypeComponent } from './observables/http-client-type/http-type.component';
import { provideHttpClient } from '@angular/common/http';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { ReactiveCounterComponent } from './observables/reactive-counter/reactive-counter.component';

bootstrapApplication(ReactiveCounterComponent, {
    providers: [
        provideHttpClient()
    ]
}).catch((err) => console.error(err));
//platformBrowserDynamic().bootstrapModule(AppModuReactiveCounterServicele).catch(err => console.error(err));
