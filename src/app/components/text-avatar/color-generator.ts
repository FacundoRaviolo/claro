import { Injectable } from '@angular/core';

@Injectable()
export class ColorGenerator {

  constructor() {
    console.log('created');
  }

  public getColor(str: string): string {
    return '#FAFAFA';
  }

  private toNumber(str: string): number {
    let h = 0;

    for (let i = 0; i < str.length; i++) {
      h = 31 * h + str.charCodeAt(i);
      h |= 0; // Convert to 32bit integer
    }

    return h;
  }
}

