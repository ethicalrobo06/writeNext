'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import ShareButton from '@/app/components/ShareButton'

export default function CreateArticle() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [articleUrl, setArticleUrl] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // typically send the data
    const newArticle = {
      id: Date.now(), // Generate a unique ID
      title,
      content,
      excerpt: content.slice(0, 100) + '...', // Create an excerpt from the content
      author: 'Anonymous', // You can add a proper author management later
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    }
    console.log('Submitting article:', { title, content })

    // Send the new article to the server (simulated with localStorage for now)
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    articles.push(newArticle)
    localStorage.setItem('articles', JSON.stringify(articles))

    setSubmitted(true)
    setArticleUrl(`${window.location.origin}/article/${newArticle.id}`) // Assuming you have an article page with this URL structure

    setTitle('')
    setContent('')
    alert('Article submitted successfully!')
    // Remove the immediate redirect
    // router.push('/')
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Article Published!</h1>
        <p className="mb-4">Your article has been successfully published.</p>
        <p className="mb-4">Share your article:</p>
        <div className="flex justify-center mb-4">
          <ShareButton url={articleUrl} title={title} />
        </div>
        <Button onClick={() => router.push('/')} className="mt-4">
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Create a New Story</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1"
            rows={10}
          />
        </div>
        <Button type="submit">Publish Story</Button>
      </form>
    </div>
  )
}
