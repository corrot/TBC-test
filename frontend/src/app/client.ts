export class Client {
  id: number;
  firstName: string;
  lastName: string;
  sex: Sex;
  nationalId: number;
  mobile: number;
  address: string;
  billingAddress: string;
  image: string;
}

export type Sex = 'Male' | 'Female';
