import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const articles = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    author: 'John Doe',
    date: '2024-03-01',
  },
  {
    id: 2,
    title: 'The Power of TypeScript',
    excerpt:
      'Discover why TypeScript is becoming the go-to language for web development',
    author: 'Jane Smith',
    date: '2024-02-28',
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Tips and tricks to become proficient with Tailwind CSS',
    author: 'Bob Johnson',
    date: '2024-02-27',
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to WriteNext</h1>
      <p className="text-xl text-gray-600">
        Discover stories, thinking, and expertise from writers on any topic.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{article.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-500">
                By {article.author} on {article.date}
              </div>
              <Link
                href={`/article/${article.id}`}
                className="text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
