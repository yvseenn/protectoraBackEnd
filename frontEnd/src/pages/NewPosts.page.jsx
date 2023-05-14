import PostFormComponent from "../components/postForm/postForm.component"

const NewPostsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">New Post Page</h1>
      <main className="max-w-3xl mx-auto">
        <PostFormComponent></PostFormComponent>
      </main>
    </>
  )
}

export default NewPostsPage

