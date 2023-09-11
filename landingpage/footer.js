/**
 * This file contains the Footer class which represents the footer component of the landing page.
 */
export class Footer {
  /**
   * Render the footer component.
   */
  render() {
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = '<p>© 2021 Education Landing Page. All rights reserved.</p>';
    document.body.appendChild(footerElement);
  }
}