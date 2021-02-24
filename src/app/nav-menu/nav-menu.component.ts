import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  public currentUser: User;

  @Input() public show = false;
  @Output() public showChange = new EventEmitter<boolean>();

  constructor(  private router: Router,
                private authService: AuthService,
             ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
