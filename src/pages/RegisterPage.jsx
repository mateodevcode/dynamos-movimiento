import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logoDynamos from "../img/logo/logo-dynamo.png";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="flex justify-center h-screen items-center md:p-10 rounded-md">
      <div className="max-w-md w-full p-10">
        {registerErrors.map((error, i) => {
          return (
            <div className="bg-red-500 p-2 m-2 text-white" key={i}>
              {error}
            </div>
          );
        })}
        <div className="w-full flex justify-center items-center">
          <Link to="/">
            <img
              src={logoDynamos}
              alt="Imagen del logo dynamos"
              className="md:w-24 sm:w-20 animate-bounce"
            />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-black mb-10 text-center">
          Crea tu cuenta en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={onSubmit}>
          <p className="font-bold">Nombre</p>
          <input
            type="text"
            name="username"
            {...register("username", { required: true })}
            className="w-full border-2 peer focus:border-2 text-black px-4 py-1 rounded-md my-2"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <p className="font-bold">Correo electrónico</p>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full border-2 text-black px-4 py-1 rounded-md my-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <p className="font-bold">Contraseña</p>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            className="w-full border-2 text-black px-4 py-1 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-400 w-full p-2 rounded-lg my-2"
          >
            Registrate
          </button>
        </form>
        <p className="text-black mt-2 p-3 flex gap-x-2 justify-between bg-gray-100 select-none md:text-base sm:text-sm">
          ¿Ya tienes una cuenta?
          <Link to="/login" className="text-indigo-600 hover:text-zinc-500">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
