import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const STATUS_COLORS = {
  'New': 'bg-blue-100 text-blue-700',
  'Contacted': 'bg-yellow-100 text-yellow-700',
  'Completed': 'bg-green-100 text-green-700',
  'Closed': 'bg-gray-100 text-gray-700',
}

export default function AdminPanel() {
  const navigate = useNavigate()
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [adminName, setAdminName] = useState('Admin')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem('sst_admin_token')
    const name = sessionStorage.getItem('sst_admin_name')
    if (!token) { navigate('/admin'); return }
    setAdminName(name || 'Admin')
    fetchEnquiries()
  }, [])

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/enquiries')
      const data = await res.json()
      setEnquiries(data.enquiries || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('sst_admin_token')
    sessionStorage.removeItem('sst_admin_name')
    navigate('/admin')
  }

  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/enquiry/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e))
    } catch (err) { console.error(err) }
  }

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return
    try {
      await fetch(`/api/enquiry/${id}`, { method: 'DELETE' })
      setEnquiries(prev => prev.filter(e => e.id !== id))
      if (selected?.id === id) setSelected(null)
    } catch (err) { console.error(err) }
  }

  const filtered = enquiries.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.phone.includes(search) || e.product.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filterStatus === 'All' || e.status === filterStatus
    return matchSearch && matchStatus
  })

  const stats = {
    total: enquiries.length,
    new: enquiries.filter(e => e.status === 'New').length,
    contacted: enquiries.filter(e => e.status === 'Contacted').length,
    completed: enquiries.filter(e => e.status === 'Completed').length,
  }

  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '84px' }}>
      {/* Header */}
      <div className="bg-red-700 text-white px-4 sm:px-6 lg:px-8 py-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" /></svg>
            </div>
            <div>
              <div className="font-bold text-sm">{adminName}</div>
              <div className="text-red-300 text-xs">SST Admin Panel</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchEnquiries} className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Refresh
            </button>
            <button onClick={handleLogout} className="bg-white text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Enquiries', value: stats.total, color: 'bg-red-700', icon: '📋' },
            { label: 'New', value: stats.new, color: 'bg-blue-600', icon: '🆕' },
            { label: 'Contacted', value: stats.contacted, color: 'bg-yellow-500', icon: '📞' },
            { label: 'Completed', value: stats.completed, color: 'bg-green-600', icon: '✅' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${s.color}`}>{s.value}</span>
              </div>
              <div className="font-bold text-2xl text-gray-900">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by name, phone, or product..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-field flex-1"
            />
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="input-field sm:w-44 bg-white">
              {['All', 'New', 'Contacted', 'Completed', 'Closed'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900" style={{ fontFamily: 'Playfair Display,serif' }}>Customer Enquiries</h2>
            <span className="text-sm text-gray-500">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <svg className="w-8 h-8 animate-spin text-red-700 mx-auto mb-3" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              <div className="text-gray-400 text-sm">Loading enquiries...</div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-3">📭</div>
              <div className="text-gray-400 font-medium">No enquiries found</div>
              <div className="text-gray-300 text-sm mt-1">Customer enquiries will appear here once submitted.</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Product</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(e => (
                    <tr key={e.id}>
                      <td className="font-semibold text-gray-900 whitespace-nowrap">{e.name}</td>
                      <td>
                        <a href={`tel:${e.phone}`} className="text-red-700 hover:underline font-medium">{e.phone}</a>
                      </td>
                      <td className="text-gray-500 max-w-32 truncate">{e.email || '—'}</td>
                      <td>
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">{e.product}</span>
                      </td>
                      <td className="max-w-40">
                        <button onClick={() => setSelected(e)} className="text-left text-gray-600 hover:text-red-700 transition-colors text-xs truncate block max-w-full">
                          {e.message.length > 40 ? e.message.slice(0, 40) + '…' : e.message}
                        </button>
                      </td>
                      <td className="text-gray-400 text-xs whitespace-nowrap">{formatDate(e.createdAt)}</td>
                      <td>
                        <select
                          value={e.status}
                          onChange={ev => updateStatus(e.id, ev.target.value)}
                          className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_COLORS[e.status]}`}
                        >
                          {['New', 'Contacted', 'Completed', 'Closed'].map(s => <option key={s}>{s}</option>)}
                        </select>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <a href={`https://wa.me/91${e.phone}?text=Hello ${e.name}! This is SST regarding your enquiry about ${e.product}.`} target="_blank" rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 transition-colors" title="WhatsApp">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.549 4.081 1.507 5.793L.057 23.75l6.064-1.446C7.827 23.462 9.867 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.671-.523-5.192-1.429l-.373-.22-3.596.858.899-3.516-.243-.388C2.524 15.67 2 13.896 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                          </a>
                          <button onClick={() => deleteEnquiry(e.id)} className="text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Message Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display,serif' }}>Enquiry Details</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="space-y-3">
              {[['Name', selected.name], ['Phone', selected.phone], ['Email', selected.email || '—'], ['Product', selected.product], ['Date', formatDate(selected.createdAt)], ['Status', selected.status]].map(([lbl, val]) => (
                <div key={lbl} className="flex">
                  <span className="text-gray-500 text-sm w-20 flex-shrink-0">{lbl}:</span>
                  <span className="text-gray-900 text-sm font-medium">{val}</span>
                </div>
              ))}
              <div>
                <div className="text-gray-500 text-sm mb-1">Message:</div>
                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 leading-relaxed">{selected.message}</div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href={`tel:${selected.phone}`} className="flex-1 btn-primary text-center text-sm py-2">Call</a>
              <a href={`https://wa.me/91${selected.phone}?text=Hello ${selected.name}! This is SST.`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center text-sm transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
