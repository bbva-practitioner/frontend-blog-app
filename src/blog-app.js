import { BlogApp } from './components/BlogApp.js';
import { BlogPost } from './components/BlogPost.js';
import { BlogSidebar } from './components/BlogSidebar.js';
import { LoginForm } from './components/LoginForm.js';

customElements.define('blog-app', BlogApp);
customElements.define('blog-post', BlogPost);
customElements.define('blog-sidebar', BlogSidebar);
customElements.define('login-form', LoginForm);
