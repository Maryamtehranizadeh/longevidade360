import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { healthTopics } from "../utils/healthTopics";

function BlogTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = healthTopics.find((t) => t.id === topicId);
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-error">Topic not found</h1>
        <button onClick={() => navigate("/blog")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        {topic.title}
      </h1>
      <p className="text-center text-gray text-lg mb-10">{topic.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {topic.articles.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`block w-full text-left p-4 rounded-lg shadow-sm hover:shadow-md transition bg-secondary ${
                selectedArticle?.id === article.id
                  ? "border-2 border-primary"
                  : ""
              }`}
            >
              <h2 className="text-lg font-semibold text-primary">
                {article.title}
              </h2>
            </button>
          ))}
        </div>

        <div className="p-6 border rounded-xl shadow-inner bg-secondary min-h-[150px] flex items-center justify-center">
          {selectedArticle ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-2">
                {selectedArticle.title}
              </h2>
              <p className="text-lg text-primary italic">
                {selectedArticle.summary}
              </p>
            </div>
          ) : (
            <p className="text-gray">
              Select an article from the left column to see the summary and
              refrence link.
            </p>
          )}
        </div>
      </div>

      <div className="text-center mt-10">
        <button onClick={() => navigate("/blog")}>← Back to Topics</button>
      </div>
    </div>
  );
}

export default BlogTopic;
