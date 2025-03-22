import React from 'react';
import { Link } from 'react-router-dom';

const TrabajadorItem = ({ trabajador, onDelete }) => {
  return (
    <tr>
      <td>{trabajador.id}</td>
      <td>{trabajador.nombre}</td>
      <td>{trabajador.email}</td>
      <td>{trabajador.departamento?.nombre || 'Sin asignar'}</td>
      <td>
        <Link to={`/trabajadores/edit/${trabajador.id}`} className="btn btn-sm btn-primary me-2">
          Editar
        </Link>
        <button onClick={() => onDelete(trabajador.id)} className="btn btn-sm btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TrabajadorItem;