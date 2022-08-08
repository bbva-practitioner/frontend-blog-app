import { DateTime } from 'luxon';

export class BlogPostModel {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.date = DateTime.fromFormat(data.date, 'dd/MM/yyyy');
    this.content = data.content;
    this.categories = data.categories;
    this.highlighted = data.highlighted;
  }
}