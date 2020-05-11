export interface AllergiesDetails {
  id: number;
  allergie: string;
}


export class Allergie {
  constructor(private allergie: string) {
  }
  getAllergie(): string {
    return this.allergie;
  }
}
