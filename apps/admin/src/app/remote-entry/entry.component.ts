import { Component } from '@angular/core';

@Component({
  selector: 'micro-front-end-st-admin-entry',
  template: `<div class="remote-entry">
    <h2>admin's Remote Entry Component</h2>
    <h3>Willian Coelho da Cunha</h3>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
