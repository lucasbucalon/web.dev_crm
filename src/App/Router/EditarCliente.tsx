import Form from 'react-bootstrap/Form'
// import Alert from 'react-bootstrap/Alert'

import {
  Link,
  useParams,
  // useNavigate
} from 'react-router-dom'
// import { useEffect, useState } from 'react'

import './style.css'

export default function EditarCliente() {
  // const [nome, setNome] = useState('')
  // const [email, setEmail] = useState('')
  // const [fone, setFone] = useState('')
  // const [mensagem, setMensagem] = useState('')
  const { id } = useParams()

  return (
    <div className="container-fluid">
      <h1 className="title">- Editar Cliente -</h1>

      <Form className="colum">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Código</Form.Label>
          <Form.Control value={id} className="form" type="text" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            // value={nome}
            // onChange={(e) => setNome(e.target.value)}
            className="form"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="form"
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fone</Form.Label>
          <Form.Control
            // value={fone}
            // onChange={(e) => setFone(e.target.value)}
            className="form"
            type="text"
          />
        </Form.Group>

        <div className="box-btn">
          <Link to="/app/home" className="btn1">
            Cancelar
          </Link>

          <Link
            // onClick={alterarCliente}
            className="btn2"
          >
            Salvar
          </Link>

          {/* {mensagem.length > 0 ? (
            <Alert className="alert-newClient">{mensagem}</Alert>
          ) : null} */}
        </div>
      </Form>
    </div>
  )
}
