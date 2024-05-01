import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'
import logoDynamos from '../img/logo-dynamo.png'

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors} = useAuth()

  const onSubmit = handleSubmit(data => {
    signin(data);
  })

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-900 max-w-md md:w-full p-10 rounded-xl">
        {signinErrors.map((error, i) => {
          return (
            <div className="bg-red-500 p-2 m-2 text-white absolute -mt-24" key={i}>
              {error}
            </div>
          );
        })}
        <div className="w-full flex justify-center items-center md:mb-5 sm:mb-3">
          <Link to="/"><img src={logoDynamos} alt="Imagen del logo dynamos" className="md:w-24 sm:w-20 animate-pulse"/></Link>
        </div>
        <h1 className="text-2xl text-white mb-10 text-center">
          Inicio sesión en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={onSubmit}>
        <p className='text-white'>Correo electrónico</p>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <p className='text-white mt-2 flex gap-x-2 justify-between'>
          Contraseña <Link to="/register" className='text-sky-500 hover:text-zinc-500'>¿Olvidaste tu contraseña?</Link>
        </p>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2 mb-4"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-400 w-full p-2 rounded-lg my-2">
            Entrar
          </button>
        </form>
        <p className='text-white mt-4 flex gap-x-2 justify-between select-none'>
          ¿No tienes cuenta? <Link to="/register" className='text-sky-500 hover:text-zinc-500'>Registrate</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage