import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  get gettoken(): string {
    return this.token;
  }
  constructor(private apiService: ApiService) { }

  async signup(username, password): Promise<any> {
    return await this.apiService.post('auth/signup', {username, password});
  }

  async login(username, password): Promise<any> {
     const response = await this.apiService.post('auth/login', {username, password});
     this.token = response.token;
  }
}
