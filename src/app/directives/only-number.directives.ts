import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[app-onlynumber]'
})

export class OnlyNumberDirective {

    constructor(private el: NgControl) { }

    @HostListener('input', ['$event.target.value'])
    onInput(value: string) {

        var patt = new RegExp(/^0*[0-9]\d*$/g);
        if (!patt.test(value) && value) {
            this.el.control.patchValue('0');
        }
    }
}