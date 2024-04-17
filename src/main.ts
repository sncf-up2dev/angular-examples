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
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { ReactiveCounterComponent } from './observables/reactive-counter/reactive-counter.component';
import { ClientComponent } from './http-client/client.component';
import { jsonServerLinkParser } from './http-client/page/json-server-link-parser';
import { PAGE_RESPONSE_PARSER_TOKEN } from './http-client/page/page.service';
import { InterceptorModule } from './interceptors/module/interceptor.module';
import { InterceptorStandaloneComponent } from './interceptors/standalone/interceptor-standalone.component';
import { interceptorFn } from './interceptors/standalone/interceptor-function';

bootstrapApplication(InterceptorStandaloneComponent, {
    providers: [
        provideHttpClient(
            withInterceptors([
                interceptorFn,
            ])
        )
    ]
}).catch((err) => console.error(err));

//platformBrowserDynamic().bootstrapModule(InterceptorModule).catch(err => console.error(err));
