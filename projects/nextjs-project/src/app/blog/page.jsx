export const metadata = {
  title: 'Blog – My Next.js Project',
  description: 'A list of blog posts fetched from an external API.',
  openGraph: {
    title: 'Blog – My Next.js Project',
    description: 'Explore blog posts and articles shared here.',
  },
};

export default async function Blog() {
    // Artificial delay: wait 3 seconds before doing anything
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) throw new Error('Failed to fetch posts');

    const posts = await res.json();

    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
  }