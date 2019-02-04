export class User {


  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  name: string;
  email: string;
  password: string;
}
