import { useParams, useNavigate } from "react-router-dom";
import { healthTopics } from "../utils/healthTopics";

function BlogTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const topic = healthTopics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Topic not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">{topic.title}</h1>
      <p className="text-gray text-lg mb-6">{topic.description}</p>

      <ul className="space-y-4">
        {topic.articles.map((article) => (
          <li
            key={article.id}
            className="p-4 bg-secondary rounded-lg shadow-md hover:shadow-xl transition duration-500"
          >
            <h2 className="text-xl font-semibold text-primary">
              {article.title}
            </h2>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/blog")} className="mt-8 ">
        ← Back to Topics
      </button>
    </div>
  );
}

export default BlogTopic;
