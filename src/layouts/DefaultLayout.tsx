import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* renderiza o elemento da rota filha se houver  */}
    </div>
  )
}
