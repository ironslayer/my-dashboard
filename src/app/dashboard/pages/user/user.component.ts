import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  template:`
    <app-title [title]="titleLabel()" />

    @if (user()) {

      <section>
        <img 
        [srcset]="user()!.avatar "
        [alt]="user()!.first_name"
        >

        <div>
          <h3>
            {{ user()!.first_name }} {{ user()!.last_name }}
          </h3>
          <p>
            {{ user()!.email }}
          </p>
        </div>


      </section>

    }@else {
      <p>Cargando Información</p>
    }
  `,
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );



  // public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
    )
  )

  public titleLabel = computed( () => {
    if ( this.user() ) {
      return `Información del Usuario: ${this.user()!.first_name} ${this.user()!.last_name}`;
    }
    return 'Información del Usuario';
  });
  // constructor() {
  //   console.log(this.route.params.subscribe( params => {
  //     console.log({params});
  //   }))
  // }

}
