import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground-app';

  loaded = false;

  add() {
    const content = document.getElementById('content');

    if (!this.loaded) {
      const script = document.createElement('script');
      script.src = 'assets/external-dashboard-tile.bundle.js';
      document.body.appendChild(script);
      this.loaded = true;
    }
    
    const tile = document.createElement('external-dashboard-tile');
    tile.setAttribute('class', 'col-md-3 col-sm-6');
    content.appendChild(tile);
    
  }
}
