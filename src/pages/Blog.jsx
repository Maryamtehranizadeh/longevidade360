import { useNavigate } from "react-router-dom";
import { healthTopics } from "../utils/healthTopics";

function Blog() {
  const navigate = useNavigate();

  const handleClick = (topicId) => {
    navigate(`/blog/topic/${topicId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Health Articles
      </h1>
      <p className="text-center text-primary mb-8">
        Choose a topic to explore guides and articles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {healthTopics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleClick(topic.id)}
            className="block w-full text-left rounded-xl shadow-lg p-6 bg-secondary hover:shadow-3xl hover:bg-secondary hover:scale-110 transition duration-700"
          >
            <h2 className="text-xl font-bold text-primary mb-2">
              {topic.title}
            </h2>
            <p className="text-gray text-base">{topic.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
