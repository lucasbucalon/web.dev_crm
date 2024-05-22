import { Outlet } from 'react-router-dom'

import Footer from './Site/Components/Footer'

export default function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
