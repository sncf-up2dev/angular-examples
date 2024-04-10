import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService, PostClientBody } from './client.service';
import { map, tap } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="border">
        Ajouter un client :
        <div>
            Firstname : <input #firstName />
        </div>
        <div>
            Lastname : <input #lastName />
        </div>
        <div>
            Age : <input type="number" #age />
        </div>
        <button (click)="post(firstName.value, lastName.value, age.value)">Post</button> 
    </div>

    <div class="border">
        Liste des clients : 
        <div *ngFor="let client of listClients$ | async">{{client.id}} {{client.firstname}}</div>
    </div>
  `,
    styles: ``
})
export class PostComponent {

    clientService = inject(ClientsService)

    // Ici getClients() retourne une HttpResponse
    listClients$ = this.clientService.getClients().pipe(
        // Avec tap je peux faire un log sans perturber les retours l'observable
        tap(console.log),
        // Convertion du HttpResponse en Client[]
        map(response => response.body)
    )

    post(firstName: string, lastName: string, age: string) {
        let client: PostClientBody = {
            firstname: firstName,
            lastname: lastName,
            age: Number(age)
        }

        this.clientService.postClient(client).subscribe(
            console.log
        )
    }

}
