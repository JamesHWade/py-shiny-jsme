import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import type { CustomElementInput } from "@posit-dev/shiny-bindings-core";
import { makeInputBinding } from "@posit-dev/shiny-bindings-core";
import { JSApplet } from 'jsme-editor'; 

/**
 * An example JSME widget element.
 *
 * @csspart button - The button that interacts with the JSME widget (Removed as we no longer use a button)
 * @csspart display - The span containing the JSME widget's output (Not applicable directly)
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

  @property({ type: String }) 
  value = ""; 

  /*
   * The callback function that is called when the value of the input changes.
   * This alerts Shiny that the value has changed and it should check for the
   * latest value. This is set by the input binding.
   */
  notifyBindingOfChange: (x?: boolean) => void = () => {};

  // Potentially adjust dimensions if needed
  private static DEFAULT_WIDTH = "380px";  
  private static DEFAULT_HEIGHT = "340px";

  private jsmeApplet: any; 

  override connectedCallback() {
     super.connectedCallback();
     this.initializeJsme();
  }

  private initializeJsme() {
    // Ensure a container is created in the shadow DOM
    const jsmeContainer = document.createElement('div'); 
    jsmeContainer.id = 'jsme_container';
    this.shadowRoot?.appendChild(jsmeContainer); 

    // Assuming JSME library is available globally as `JSApplet`
    if (typeof JSApplet !== 'undefined') { 
       this.jsmeApplet = new JSApplet.JSME('jsme_container', 
                                             JsmeWidgetEl.DEFAULT_WIDTH, 
                                             JsmeWidgetEl.DEFAULT_HEIGHT);
    } else { 
       console.error("JSME Library not found. Please check how it's loaded.");
    }
  }
}

// Setup the input binding
makeInputBinding("jsme-widget", JsmeWidgetEl, {
  registerElement: true,
});
;

