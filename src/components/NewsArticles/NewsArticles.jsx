import React, { useState } from "react";
import "./newsArticles.css";

const NewsArticles = ({ language, t }) => {
  const [activeTab, setActiveTab] = useState("all");

  const mainNews = {
    id: 1,
    title: "26 YEARS IGNITE FUTURE TOGETHER",
    subtitle: "INFINITE FUTURE TOGETHER\nIgnite success from 3 stages across Thailand towards a limitless future.",
    date: "5 months ago",
    image: "/images/news-articles/26 years.jpg",
    tag: "News",
  };

  const articles = [
    {
      id: 2,
      title: "Open House to new opportunities that AI-era leaders can't miss! HAPPY MPM OPEN HOUSE meets CEO and CMO.",
      date: "5 months ago",
      category: "Events",
      image: "/images/news-articles/Open House.jpg",
    },
    {
      id: 3,
      title: "Congratulations to all who qualified! Langkawi Island Voyage – June 68",
      date: "5 months ago",
      category: "Business",
      image: "/images/news-articles/Congratulations.jpg",
    },
    {
      id: 4,
      title: "We express our deepest condolences to the families of those who have passed away in the Cambodia incident.",
      date: "5 months ago",
      category: "Announcements",
      image: "/images/news-articles/We express.jpg",
    },
    {
      id: 5,
      title: "Happy MPM Grand Expo at the Northeastern Business Center and Lao",
      date: "5 months ago",
      category: "Events",
      image: "/images/news-articles/Happy MPM.jpg",
    },
    {
      id: 6,
      title: "New Training Program Launched for Business Development",
      date: "4 months ago",
      category: "Training",
      image: "/images/news-articles/Happy MPM.jpg",
    },
    {
      id: 7,
      title: "Happy MPM Celebrates 26 Years of Excellence and Growth",
      date: "4 months ago",
      category: "Events",
      image: "/images/news-articles/26 years.jpg",
    },
    {
      id: 8,
      title: "Business Opportunity - Join Our Growing Community",
      date: "4 months ago",
      category: "Business",
      image: "/images/news-articles/Open House.jpg",
    },
  ];

  const filteredArticles = activeTab === "all" 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeTab.toLowerCase());

  const categories = ["All", "Events", "Business", "Training", "Announcements"];

  return (
    <section className="news-articles-section">
      <div className="container">
        {/* Header */}
        <div className="news-articles-header">
          <h1 className="section-title">{language === "th" ? "ข่าว & บทความ" : "News & Articles"}</h1>
        </div>

        <div className="news-articles-container">
          {/* Main News */}
          <div className="main-news-section">
            <div className="main-news-card">
              <div className="main-news-image">
                <img src={mainNews.image} alt={mainNews.title} />
                <span className="news-tag">{mainNews.tag}</span>
              </div>
              <div className="main-news-content">
                <h2 className="main-news-title">{mainNews.title}</h2>
                <p className="main-news-subtitle">{mainNews.subtitle}</p>
                <p className="news-date">{mainNews.date}</p>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="articles-section">
            {/* Category Tabs */}
            <div className="articles-header">
              <h3 className="articles-title">{language === "th" ? "บทความ" : "Articles"}</h3>
              <div className="category-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-tab ${activeTab === category.toLowerCase() ? "active" : ""}`}
                    onClick={() => setActiveTab(category.toLowerCase())}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="articles-list">
              {filteredArticles.map((article, index) => (
                <div key={article.id} className="article-item">
                  <div className="article-number">{index + 1}</div>
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="article-content">
                    <h4 className="article-title">{article.title}</h4>
                    <p className="article-date">{article.date}</p>
                  </div>
                  <button className="read-more-btn">
                    {language === "th" ? "อ่านเพิ่มเติม" : "Read more"} →
                  </button>
                </div>
              ))}
            </div>

            {/* Read All News Button */}
            <div className="read-all-news">
              <a href="#all-news" className="read-all-news-link">
                {language === "th" ? "อ่านข่าวทั้งหมด" : "Read All News"} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
