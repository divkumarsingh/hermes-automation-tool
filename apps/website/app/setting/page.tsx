import React from 'react';
import { 
  User, 
  Users, 
  KeyRound, 
  Briefcase, 
  MoreVertical, 
  X, 
  Copy, 
  Trash2, 
  UserPlus, 
  Plus 
} from 'lucide-react';
import Image from 'next/image';

export default function AccountSettings() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your personal information, team members, and subscription details.
          </p>
        </div>

        {/* 1. Profile Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <User size={20} className="text-red-700" />
              <h2>Profile</h2>
            </div>
            <button className="text-red-700 border border-red-300 hover:bg-red-50 bg-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
              Edit Profile
            </button>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200">
                <img 
                  src="https://i.pravatar.cc/150?u=alex" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-red-700 p-1.5 rounded-full border-2 border-white shadow-sm">
                <Briefcase size={12} className="text-white" />
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 w-full">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">Full Name</p>
                <p className="text-sm font-medium text-gray-900">Alex Sterling</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">Email Address</p>
                <p className="text-sm font-medium text-gray-900">alex.sterling@hermes.ai</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">Organization</p>
                <p className="text-sm font-medium text-gray-900">Hermes Automation Inc.</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">Timezone</p>
                <p className="text-sm font-medium text-gray-900">PST (UTC-8)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Team Management Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Users size={20} className="text-red-700" />
              <h2>Team Management</h2>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <UserPlus size={16} />
              Invite Member
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-bold tracking-wider text-gray-400 uppercase">
              <div className="col-span-6">Member</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-3">Status</div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {/* Row 1 */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center">
                <div className="col-span-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">JD</div>
                  <span className="text-sm font-medium text-gray-900">Jane Doe (You)</span>
                </div>
                <div className="col-span-3 text-sm text-gray-600">Owner</div>
                <div className="col-span-3 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">Active</span>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center">
                <div className="col-span-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">MR</div>
                  <span className="text-sm font-medium text-gray-900">Marcus Reed</span>
                </div>
                <div className="col-span-3 text-sm text-gray-600">Admin</div>
                <div className="col-span-3 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">Active</span>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center">
                <div className="col-span-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">SL</div>
                  <span className="text-sm font-medium text-gray-900">Sarah Lee</span>
                </div>
                <div className="col-span-3 text-sm text-gray-600">Editor</div>
                <div className="col-span-3 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase tracking-wide">Pending</span>
                  <button className="text-gray-400 hover:text-gray-900"><X size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. API Keys Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <KeyRound size={20} className="text-red-700" />
              <h2>API Keys</h2>
            </div>
            <button className="bg-[#b91c1c] hover:bg-red-800 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <Plus size={16} />
              Create Key
            </button>
          </div>

          <div className="space-y-4">
            {/* Key Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-700 mb-2">Production Webhook Key</p>
                <code className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-mono tracking-wider">
                  hm_live_****************3a9b
                </code>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <button className="hover:text-gray-700 transition-colors"><Copy size={18} /></button>
                <button className="hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
              </div>
            </div>

            {/* Key Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-700 mb-2">Development Testing</p>
                <code className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-mono tracking-wider">
                  hm_test_****************7f2d
                </code>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <button className="hover:text-gray-700 transition-colors"><Copy size={18} /></button>
                <button className="hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}