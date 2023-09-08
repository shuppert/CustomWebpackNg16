import { Component } from '@angular/core';
import showdown from 'showdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomWebpackNg16';
  readmeContent = '';
  ts = '';
  html = '';
  name = 'app';

  private readonly converter: showdown.Converter;

  constructor() {
    this.converter = new showdown.Converter({
      tables: true,
      strikethrough: true
    });
  }

  onViewMD(): void {
    const README = require('./README.md?raw');
    this.readmeContent = this.converter.makeHtml(README);
    this.ts = '';
    this.html = '';
  }

  onViewSource(): void {
    import(`../${this.name}/${this.name}.component.html?raw`).then((res) => {
      this.html = res.default;
      this.readmeContent = '';
      this.ts = '';
    })
  }

  onViewTSSource(): void {
    import(`!!../${this.name}/${this.name}.component.ts?raw`).then((res: any) => {
      this.ts = res.default;
      this.readmeContent = '';
      this.html = '';
    });
  }
}
