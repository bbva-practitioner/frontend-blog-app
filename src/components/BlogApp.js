import { LitElement, html, css } from 'lit';
import { BlogPostModel } from '../models/BlogPostModel.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

const posts = [
  {
    title: 'Creando nuestros componentes con LitElement',
    author: 'Franco Frizzo',
    date: '02/07/2022',
    content: 'Contenido del post…',
    categories: ['Desarrollo web', 'LitElement'],
    highlighted: true,
  },
  {
    title: 'Este es otro post en nuestro blog',
    author: 'Franco Frizzo',
    date: '01/07/2022',
    content: 'Lorem ipsum',
    categories: ['Desarrollo web', 'LitElement'],
    highlighted: false,
  },
].map(data => new BlogPostModel(data));

export class BlogApp extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--blog-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        ${posts.map(post => html`<blog-post .post=${post}></blog-post>`)}
      </main>

      <footer class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </footer>
    `;
  }
}

export default BlogApp;
