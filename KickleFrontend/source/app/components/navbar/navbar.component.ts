import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'navbar'
})
export class NavbarDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('navbar', elementRef, injector);
  }
}