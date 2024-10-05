'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Pencil, Trash2, Save } from 'lucide-react'

export default function ArticlePage() {
  const { id } = useParams()
  const router = useRouter()
  const [article, setArticle] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')
  const [editedContent, setEditedContent] = useState('')

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    const foundArticle = articles.find((a) => a.id.toString() === id)
    setArticle(foundArticle)
  }, [id])

  if (!article) {
    return <div>Loading...</div>
  }

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      const articles = JSON.parse(localStorage.getItem('articles') || '[]')
      const updatedArticles = articles.map((a) =>
        a.id.toString() === id
          ? { ...a, title: editedTitle, content: editedContent }
          : a
      )
      localStorage.setItem('articles', JSON.stringify(updatedArticles))
      setArticle({ ...article, title: editedTitle, content: editedContent })
    } else {
      // Enter edit mode
      setEditedTitle(article.title)
      setEditedContent(article.content)
    }
    setIsEditing(!isEditing)
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this article?')) {
      const articles = JSON.parse(localStorage.getItem('articles') || '[]')
      const updatedArticles = articles.filter((a) => a.id.toString() !== id)
      localStorage.setItem('articles', JSON.stringify(updatedArticles))
      router.push('/')
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          {isEditing ? (
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="text-2xl font-bold"
            />
          ) : (
            <CardTitle>{article.title}</CardTitle>
          )}
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full min-h-[200px]"
            />
          ) : (
            <p>{article.content}</p>
          )}
        </CardContent>
        <CardFooter className="text-sm text-gray-500 flex justify-between items-center">
          <span>
            By {article.author} on {article.date}
          </span>
          <div className="space-x-2">
            <Button
              onClick={handleEdit}
              variant="outline"
              size="sm"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </>
              ) : (
                <>
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </>
              )}
            </Button>
            <Button
              onClick={handleDelete}
              variant="outline"
              size="sm"
              className="bg-red-50 text-red-700 hover:bg-red-100"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
