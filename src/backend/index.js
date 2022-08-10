export async function getPosts() {
  const response = await fetch(
    'https://practitioner-blog-app-backend.herokuapp.com/posts'
  );
  return response.json();
}
