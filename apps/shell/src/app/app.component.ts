import { Component, OnInit } from '@angular/core';
import { UtilService } from '@nx-microfrontends/shared';

@Component({
  selector: 'nx-microfrontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My awesome title';

  constructor(private utilService: UtilService) {
    this.utilService.setPrefix('SHELLPREFIX');

  }

  ngOnInit() {
    this.title = this.utilService.prefixText(this.title);
  }
}
