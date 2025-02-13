'use client';

import { trpc } from '../trpc/client';

export default function Home() {
  const hello = trpc.user.hello.useQuery({ name: 'World' });
  const posts = trpc.user.getPosts.useQuery();

  if (!hello.data || !posts.data) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hello Message */}
      <div className="mb-8 text-2xl font-bold">{hello.data}</div>

      {/* Posts Grid */}
      <div className="w-full max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid gap-4">
          {posts.data.map((post) => (
            <div 
              key={post.id} 
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{post.title}</h3>
                <span className={`text-sm px-2 py-1 rounded ${
                  post.published 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
              </div>
              {post.content && (
                <p className="mt-2 text-gray-600">{post.content}</p>
              )}
              <div className="mt-2 text-sm text-gray-500">
                Created: {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}