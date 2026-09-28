import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div className="flex flex-col items-center gap-1 text-center text-sm">
      {user.name && user.email ? (
        <>
          <p className="font-medium text-neutral-900">{user.name}</p>
          <p className="text-neutral-500">{user.email}</p>
        </>
      ) : (
        <p className="text-neutral-500">Nobody's logged in yet</p>
      )}
    </div>
  )
}

export default UserProfile