import { Component, OnInit } from '@angular/core';
import { UtilService } from '@nx-microfrontends/shared';

@Component({
  selector: 'nx-microfrontends-mfe1-entry',
  template: `<div class="remote-entry">
    <h2>{{text}}</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent implements OnInit {
  text = 'mfe1\'s Remote Entry Component'

  constructor(private utilService: UtilService) {

  }

  ngOnInit() {
    this.text = this.utilService.prefixText(this.text);
  }
}
