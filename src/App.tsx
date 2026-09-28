import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-800">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="mx-auto max-w-md p-8">
          <UserPage />
          <Login />
        </main>
      </div>
    </div>
  )
}

export default App