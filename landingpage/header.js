/**
 * This file contains the Header class which represents the header component of the landing page.
 */
export class Header {
  /**
   * Render the header component.
   */
  render() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = '<h1>Welcome to Education Landing Page</h1>';
    document.body.appendChild(headerElement);
  }
}