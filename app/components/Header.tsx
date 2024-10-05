import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          WriteNext
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/create">
            <Button variant="outline">Write a story</Button>
          </Link>
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
