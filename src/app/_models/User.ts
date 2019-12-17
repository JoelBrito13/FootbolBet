export class User {
  id: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  balance: number;

  constructor(  id: string, username: string, is_superuser?: boolean, first_name?: string, last_name?: string,  email?: string, balance?: number) {
    this.id = id;
    this.is_superuser = is_superuser || false;
    this.username = username;
    this.first_name = first_name || null;
    this.last_name = last_name || null;
    this.email = email || null;
    this.balance = balance || 0;
  }

}

