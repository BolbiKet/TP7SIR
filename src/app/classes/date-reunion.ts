import {SondageDate} from './sondage-date';

export interface DateDetails {
  date: string;
  contientPauseDej: boolean;
}

export class DateReunion {
  constructor(private date: string, private contientPauseDej: boolean) {
  }
  getDate(): string {
    return this.date;
  }

  getContientPauseDej(): boolean {
    return this.contientPauseDej;
  }
}
