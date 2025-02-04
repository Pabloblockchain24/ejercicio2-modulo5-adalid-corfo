import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const [error, setError] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const { fetchAppointments } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('user');
      if (!token){
        setError('No se encontro un token valido')
        return;
      }

      try {
        const data = await fetchAppointments(token);
        setAppointments(data);
      } catch (error) {
        setError("Token invalido o no autorizado", error);
      }
    };
    if (user?.role == "admin" || user?.role == "doctor") {
      fetchData();
    }
  }, [user]);

  return (
    <>
      {user?.role == "admin" || user?.role == "doctor" ? (
        <>
          <h1> Dashboard</h1>
          <p>Bienvenido administrador, aqui los datos estan protegidos</p>
          {error && <p> {error}</p>}

          {user.role == "admin" ? <button onClick={() => navigate("/addDoctor")}>Agregar Doctor</button> : ""}

          <div>
            {appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <React.Fragment key={index}>
                  <div className="appointments">
                    <div className="appointment__row">
                      <p> Cita: {appointment.id} </p>
                      <p> Dr: {appointment.nombre_doctor} </p>
                      <p> Paciente: {appointment.nombre_paciente} </p>
                      <p> Estado: {appointment.estado} </p>
                    </div>
                  </div>
                </React.Fragment>
              ))
            ) : (
              <p>Cargando citas medicas ...</p>
            )}
          </div>
        </>
      ) : (
        <p> No tienes permisos de acceso de administrador </p>
      )}

    </>
  );
}

export default Dashboard;
