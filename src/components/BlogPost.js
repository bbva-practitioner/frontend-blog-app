import { html, LitElement } from 'lit';

import { BlogPostModel } from '../models/BlogPostModel.js';

export class BlogPost extends LitElement {
  static get properties() {
    return {
      post: { type: BlogPostModel },
    };
  }

  render() {
    return html`
      <h3>${this.post.title}</h3>
      <p>por ${this.post.author}</p>
      <p>publicado el ${this.post.date.toFormat("dd' de 'MMMM")}</p>

      ${this.post.highlighted ? html`<span>Post destacado</span>` : ''}

      <h4>Categorías</h4>
      <ul>
        ${this.post.categories.map(category => html`<li>${category}</li>`)}
      </ul>

      <p>${this.post.content}</p>
    `;
  }
}
