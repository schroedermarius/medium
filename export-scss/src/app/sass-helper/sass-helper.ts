/**
 * SassHelperComponent helps to export SCSS-Variables
 * @author Marius Schröder
 * 2019-08-07
 */

import { Component } from '@angular/core';

export const PREFIX = '--';

@Component({
    selector: 'app-sass-helper',
    template: '<div></div>'
})
export class SassHelperComponent {

    constructor() { }

    /**
     * Read the custom property of body section with given name.
     * @param name The property name.
     * @returns The property value.
     */
    readProperty(name: string): string {
        const bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }
}
