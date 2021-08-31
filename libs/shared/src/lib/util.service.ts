import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  prefix = 'DEFAULT'

  constructor() {
    console.log('init');
  }

  prefixText(msg: string) {
    console.log('Getting prefix text');
    return `${this.prefix}-${msg}`;
  }

  setPrefix(prefix: string) {
    console.log('Setting prefix');
    this.prefix = prefix;
  }
}
