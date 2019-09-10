export interface User {
  nick: string;
  subnick?: string; // ? make optional
  age: number;
  email: string;
  friend: boolean;
  uid: any;
}
