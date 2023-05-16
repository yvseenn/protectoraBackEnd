import { useContext, useState } from "react";
import { PostContext } from "../../context/post.context";

export default function PostFormComponent() {
  const [post, setPost] = useState({ title: "", text: "", image: null });
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { addPost } = useContext(PostContext);

  function modifyInput(e) {
    if (e.target.name === "image") {
      setPost({ ...post, [e.target.name]: e.target.files[0] });
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
  }

  async function createPost() {
    try {
      setMsgSuccess("");
      setLoading(true);

      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("text", post.text);
      formData.append("image", post.image);

      await addPost(formData);

      setLoading(false);
      setPost({ title: "", text: "", image: null });
      setMsgError("");
      setMsgSuccess("Post Published");

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      setMsgError(e.message);
      setMsgSuccess("");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="my-8">
        <input
          className="w-full border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          name="title"
          value={post.title}
          onChange={modifyInput}
          placeholder="Title"
        />
      </div>
      <div className="my-8">
        <textarea
          className="w-full border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          name="text"
          value={post.content}
          onChange={modifyInput}
          placeholder="Text"
        />
      </div>
      <div className="my-8 border-2 border-black p-2 rounded-md">
        <input
          type="text"
          name="image"
          onChange={modifyInput}
          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Image URL"
        />
      </div>

      <div className="my-8">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : null}
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={createPost}
        >
          Publish
        </button>
      </div>
      {msgSuccess ? (
        <div className="my-4 text-green-500">
          <small>{msgSuccess}</small>
        </div>
      ) : null}
      {msgError ? (
        <div className="my-4 text-red-500">
          <small>{msgError}</small>
        </div>
      ) : null}
    </div>
  );
}
