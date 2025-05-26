import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );
  private apiKey  = 'reqres-free-v1'; 

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );


  constructor() {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    this.http.get<UsersResponse>('https://reqres.in/api/users', { headers })
    .pipe( delay(1500) )
    .subscribe( rest => {
      this.#state.set({
        loading: false,
        users: rest.data,
      })
    });
  }

  getUserById( id: string ){
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`, { headers })
    .pipe( delay(1500),
    map( resp => resp.data ));
    
  }
}
