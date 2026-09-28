import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="flex w-64 shrink-0 flex-col items-center gap-4 border-r border-neutral-200 bg-white p-6">
      <UserProfile />
      <button
        onClick={handleLogout}
        className="rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
      >
        Logout
      </button>
    </aside>
  )
}

export default Sidebar