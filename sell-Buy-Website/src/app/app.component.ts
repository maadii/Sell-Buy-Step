import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingPageComponent } from "./listing-page/listing-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListingPageComponent]
})
export class AppComponent {
  title = 'sell-Buy-Website';
}
