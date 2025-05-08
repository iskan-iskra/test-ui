import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  // Пропс для выбора типа кнопки: primary, secondary
  @property({ type: String }) variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    button {
      padding: 10px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    /* Стиль для primary кнопки */
    .primary {
      background: #6200ea;
      color: white;
    }

    /* Стиль для secondary кнопки */
    .secondary {
      background: #03dac6;
      color: white;
    }

    /* Стиль для tertiary кнопки */
    .tertiary {
      background: transparent;
      color: #6200ea;
      border: 2px solid #6200ea;
    }
  `;

  render() {
    return html`
      <button class="${this.variant}">
        <slot></slot>
      </button>
    `;
  }
}
