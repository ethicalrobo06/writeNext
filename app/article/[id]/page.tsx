import { notFound } from 'next/navigation'

// Mock data for a single article
const article = {
  id: 1,
  title: 'Getting Started with Next.js',
  content: `
    Next.js is a popular React framework that enables you to build server-side rendered and statically generated web applications. It provides an excellent developer experience with features like automatic code splitting, optimized performance, and easy deployment.

    To get started with Next.js, you'll need to have Node.js installed on your machine. Once you have Node.js, you can create a new Next.js project using the following command:

    \`\`\`
    npx create-next-app@latest my-next-app
    \`\`\`

    This command will set up a new Next.js project with all the necessary dependencies and a basic file structure. After the installation is complete, you can navigate to your project directory and start the development server:

    \`\`\`
    cd my-next-app
    npm run dev
    \`\`\`

    Now you're ready to start building your Next.js application!
  `,
  author: 'John Doe',
  date: '2024-03-01',
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  if (parseInt(params.id) !== article.id) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600 mb-8">
        By {article.author} on {article.date}
      </div>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  )
}
