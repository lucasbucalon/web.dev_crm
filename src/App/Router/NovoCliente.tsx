import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

import { useState } from 'react'
import { db } from '../../Config/firebase'

import './style.css'

export default function NovoCliente() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const setUser = useNavigate()

  function cadastrarCliente() {
    if (nome.length === 0) {
      setMensagem('Informe seu nome')
    } else if (email.length === 0) {
      setMensagem('Informe seu e-mail')
    } else if (fone.length === 0) {
      setMensagem('Informe seu numero')
    } else {
      const data = collection(db, 'clientes')
      addDoc(data, {
        nome,
        email,
        fone,
      })
        .then(() => {
          setMensagem('')
          setUser('/app/home')
        })
        .catch((error) => {
          setMensagem(error.message)
        })
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="title">- Novo cliente -</h1>

      <Form className="colum">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form"
            type="text"
            placeholder="Insira um nome"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form"
            type="email"
            placeholder="Insira um e-mail"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fone</Form.Label>
          <Form.Control
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            className="form"
            type="text"
            placeholder="Insira um telefone"
          />
        </Form.Group>

        <div className="box-btn">
          <Link to="/app/home" className="btn1">
            Cancelar
          </Link>

          <Link onClick={cadastrarCliente} className="btn2">
            Salvar
          </Link>

          {mensagem.length > 0 ? (
            <Alert className="alert-newClient">{mensagem}</Alert>
          ) : null}
        </div>
      </Form>
    </div>
  )
}
