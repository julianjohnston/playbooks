import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Playbooks from './components/modules/playbooks/Playbooks'
import CreatePlaybook from './components/modules/playbooks/CreatePlaybook'
import PlaybookBuilder from './components/modules/playbooks/PlaybookBuilder'
import PlaybookDetail from './components/modules/playbooks/PlaybookDetail'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/playbooks" replace />} />
        <Route path="/playbooks" element={<Playbooks />} />
        <Route path="/playbooks/create" element={<CreatePlaybook />} />
        <Route path="/playbooks/create/scratch" element={<PlaybookBuilder />} />
        <Route path="/playbooks/:id" element={<PlaybookDetail />} />
      </Routes>
    </Layout>
  )
}
