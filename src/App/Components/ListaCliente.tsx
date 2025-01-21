import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./cliente.css";

interface Cliente {
  id: number;
  nome: string;
  email: string;
  fone: string;
}

interface Props {
  arrayClientes: Cliente[];
  clickDelete: (id: number) => void;
}

export default function ListaCliente(props: Props) {
  return (
    <Table striped bordered hover>
      <thead className="top">
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Config.</th>
        </tr>
      </thead>
      <tbody className="boot">
        {props.arrayClientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.fone}</td>
            <td className="link">
              <Link
                className="one"
                to={`/app/home/editarcliente/${cliente.id}`}
              >
                <Icon className="ico-list" icon="bxs:edit" />
              </Link>

              <button
                className="link"
                onClick={() => props.clickDelete(cliente.id)}
              >
                <Icon
                  className="ico-list"
                  icon="material-symbols:delete-rounded"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
