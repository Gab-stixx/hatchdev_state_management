import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      // Perform login logic here
      console.log('Logging in with:', { name, email })
      dispatch(setUser({ name, email }))
    }
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-medium text-neutral-900">
        Hey, welcome back 👋
      </h2>

      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-neutral-600">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-neutral-600">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login