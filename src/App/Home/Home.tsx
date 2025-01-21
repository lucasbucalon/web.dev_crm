import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";

import { Icon } from "@iconify/react";

import ListaCliente from "../Components/ListaCliente";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SweetAlert from "react-bootstrap-sweetalert";

import "./home.css";

export default function Home() {
  interface Cliente {
    id: string;
    nome: string;
    email: string;
    fone: string;
  }

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [busca, setBusca] = useState("");
  const [excluido, setExcluido] = useState("");
  const [confirme, setConfirme] = useState(false);
  const [confirmeId, setConfirmeId] = useState("");

  const buscaLower = busca.toLowerCase();
  const teams = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(buscaLower)
  );

  async function deleteUser(id: string) {
    const userDoc = doc(db, "clientes", id);
    await deleteDoc(userDoc);
    setExcluido(id);
    setConfirme(false);
  }

  function comDeleteUser(id: string) {
    setConfirmeId(id);
    setConfirme(true);
  }

  useEffect(() => {
    const getUsers = async () => {
      const userCollectionRef = collection(db, "clientes");
      const data = await getDocs(userCollectionRef);

      setClientes(
        data.docs.map((doc) => ({
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          fone: doc.data().fone,
        }))
      );
    };
    getUsers();
  }, [busca, excluido]);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="title">- Lista de clientes -</h1>

        <div className="crm-box">
          <div className="crm-single1">
            <Link to="/app/home/novocliente">
              <Button className="crm-button" variant="primary" type="button">
                <Icon icon="pepicons-pop:plus" /> Clientes
              </Button>
            </Link>
          </div>

          <div className="crm-single2">
            <InputGroup className="mb-3 crm-input">
              <Form.Control
                className="crm-font"
                placeholder="Pesquisar por nome"
                aria-describedby="basic-addon2"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />

              <Button className="crm-font" variant="primary" id="button-addon2">
                <Icon icon="iconamoon:search" />
                <p>Pesquisar</p>
              </Button>
            </InputGroup>
          </div>
        </div>

        <ListaCliente arrayClientes={teams} clickDelete={comDeleteUser} />
      </div>

      {confirme ? (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Sim"
          confirmBtnBsStyle="danger"
          cancelBtnText="Não"
          cancelBtnBsStyle="primary"
          title="Excluir"
          reverseButtons={true}
          focusCancelBtn
          onCancel={() => setConfirme(false)}
          onConfirm={() => deleteUser(confirmeId)}
          customButtons={
            <React.Fragment>
              <Button variant="primary" onClick={() => setConfirme(false)}>
                Não
              </Button>
              <Button variant="danger" onClick={() => deleteUser(confirmeId)}>
                Sim
              </Button>
            </React.Fragment>
          }
        />
      ) : null}
    </div>
  );
}
