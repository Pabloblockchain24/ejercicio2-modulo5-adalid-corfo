import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

function DoctorAdd() {
  const { addDoctor } = useContext(DataContext);
  const [doctor, setDoctor] = useState({
    id_doc: "",
    nombre: "",
    especialidad: "",
    descripcion: "",
    imagen: "",
    experiencia: "",
    disponibilidad: "",
    contacto: "",
    horas_disponibles: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor({
      ...doctor,
      informacion_adicional: {
        contacto: doctor.contacto,
        horas_disponibles: doctor.horas_disponibles
      }
    });
  };

  return (
    <div className="doctor-form__container">
      <h2>Agregar Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id_doc" placeholder="ID" onChange={handleChange} required />
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="especialidad" placeholder="Especialidad" onChange={handleChange} required />
        <textarea name="descripcion" placeholder="Descripción" onChange={handleChange} required></textarea>
        <input type="text" name="imagen" placeholder="URL Imagen" onChange={handleChange} required />
        <input type="number" name="experiencia" placeholder="Años de experiencia" onChange={handleChange} required />
        <input type="text" name="disponibilidad" placeholder="Disponibilidad" onChange={handleChange} required />
        <input type="text" name="contacto" placeholder="Contacto" onChange={handleChange} required />
        <input type="text" name="horas_disponibles" placeholder="Horas disponibles" onChange={handleChange} required />
        <button type="submit">Agregar Doctor</button>
      </form>
    </div>
  );
}

export default DoctorAdd;
