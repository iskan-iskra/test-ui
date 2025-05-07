import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    button {
      padding: 10px;
      background: #6200ea;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}
