import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import type { CustomElementInput } from "@posit-dev/shiny-bindings-core";
import { makeInputBinding } from "@posit-dev/shiny-bindings-core";

/**
 * An example JSME widget element.
 *
 * @csspart button - The button that interacts with the JSME widget
 * @csspart display - The span containing the JSME widget's output
 */
export class JsmeWidgetEl extends LitElement implements CustomElementInput<string> {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      width: fit-content;
    }
  `;

  @property({ type: String })
  jsmeWidgetValue = "";

  @property({ type: String }) // Add this line
  value = ""; // Add this line

  /*
   * The callback function that is called when the value of the input changes.
   * This alerts Shiny that the value has changed and it should check for the
   * latest value. This is set by the input binding.
   */
  notifyBindingOfChange: (x?: boolean) => void = () => {};

  /**
   * Function to run when the JSME widget's button is clicked.
   */
  onJsmeWidgetInteraction() {
    // Replace this with your JSME widget's logic
    this.jsmeWidgetValue = "Your JSME widget's output";
    this.notifyBindingOfChange(true);
  }

  override render() {
    return html`
      <button @click=${this.onJsmeWidgetInteraction} part="button">Interact with JSME widget</button>
      <span part="display"> JSME Widget Output: ${this.jsmeWidgetValue} </span>
      <slot></slot>
    `;
  }
}

// Setup the input binding
makeInputBinding("jsme-widget", JsmeWidgetEl, {
  registerElement: true,
});