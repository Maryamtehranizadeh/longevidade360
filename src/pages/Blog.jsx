import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { healthTopics } from "../utils/healthTopics";

function Blog() {
  const navigate = useNavigate();
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const handleArticleClick = (articleId) => {
    navigate(`/blog/article/${articleId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-center my-[20px]">
        Health related articles, click a topic to view articles
      </h1>
      <div className="space-y-2 my-10">
        {healthTopics.map((topic) => (
          <div key={topic.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleTopic(topic.id)}
              className={`w-full p-4 text-left font-semibold text-lg flex justify-between items-center
                ${
                  expandedTopic === topic.id
                    ? "bg-blue-50 text-blue-800"
                    : "bg-white hover:bg-gray-50"
                }`}
              aria-expanded={expandedTopic === topic.id}
              aria-controls={`${topic.id}-articles`}
            >
              {topic.title}
              <span className="text-gray-500">
                {expandedTopic === topic.id ? "▼" : "▶"}
              </span>
            </button>

            {expandedTopic === topic.id && (
              <div
                id={`${topic.id}-articles`}
                className="bg-gray-50 p-2 space-y-1"
                role="region"
              >
                {topic.articles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleArticleClick(article.id)}
                    className="w-full p-3 text-left hover:bg-blue-100 rounded-md transition-colors"
                  >
                    {article.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
