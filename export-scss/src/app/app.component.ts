import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'export-scss';
  // @ViewChild(SassHelperComponent)
  // private sassHelper: SassHelperComponent;

  ngOnInit(): void {
    console.log(this.readProperty('myCustomVariable'));
  }


  /**
   * Read the custom property of body section with given name.
   * @param name The property name.
   * @returns The property value.
   */
  readProperty(name: string): string {
    const bodyStyles = window.getComputedStyle(document.body);
    return bodyStyles.getPropertyValue('--' + name);
  }
}
