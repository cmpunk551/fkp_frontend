import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface IUser {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public users: IUser[];
  public isLoaded = false;
  public loginForm: FormGroup;
  public isLoading = false;
  public isFormSubmitted = false;
  public error = '';
  public isAddUserVisible = false;


  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    @Inject('BASE_URL') public baseUrl: string) { }

  public async ngOnInit() {
    await this.getUsers();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  public get form() {
    return this.loginForm.controls;
  }

  public async getUsers() {
    await this.http.get<IUser[]>(environment.apiUrl + '/users').subscribe(response => {
      this.users = response;
      this.isLoaded = true;
    });
  }

  public async onSubmit() {
    this.isFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const formData = {
      userName: this.form.username.value,
      password: this.form.password.value,
      phoneNumber: this.form.phone.value,
      email: this.form.email.value,
    };
    await this.http.post<IUser>(environment.apiUrl + '/users', formData).subscribe((response => {
      this.users.push(response);
      this.isLoading = false;
    }));
  }
  public async deleteUser(user: IUser) {
    await this.http.delete<IUser>(environment.apiUrl + '/users/' + user.id ).subscribe(() => {
       this.getUsers();
    });
  }
}
