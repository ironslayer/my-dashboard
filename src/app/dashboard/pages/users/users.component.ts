import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-list-users',
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public usersServices = inject(UsersService);


}
