import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <header className="flex items-center justify-center border-b border-neutral-200 bg-white py-3">
      <UserProfile />
    </header>
  )
}

export default Navbar