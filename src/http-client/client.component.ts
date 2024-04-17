import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService, PostClientBody } from './client.service';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { PageComponent } from './page/page.component';
import { PostComponent } from './post/post.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../interceptors/module/interceptor.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, PageComponent, PostComponent],
    template: `
    <app-post />
    <app-page />
  `,
    styles: ``,
})
export class ClientComponent {

}
