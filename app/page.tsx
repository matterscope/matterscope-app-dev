import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Matterscope PM Product Management
      </h1>
      <p className="mb-4">
        {`Matterscope provides innovative solutions to manage your tasks and projects efficiently.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
