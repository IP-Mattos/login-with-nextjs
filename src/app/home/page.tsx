import LogoutButton from '@/components/LogOut'
import Users from './components/Users'

async function getData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const res = await fetch('http://localhost:3000/api/users')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function HomePage() {
  const { users } = await getData()
  return (
    <main>
      <Users users={users} />
      <LogoutButton />
    </main>
  )
}
