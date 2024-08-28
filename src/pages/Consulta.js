import React, { useState } from 'react';

const Consulta = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreInput = e.target.elements.nombre.value;
    const edadInput = e.target.elements.edad.value;
    const razaInput = e.target.elements.raza.value;
    const tipoInput = e.target.elements.tipo.value;
    const mailInput = e.target.elements.mail.value;
    const direccionInput = e.target.elements.direccion.value;
    const diaInput = e.target.elements.dia.value;
    const horaInput = e.target.elements.hora.value;
    const mensajeInput = e.target.elements.mensaje.value;
    const tipoMascotaInput = e.target.elements.tipo_mascota.value;

    const nombreRegex = /^[A-Za-z\s]{1,30}$/;
    const edadRegex = /^\d{1,2}$/;
    const razaRegex = /^[A-Za-z\s]{1,30}$/;
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const direccionRegex = /^[A-Za-z\s]{1,69}$/;
    const diaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!tipoMascotaInput) {
      alert('Debe seleccionar un tipo de mascota.');
      return;
    }

    if (!nombreRegex.test(nombreInput)) {
      alert('Nombre de su Mascota debe tener entre 1 y 30 caracteres, y solo puede contener letras y espacios.');
      return;
    }

    if (!edadRegex.test(edadInput)) {
      alert('Edad debe ser un número de hasta 2 dígitos.');
      return;
    }

    if (!razaRegex.test(razaInput)) {
      alert('Raza debe tener entre 1 y 30 caracteres, y solo puede contener letras y espacios.');
      return;
    }

    if (!tipoInput) {
      alert('Debe seleccionar un tamaño.');
      return;
    }

    if (!mailRegex.test(mailInput)) {
      alert('Correo Electrónico no válido.');
      return;
    }

    if (!direccionRegex.test(direccionInput)) {
      alert('Dirección debe tener entre 1 y 69 caracteres, y solo puede contener letras y espacios.');
      return;
    }

    if (!diaRegex.test(diaInput)) {
      alert('El día debe tener el formato DD/MM/AAAA.');
      return;
    }

    if (!horaRegex.test(horaInput)) {
      alert('La hora debe tener el formato HH:MM.');
      return;
    }

    if (!mensajeInput.trim()) {
      alert('Debe ingresar un detalle de consulta.');
      return;
    }

    setFormData({
      nombre: nombreInput,
      edad: edadInput,
      raza: razaInput,
      tipo: tipoInput,
      mail: mailInput,
      direccion: direccionInput,
      dia: diaInput,
      hora: horaInput,
      mensaje: mensajeInput,
      tipoMascota: tipoMascotaInput
    });

    setShowMessage(true);
  };

  const handleReset = () => {
    document.getElementById('engrieForm').reset();
    setShowMessage(false);
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Toma una Consulta!</h2>
          <p className="text-center">¿Qué necesita tu compañero?</p>
        </div>
      </section>
      <section className="formulario rojo">
        <form id="engrieForm" className={`form-layout ${showMessage ? '' : 'show'}`} onSubmit={handleSubmit}>
          <div className="form-item">
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="Perro" id="Perro" />
              <label htmlFor="Perro">Perro</label>
            </div>
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="Gato" id="Gato" />
              <label htmlFor="Gato">Gato</label>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="nombre">Nombre de su Mascota:</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="raza">Raza:</label>
            <input type="text" id="raza" />
          </div>
          <div className="form-item">
            <label htmlFor="tipo">Tamaño:</label>
            <select id="tipo">
              <option value="">Seleccione</option>
              <option value="Salud y Cuidado">Salud y Cuidado</option>
              <option value="Psicología">Psicología</option>
              <option value="Dieta y Nutrición">Dieta y Nutrición</option>
              <option value="Consultas Generales">Consultas Generales</option>
            </select>
          </div>
          <div className="form-item form-half">
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" />
          </div>
          <div className="form-item">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="dia">Día:</label>
            <input type="text" id="dia" name="dia" placeholder="DD/MM/AAAA" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" name="hora" />
          </div>
          <div className="form-item">
            <label htmlFor="mensaje">Detalle de Consulta:</label>
            <textarea id="mensaje"></textarea>
          </div>
          <button className="form-button" type="submit">Solicitar</button>
        </form>
        {showMessage && (
          <section className="gracias show">
            <h2>¡Muchas Gracias!</h2>
            <p>Aquí puede ver los detalles de su consulta</p>
            <table>
              <tbody>
                <tr>
                  <td>Tipo de Mascota:</td>
                  <td>{formData.tipoMascota}</td>
                </tr>
                <tr>
                  <td>Nombre de su Mascota:</td>
                  <td>{formData.nombre}</td>
                </tr>
                <tr>
                  <td>Edad:</td>
                  <td>{formData.edad}</td>
                </tr>
                <tr>
                  <td>Raza:</td>
                  <td>{formData.raza}</td>
                </tr>
                <tr>
                  <td>Tipo de Consulta:</td>
                  <td>{formData.tipo}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{formData.mail}</td>
                </tr>
                <tr>
                  <td>Dirección:</td>
                  <td>{formData.direccion}</td>
                </tr>
                <tr>
                  <td>Día:</td>
                  <td>{formData.dia}</td>
                </tr>
                <tr>
                  <td>Hora:</td>
                  <td>{formData.hora}</td>
                </tr>
                <tr>
                  <td>Detalle de Consulta:</td>
                  <td>{formData.mensaje}</td>
                </tr>
              </tbody>
            </table>
            <button className='btn big' type="button" onClick={handleReset}>Volver al formulario</button>
          </section>
        )}
      </section>
    </>
  );
}

export default Consulta;
