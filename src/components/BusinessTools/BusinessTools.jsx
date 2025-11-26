import React from "react";
import "./businessTools.css";
import { MdAssignmentTurnedIn, MdPublic, MdCalendarToday, MdPeople, MdMenuBook, MdCardTravel } from "react-icons/md";

const BusinessTools = ({ language, t }) => {
  const tools = [
    {
      id: 1,
      icon: MdAssignmentTurnedIn,
      title: "Business Plan",
      description: "Your business roadmap",
      buttonText: "Details",
    },
    {
      id: 2,
      icon: MdPublic,
      title: "Online Marketing Regulations",
      description: "Safe & smart online selling",
      buttonText: "Details",
    },
    {
      id: 3,
      icon: MdCalendarToday,
      title: "Calendar of Events",
      description: "Upcoming trainings & activities",
      buttonText: "Details",
    },
    {
      id: 4,
      icon: MdPeople,
      title: "Partner Promotions",
      description: "Exclusive rewards for partners",
      buttonText: "Details",
    },
    {
      id: 5,
      icon: MdMenuBook,
      title: "Lecture Guide",
      description: "Essential learning resources",
      buttonText: "Details",
    },
    {
      id: 6,
      icon: MdCardTravel,
      title: "Travel Rewards",
      description: "Qualification & trip details",
      buttonText: "Details",
    },
  ];

  return (
    <section className="business-tools-section">
      <div className="business-tools-bg">
        <img
          src="/images/492599373_1078600380966689_5233720880464695950_n.jpg"
          alt="Business Background"
          className="business-tools-bg-img"
        />
        <div className="business-tools-overlay"></div>
      </div>

      <div className="container">
        <div className="business-tools-content">
          {/* Header */}
          <div className="business-tools-header">
            <h1 className="business-tools-title">
              Grow Your Business With Happy MPM
            </h1>
            <p className="business-tools-subtitle">
              Tools, training, and opportunities designed for modern entrepreneurs.
            </p>
          </div>

          {/* Description */}
          <p className="business-tools-description">
            For over two decades, Happy MPM Co., Ltd. has implemented our core philosophy "Quality Leads Business." All of our policies are based on creating maximum benefit for society, while also continuously developing and growing our business. As a leader in the health and beauty network, we select natural ingredients that have undergone international research and development, and are certified for product quality standards by various institutions around the world.
          </p>

          {/* Action Buttons */}
          <div className="business-tools-actions">
            <button className="btn-start-business">
              Start Your Business <span>→</span>
            </button>
            <button className="btn-explore-tools">Explore Tools</button>
          </div>

          {/* Tools Grid */}
          <div className="business-tools-label">BUSINESS TOOLS</div>
          <div className="business-tools-grid">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div key={tool.id} className="business-tool-card">
                  <div className="tool-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="tool-title">{tool.title}</h3>
                  <p className="tool-description">{tool.description}</p>
                  <button className="tool-button">{tool.buttonText} →</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTools;
