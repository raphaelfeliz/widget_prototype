// Define a minimal, self-contained widget
class BlueWidget extends HTMLElement {
  constructor() {
    super()

    // Create a shadow root for full encapsulation
    const root = this.attachShadow({ mode: 'open' })

    // Build the content
    const wrapper = document.createElement('div')
    wrapper.textContent = 'Hello from Blue Widget'

    // Add scoped styles
    const style = document.createElement('style')
    style.textContent = `
      div {
        background: #1e90ff;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        font: 14px system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      }
    `

    // Attach both style and content to the shadow DOM
    root.append(style, wrapper)
  }
}

// Register the custom element
customElements.define('blue-widget', BlueWidget)
