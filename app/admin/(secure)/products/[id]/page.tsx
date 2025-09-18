"use client";
import { useState } from 'react';
import useSWR from 'swr';
import { useParams, useRouter } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data: product, mutate } = useSWR(`/api/admin/products/${params.id}`, fetcher);
  
  const [activeTab, setActiveTab] = useState('general');

  if (!product) {
    return <div className="space-y-4">
      <div className="h-8 bg-neutral-200 rounded animate-pulse"></div>
      <div className="h-96 bg-neutral-200 rounded animate-pulse"></div>
    </div>;
  }

  const tabs = [
    { id: 'general', label: 'General', icon: '📝' },
    { id: 'variants', label: 'Variants', icon: '🎨' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'images', label: 'Images', icon: '🖼️' },
    { id: 'seo', label: 'SEO', icon: '🔍' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="font-display text-3xl font-bold text-primary-600">{product.title}</h1>
            <p className="text-neutral-600">Product ID: {product.id.slice(-8)}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="border border-neutral-300 px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors">
            Duplicate
          </button>
          <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
        <div className="border-b border-neutral-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-8">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Product Title</label>
                <input
                  type="text"
                  defaultValue={product.title}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Handle</label>
                <input
                  type="text"
                  defaultValue={product.handle}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Description</label>
                <textarea
                  defaultValue={product.description}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
            </div>
          )}

          {activeTab === 'variants' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-primary-600">Product Variants</h3>
                <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Add Variant
                </button>
              </div>
              
              <div className="space-y-4">
                {product.variants?.map((variant: any) => (
                  <div key={variant.id} className="p-6 border border-neutral-200 rounded-xl">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary-600 mb-1">SKU</label>
                        <input
                          type="text"
                          defaultValue={variant.sku}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:border-primary-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary-600 mb-1">Price</label>
                        <input
                          type="number"
                          defaultValue={variant.price / 100}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:border-primary-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary-600 mb-1">Size</label>
                        <input
                          type="text"
                          defaultValue={variant.size}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:border-primary-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary-600 mb-1">Color</label>
                        <input
                          type="text"
                          defaultValue={variant.color}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:border-primary-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )) || (
                  <div className="text-center py-8 text-neutral-500">
                    <div className="text-2xl mb-2">📦</div>
                    <div>No variants created yet</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold text-primary-600">Inventory Management</h3>
              
              <div className="space-y-4">
                {product.variants?.map((variant: any) => (
                  <div key={variant.id} className="flex items-center justify-between p-6 border border-neutral-200 rounded-xl">
                    <div>
                      <div className="font-semibold text-primary-600">{variant.sku}</div>
                      <div className="text-sm text-neutral-600">
                        {variant.size && `Size: ${variant.size}`}
                        {variant.color && ` • Color: ${variant.color}`}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-neutral-900">
                          {variant.inventory?.quantity || 0} in stock
                        </div>
                        <div className="text-sm text-neutral-600">
                          {variant.inventory?.reserved || 0} reserved
                        </div>
                      </div>
                      <input
                        type="number"
                        defaultValue={variant.inventory?.quantity || 0}
                        className="w-24 px-3 py-2 border border-neutral-300 rounded-lg focus:border-primary-500 transition-all"
                      />
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        Update
                      </button>
                    </div>
                  </div>
                )) || (
                  <div className="text-center py-8 text-neutral-500">
                    <div className="text-2xl mb-2">📦</div>
                    <div>Create variants to manage inventory</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-primary-600">Product Images</h3>
                <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Upload Images
                </button>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                {product.images?.map((image: any) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square bg-neutral-100 rounded-xl overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.alt || product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute top-2 right-2 bg-danger-500 text-white p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                )) || (
                  <div className="col-span-4 text-center py-12 border-2 border-dashed border-neutral-300 rounded-xl">
                    <div className="text-4xl mb-4">🖼️</div>
                    <div className="font-semibold text-primary-600 mb-2">No images uploaded</div>
                    <div className="text-neutral-600 mb-4">Add product images to showcase your items</div>
                    <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                      Upload First Image
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold text-primary-600">SEO & Search</h3>
              
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Meta Title</label>
                <input
                  type="text"
                  defaultValue={product.title}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
                <div className="text-sm text-neutral-500 mt-1">60 characters recommended</div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Meta Description</label>
                <textarea
                  defaultValue={product.description}
                  rows={3}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
                <div className="text-sm text-neutral-500 mt-1">160 characters recommended</div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary-600 mb-2">Search Keywords</label>
                <input
                  type="text"
                  placeholder="safety harness, fall protection, ANSI certified"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}