"use client";
import { useState } from 'react';

export default function TeamSettingsPage() {
  const [teamMembers] = useState([
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@willrise.com',
      role: 'ADMIN',
      status: 'Active',
      lastLogin: '2024-01-15T10:30:00Z',
      avatar: null
    }
  ]);

  const [invitations] = useState([
    {
      id: '1',
      email: 'manager@willrise.com',
      role: 'EDITOR',
      status: 'Pending',
      invitedAt: '2024-01-14T15:20:00Z'
    }
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-primary-600 mb-2">Team & Permissions</h1>
        <p className="text-neutral-600">Manage admin users, roles, and access permissions</p>
      </div>

      {/* Team Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-primary-600 mb-2">{teamMembers.length}</div>
          <div className="text-neutral-600">Team Members</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-success-600 mb-2">
            {teamMembers.filter(m => m.role === 'ADMIN').length}
          </div>
          <div className="text-neutral-600">Administrators</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-accent-600 mb-2">
            {teamMembers.filter(m => m.role === 'EDITOR').length}
          </div>
          <div className="text-neutral-600">Editors</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
          <div className="text-3xl font-bold text-warning-600 mb-2">{invitations.length}</div>
          <div className="text-neutral-600">Pending Invites</div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-primary-600">Team Members</h2>
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Invite Member
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">User</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Role</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Last Login</th>
                <th className="px-6 py-4 text-right font-semibold text-neutral-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary-600 text-sm">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">{member.name}</div>
                        <div className="text-sm text-neutral-600">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      member.role === 'ADMIN' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-success-100 text-success-700'
                    }`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-semibold">
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600">
                      {new Date(member.lastLogin).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary-600 hover:text-primary-700 font-medium mr-3">
                      Edit
                    </button>
                    <button className="text-danger-600 hover:text-danger-700 font-medium">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Invitations */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <h2 className="font-display text-xl font-bold text-primary-600">Pending Invitations</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Email</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Role</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-900">Invited</th>
                <th className="px-6 py-4 text-right font-semibold text-neutral-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {invitations.map((invitation) => (
                <tr key={invitation.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-neutral-900">{invitation.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-semibold">
                      {invitation.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-semibold">
                      {invitation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600">
                      {new Date(invitation.invitedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-accent-600 hover:text-accent-700 font-medium mr-3">
                      Resend
                    </button>
                    <button className="text-danger-600 hover:text-danger-700 font-medium">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role Permissions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
        <h2 className="font-display text-xl font-bold text-primary-600 mb-6">Role Permissions</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary-600 mb-4">Administrator</h3>
            <div className="space-y-2">
              {[
                'Full system access',
                'Manage team members',
                'Configure settings',
                'View all reports',
                'Manage products & inventory',
                'Process orders'
              ].map((permission, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-700">{permission}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-600 mb-4">Editor</h3>
            <div className="space-y-2">
              {[
                'Manage products & inventory',
                'Process orders',
                'View sales reports',
                'Manage collections'
              ].map((permission, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-700">{permission}</span>
                </div>
              ))}
              {[
                'Configure system settings',
                'Manage team members'
              ].map((permission, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-500">{permission}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
