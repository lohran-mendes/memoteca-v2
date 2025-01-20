import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CreateThoughtComponent } from "./components/thoughts/create-thought/create-thought.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CreateThoughtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
