'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, SlidersHorizontal } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { getAttributes, deleteAttribute } from '@/actions/attribute.actions';
import AttributeModal from '@/components/admin/AttributeModal';
import DeleteModal from '@/components/admin/DeleteModal';

export default function FiltersPage() {
  const [attributes, setAttributes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<any>(null);
  const [deleteTarget, setDeleteTarget] = useState<any>(null);

  useEffect(() => {
    fetchAttributes();
  }, []);

  const fetchAttributes = async () => {
    try {
      const data = await getAttributes();
      setAttributes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditTarget(null);
    setIsModalOpen(true);
  };

  const handleEdit = (attribute: any) => {
    setEditTarget(attribute);
    setIsModalOpen(true);
  };

  const executeDelete = async () => {
    if (deleteTarget) {
      await deleteAttribute(deleteTarget._id);
      fetchAttributes();
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Filters & Attributes</h1>
          <p className="text-slate-500 mt-1">Manage global product specifications like Materials, Colors, and Capacities.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="btn-primary py-2 px-4 text-sm flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-transform active:scale-95"
        >
          <Plus size={16} /> Add Attribute
        </button>
      </div>

      {/* Info Banner */}
      <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-3 text-sm text-blue-800">
        <SlidersHorizontal className="shrink-0 text-blue-500" size={20} />
        <p>
          Attributes defined here will automatically appear as dropdown options when creating or editing a product. 
          If an attribute is not defined here, the product form will fall back to a standard text input.
        </p>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-gray-100 text-sm text-slate-500">
                <th className="p-4 font-medium">Attribute Name</th>
                <th className="p-4 font-medium w-3/5">Configured Options</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="divide-y divide-gray-100"
            >
              {loading ? (
                <tr><td colSpan={3} className="p-4 text-center text-slate-500">Loading attributes...</td></tr>
              ) : attributes.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <SlidersHorizontal className="text-slate-400" size={24} />
                    </div>
                    <h3 className="text-slate-900 font-semibold mb-1">No attributes found</h3>
                    <p className="text-slate-500 text-sm">Create an attribute to manage dropdown options.</p>
                  </td>
                </tr>
              ) : (
                attributes.map((attr) => (
                  <motion.tr 
                    variants={staggerItem}
                    key={attr._id} 
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="p-4">
                      <div className="font-semibold text-slate-900">{attr.name}</div>
                      <div className="text-xs text-slate-400 mt-1">{attr.options?.length || 0} options</div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {attr.options && attr.options.length > 0 ? (
                          attr.options.map((opt: string, i: number) => (
                            <span key={i} className="px-2.5 py-1 bg-white border border-gray-200 text-slate-600 text-xs rounded-md shadow-sm">
                              {opt}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-slate-400 italic">No options defined</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEdit(attr)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit Attribute">
                          <Edit size={16} />
                        </button>
                        <button onClick={() => setDeleteTarget(attr)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Attribute">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </motion.tbody>
          </table>
        </div>
      </div>

      <AttributeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attribute={editTarget}
        onSuccess={fetchAttributes}
      />

      <DeleteModal 
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={executeDelete}
        itemName={deleteTarget?.name}
        description="Are you sure you want to delete this attribute? This will not affect existing products that have already saved these values."
      />
    </div>
  );
}
