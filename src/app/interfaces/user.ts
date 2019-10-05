export interface User {
  nick: string;
  subnick?: string; // ? make optional
  status: string;
  age: number;
  email: string;
  friend: boolean;
  uid: any;
}
