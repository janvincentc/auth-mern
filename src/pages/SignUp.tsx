import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

const Auth = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="text-4xl font-semibold my-7 text-center">Sign Up</div>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          className="transition ease-in-out delay-150 bg-slate-700 rounded-lg p-3 
         text-white uppercase hover:bg-indigo-500 
         duration-300 disabled:opacity-50"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account already?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default Auth
