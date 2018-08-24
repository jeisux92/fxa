import { Directive, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[fnFocus]'
})
export class FocusDirective implements AfterViewInit {

    private static elements: ElementRef[] = [];
    constructor(private el: ElementRef) { }

    ngAfterViewInit(): void {
        FocusDirective.elements.push(this.el);
    }


    @HostListener('window:keypress', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (this.el.nativeElement != event.target) {
            return;
        }
        if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
            this.nextInput();
        }
    }


    @HostListener('window:keydown', ['$event'])
    keyPressEvent(event: KeyboardEvent) {
        if (this.el.nativeElement != event.target) {
            return;
        }
        if (event.key == "Backspace") {
            FocusDirective.elements[FocusDirective.elements.indexOf(this.el)].nativeElement.focus();
            this.previousInput();

        } else if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
            return;
        } else {
            return false;
        }
    }

    private previousInput() {
        const index = FocusDirective.elements.indexOf(this.el);
        if (index <= 0) {
            return;
        }
        setTimeout(function () {
            FocusDirective.elements[index - 1].nativeElement.focus();
        }, 10);

    }

    private nextInput() {
        const index = FocusDirective.elements.indexOf(this.el);
        if (index >= (FocusDirective.elements.length - 1)) {
            return;
        }
        FocusDirective.elements[index + 1].nativeElement.focus();
    }

}
