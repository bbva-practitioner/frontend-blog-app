const jsonToBlob = json =>
  new Blob([JSON.stringify(json)], { type: 'application/json' });

export async function getPosts() {
  const response = await fetch(
    'https://practitioner-blog-app-backend.herokuapp.com/posts'
  );
  return response.json();
}
