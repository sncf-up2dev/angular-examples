import { Component, inject } from '@angular/core';
import { ClientsService, PostClientBody } from '../client.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
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
  `,
  styles: ``
})
export class PostComponent {

  clientService = inject(ClientsService)

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
