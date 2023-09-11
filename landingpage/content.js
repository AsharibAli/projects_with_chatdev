/**
 * This file contains the Content class which represents the main content component of the landing page.
 */
export class Content {
  /**
   * Render the content component.
   */
  render() {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = '<p>This is the main content of the landing page.</p>';
    document.body.appendChild(contentElement);
  }
}