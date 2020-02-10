export class Sondage {
  constructor(private lien: string, private createur: string, private participants: string[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): string {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
}
