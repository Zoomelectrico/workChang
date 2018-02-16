export class User {
  constructor (
    public ID: number,
    public nationalID: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
    public password: string,
    public addressLine1: string,
    public addressLine2: string,
    public city: string,
    public type: number,
  ) {
  }
}
