
function App() {

  return (
    <form>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text"/>

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email"/>

      {/* contraseña */}
      <label htmlFor="password">Contraseña</label>
      <input type="password"/>

      {/* confirmar contraseña */}
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password"/>

      {/* fechaNacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input type="date"/>

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select>
        <option>Seleccionar</option>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* File */}
      <label htmlFor="file">Foto de perfil</label>
      <input type="file"/>

      {/* terminos */}
      <label htmlFor="terminos">Acepto los terminos y condiciones</label>
      <input type="checkbox"/>
       
       <button>Enviar</button>
    </form>
  )
}

export default App
