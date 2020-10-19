import React, { useState, useEffect } from "react";
import SubjectServices from "../../../../../api/SubjectServices";
import { List, Card, Avatar } from "antd";

export default function SubjectComponents() {
  const [data, setData] = useState(null);
  const images = [
    {
      image:
        "https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148154055.jpg?size=626&ext=jpg",
    },
    {
      image:
        "https://clas.ucdenver.edu/english/sites/default/files/styles/hero/public/hero/litx.jpg?itok=4wgM2Ve7",
    },
    {
      image:
        "https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_3907102/Image/hand-drawn-science-education-background_23-2148499326.jpg",
    },
    {
      image:
        "https://cdn1.iconfinder.com/data/icons/studing-discipline/100/10-512.png",
    },
    {
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/94/66/subject-of-chemistry-vector-1239466.jpg",
    },
    {
      image:
        "https://image.shutterstock.com/image-vector/history-subject-conceptlettering-card-vector-600w-1110756569.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-vector/geography-subject-with-worldmap-books_1308-30998.jpg?size=626&ext=jpg",
    },
    {
      image:
        "https://www.kwena.net/wp-content/uploads/2019/09/AdobeStock_181971672-1024x648-1.jpg",
    },
    {
      image:
        "https://st2.depositphotos.com/3591429/5246/i/950/depositphotos_52462701-stock-photo-people-and-english-concept.jpg",
    },
    {
      image:
        "https://sites.google.com/site/kxh123456/_/rsrc/1467889057946/tai-lieu-tham-khao-my-thuat/Art-icon.png?height=400&width=400",
    },
  ];

  useEffect(() => {
    SubjectServices.getSubjects().then((res) => {
      setData(res.data);
    });
  }, []);
  console.log("datum", data);
  if (data) {
    data.map((item, index) => {
      const newData = [...data];
      newData.push(Object.assign(item[index], images[index]));
      setData(newData);
    });
    console.log("data!");
  }
  return (
    <div>
      {data && (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.nameSubject}>Card content</Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
