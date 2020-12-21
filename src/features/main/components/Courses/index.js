import React, { useState, useEffect } from "react";
import coursesServices from "../../../../api/courses";
import "./index.css";
import course from "../../../../assets/courses.png";
import { Spin, Modal } from "antd";
export default function CoursesComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    coursesServices.getAllCourses().then((res) => {
      setData(res);
    });
  }, []);

  function courseInfo(item) {
    Modal.info({
      title: "Course Detail",
      content: (
        <div className="detail-modal">
          <p>
            <b>Student Name:</b> {item.needDetailsResp.student.username}
          </p>
          <p>
            <b>Tutor Name:</b> {item.tutor.user.username}{" "}
          </p>
          <p>
            <b>Tutor Level:</b> {item.needDetailsResp.level}
          </p>
          <p>
            <b>Address:</b> {item.needDetailsResp.place}
          </p>
          <p>
            <b>Dates:</b>
            <ol>
              {item.needDetailsResp.schedule.map((a, i) => (
                <li key={i}>{a.day}</li>
              ))}
            </ol>
          </p>
          <p>
            <b>Subject:</b> {item.needDetailsResp.subject}
          </p>
          <p>
            <b>Tuition:</b> {item.needDetailsResp.tuition} VND
          </p>
          <p>
            <b>Create time:</b> {item.needDetailsResp.createAt}
          </p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <div className="container">
      {data && data.length !== 0 ? (
        data.map((item, i) => (
          <div key={i} className="course_card">
            <div className="student-side side">
              TUTOR {item.tutor.user.username}
            </div>
            <div className="arrow-container">
              <p className="arrow-letter">&rarr;</p>
              <img
                onClick={() => courseInfo(item)}
                src={course}
                className="img"
              />
              <p className="arrow-letter">&larr;</p>
            </div>
            <div className="student-side side">STUDENT {item.student[0]}</div>
          </div>
        ))
      ) : (
        <Spin />
      )}
    </div>
  );
}
