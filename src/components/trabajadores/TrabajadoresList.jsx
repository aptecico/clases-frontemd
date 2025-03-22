import React, { useState, useEffect } from 'react';
import { getTrabajadores, deleteTrabajador } from '../../services/trabajadorService';
import TrabajadorItem from './TrabajadorItem';

const TrabajadoresList = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTrabajadores = async () => {
    try {
      setLoading(true);
      const data = await getTrabajadores();
      setTrabajadores(data);
      setError('');
    } catch (err) {
      setError('Error al cargar trabajadores');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrabajadores();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este trabajador?')) {
      try {
        await deleteTrabajador(id);
        setTrabajadores(trabajadores.filter(trab => trab.id !== id));
      } catch (err) {
        setError('Error al eliminar el trabajador');
      }
    }
  };

  if (loading) return <div>Cargando trabajadores...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="trabajadores-list">
      <h2>Listado de Trabajadores</h2>
      <div className="add-button-container">
        <button className="btn btn-success">Agregar Trabajador</button>
      </div>
      {trabajadores.length === 0 ? (
        <p>No hay trabajadores registrados</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {trabajadores.map((trabajador) => (
              <TrabajadorItem 
                key={trabajador.id} 
                trabajador={trabajador} 
                onDelete={handleDelete} 
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TrabajadoresList;