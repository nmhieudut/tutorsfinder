import React, { useState, useEffect } from "react";
import feedbacksServices from "../../../../api/feedbacks";
import { Rate } from "antd";
import "./index.css";
export default function FeedbacksComponents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("dataaaa", data);
  useEffect(() => {
    setLoading(true);
    feedbacksServices.getAllFeedbacks().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  const data1 = [
    {
      nameUser: "student",
      nameTutor: "tutor2",
      star: 5,
      comment: "Day nhu cc",
    },
    {
      nameUser: "student",
      nameTutor: "tutor2",
      star: 5,
      comment: "Day nhu cc",
    },
    {
      nameUser: "student",
      nameTutor: "tutor2",
      star: 1.5,
      comment: "Day nhu cc",
    },
    {
      nameUser: "student",
      nameTutor: "tutor2",
      star: 3.5,
      comment: "Day nhu cc",
    },
  ];

  return (
    <div className="container">
      {data1.map((item) => (
        <div className="feedback_card">
          <div className="feedback_tutor_things">
            <h1 style={{ fontWeight: "bold" }}>{item.nameTutor}</h1>
            <div>
              {item.star} &nbsp;
              <Rate disabled defaultValue={item.star} />
            </div>
          </div>
          <div className="feedback_user_things">
            <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>
              {item.nameUser} said:
            </h1>

            <p>{item.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
