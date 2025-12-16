import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  animations: [
    trigger('routeFadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('180ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class App {
  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'] || outlet?.activatedRoute?.snapshot?.url?.join('/') || 'root';
  }
}
