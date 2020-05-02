import {SondageDate} from './sondage-date';

export interface DateDetails {
  date: string;
  contientPauseDej: boolean;
  sondages: string[];
}

export class DateReunion {
  constructor(private date: string, private contientPauseDej: boolean, private sondages: SondageDate []) {
  }
  getDate(): string {
    return this.date;
  }

  getContientPauseDej(): boolean {
    return this.contientPauseDej;
  }

  getSondages(): SondageDate[] {
    return this.sondages;
  }
}
