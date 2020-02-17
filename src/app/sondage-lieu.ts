export class SondageLieu {
  constructor(private lien: string, private createur: string, private participants: string[], private lieux: string[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): string {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getLieux(): string[] {
    return this.lieux;
  }
}
