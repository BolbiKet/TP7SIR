export interface PreferencesDetails {
  id:number;
  prefAlim: string;
}


export class PrefAlim {
  constructor(private prefAlim: string) {
  }
  public getPrefAlim(): string{
    return this.prefAlim;
  }
}
