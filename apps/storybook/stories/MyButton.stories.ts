import { html, render } from 'lit-html';
// import "../../../packages/ui-lib/src/components/MyButton";
import 'ui-lib/src/components/MyButton';

export default {
  title: 'UI/MyButton',
};

export const Default = () => {
  const container = document.createElement('div');
  render(html`<my-button>Click me</my-button>`, container);
  return container; // ← ✔ это DOM-узел
};
