import { Component } from '@angular/core';
import { BuzzComponent } from "../../components/buzz/buzz.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BuzzComponent]
})
export class HomeComponent {

}
