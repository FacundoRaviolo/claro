import { Input, SimpleChanges, Component, ViewChild, OnChanges } from '@angular/core';
import { ColorGenerator } from './color-generator';

@Component({
  selector: 'text-avatar',
  template: `
    <div class="u-text-avatar" [ngStyle]="styles">{{ textLbl }}</div>
  `,
  styleUrls: ['./text-avatar.component.scss']
})
export class TextAvatarComponent implements OnChanges {
  @Input() text: string;
  @Input() color: string;
  @Input() textColor: string;

  public textLbl = '';
  public styles = {
    'background-color': '#fff',
    color: '#D62826',
    'font-size': '30px',
    'font-weight': 'bold'
  };

  constructor(private colorGenerator: ColorGenerator) {}

  ngOnChanges(changes: SimpleChanges) {
    const text = changes.text ? changes.text.currentValue : null;
    const color = changes.color ? changes.color.currentValue : null;
    const textColor = changes.textColor ? changes.textColor.currentValue : this.styles.color;

    this.textLbl = text;

    this.styles = {...this.styles, 'background-color': this.backgroundColorHexString(color, text), color: textColor};
  }

  private backgroundColorHexString(color: string, text: string): string {
    return color || this.colorGenerator.getColor(text);
  }
}
