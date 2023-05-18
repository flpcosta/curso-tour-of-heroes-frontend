import { Component } from '@angular/core';

// Exemplo de escrever o HTML (template) e Estilo dentro do próprio Component
@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Page Not Found!</mat-card-title>
      <mat-card-content>
        Nem mesmo com visão Raio-X!
      </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Take me Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `
  ]
})

export class PageNotFoundComponent {

}
