"use client";
import { useState } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'OSHA Fall Protection Guidelines for Construction',
    slug: 'osha-fall-protection-guide',
    status: 'PUBLISHED',
    author: 'Safety Team',
    publishedAt: '2024-01-15T10:00:00Z',
    excerpt: 'Complete guide to OSHA fall protection requirements for construction sites...'
  },
  {
    id: '2', 
    title: 'Suspension Trauma Prevention Techniques',
    slug: 'suspension-trauma-prevention',
    status: 'PUBLISHED',
    author: 'Dr. Sarah Mitchell',
    publishedAt: '2024-01-10T14:30:00Z',
    excerpt: 'Learn about suspension trauma and how modern harness design prevents it...'
  },
  {
    id: '3',
    title: 'Safety Standards Landscape Overview',
    slug: 'standards-landscape',
    status: 'DRAFT', 
    author: 'Marcus Rodriguez',
    publishedAt: null,
    excerpt: 'Understanding the intersection of ANSI, OSHA, CSA, and EN standards...'
  },
  {
    id: '4',
    title: 'Bench Test Protocol Overview',
    slug: 'bench-protocol-overview',
    status: 'PUBLISHED',
    author: 'Engineering Team',
    publishedAt: '2024-01-08T09:15:00Z',
    excerpt: 'A detailed look at our testing methodology and quality assurance...'
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-primary-600 mb-2">Blog Management</h1>
          <p className="text-neutral-600">Manage blog posts and content marketing</p>
        </div>
        <Link 
          href="/admin/blog/new"
          className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg"
        >
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-primary-600 mb-2">{blogPosts.length}</div>
          <div className="text-neutral-600">Total Posts</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-success-600 mb-2">
            {blogPosts.filter(p => p.status === 'PUBLISHED').length}
          </div>
          <div className="text-neutral-600">Published</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-warning-600 mb-2">
            {blogPosts.filter(p => p.status === 'DRAFT').length}
          </div>
          <div className="text-neutral-600">Drafts</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-accent-600 mb-2">
            {blogPosts.filter(p => p.publishedAt && new Date(p.publishedAt) > new Date(Date.now() - 30*24*60*60*1000)).length}
          </div>
          <div className="text-neutral-600">This Month</div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-input"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="admin-select w-auto"
          >
            <option value="ALL">All Status</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
            <option value="ARCHIVED">Archived</option>
          </select>
          <button className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-primary-600">Post</th>
                <th className="px-6 py-4 text-left font-semibold text-primary-600">Author</th>
                <th className="px-6 py-4 text-left font-semibold text-primary-600">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-primary-600">Published</th>
                <th className="px-6 py-4 text-right font-semibold text-primary-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-primary-600">{post.title}</div>
                      <div className="text-sm text-neutral-500">/{post.slug}</div>
                      <div className="text-sm text-neutral-600 mt-1 line-clamp-2">{post.excerpt}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-neutral-700">{post.author}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      post.status === 'PUBLISHED' 
                        ? 'bg-success-100 text-success-700' 
                        : post.status === 'DRAFT'
                        ? 'bg-warning-100 text-warning-700'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-accent-600 hover:text-accent-700 font-medium"
                      >
                        View
                      </Link>
                      <button className="text-danger-600 hover:text-danger-700 font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📝</div>
            <div className="font-semibold text-primary-600 mb-2">No blog posts found</div>
            <div className="text-neutral-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first blog post'}
            </div>
            <Link 
              href="/admin/blog/new"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Create Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
