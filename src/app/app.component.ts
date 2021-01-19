import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LintDemo';

  ngOnInit(): void {
    const TITLE = this.title;

    var title = 'hey folks';

    var total = 30.2;

    var half = total / 2;

    if (TITLE == 'LintDemo') {
      console.log('Debugging');
    }
  }
}
