import Banner from './Components/Banner'
import Menu from './Components/Menu'
import Features from './Components/Features'
import Testemunho from './Components/Testemunho'
import Planos from './Components/Planos'

import 'bootstrap/dist/css/bootstrap.min.css'
import './site.css'

export default function Site() {
  return (
    <div>
      <Menu />
      <Banner />
      <Features />
      <Testemunho />
      <Planos />
    </div>
  )
}
