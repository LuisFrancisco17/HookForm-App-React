import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      {/* nombre */}
      <div className="content">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 2,
              message: "Nombre debe tener más de 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "Nombre debe tener menos de 20 caracteres",
            },
          })}
          autoFocus
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}

        {/* correo */}
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          {...register("correo", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}

        {/* contraseña */}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        {/* confirmar contraseña */}
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Es necesario confirmar contraseña",
            },
            validate: (value) => {
              if (value === watch("password")) {
                return true;
              } else {
                return "Los passwords no coinciden";
              }
            },
          })}
        />

        {/* fechaNacimiento */}
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input
          type="date"
          {...register("fechaNacimiento", {
            required: {
              value: true,
              message: "Fecha de nacimiento requerido",
            },
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad =
                fechaActual.getFullYear() - fechaNacimiento.getFullYear();

              return edad >= 18 || "Debes ser mayor de edad";
            },
          })}
        />
        {errors.fechaNacimiento && (
          <span>{errors.fechaNacimiento.message}</span>
        )}

        {/* pais */}
        <label htmlFor="pais">País</label>
        <select
          {...register("pais", {
            required: {
              value: true,
              message: "Debe seleccionar un país",
            },
          })}
        >
          <option value="" hidden>
            Seleccionar
          </option>
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
        </select>
        {errors.pais && <span>{errors.pais.message}</span>}
        {watch("pais") == "ar" && (
          <>
            <label htmlFor="provincia">Provincias</label>
            <select
              {...register("provincia", {
                required: {
                  value: true,
                  message: "Provincia es requerida",
                },
              })}
            >
              <option value="" hidden>
                Seleccionar
              </option>
              <option value="cor">Cordoba</option>
              <option value="mdz">Mendoza</option>
              <option value="juy">Jujuy</option>
            </select>
            {errors.provincia && <span>{errors.provincia.message}</span>}
          </>
        )}

        {/* File */}
        <label htmlFor="foto">Foto de perfil</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("fotoUsuario", e.target.files[0].name);
          }}
        />

        {/* terminos */}
        <label htmlFor="terminos">Aceptar términos y condiciones</label>
        <input
          type="checkbox"
          {...register("terminos", {
            required: {
              value: true,
              message: "Acepta los términos y condiciones",
            },
          })}
        />

        {errors.terminos && <span>{errors.terminos.message}</span>}

        <button>Enviar</button>
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}

export default App;
