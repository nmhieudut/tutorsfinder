import React, { useState, useEffect } from "react";
import SubjectServices from "../../../../../api/SubjectServices";
import { List, Card } from "antd";
import images from "./images";
const { Meta } = Card;

export default function SubjectComponents() {
  const [data, setData] = useState(null);

  console.log("data", data);
  useEffect(() => {
    async function fetchSubjects() {
      const response = await SubjectServices.getSubjects();
      if (response) {
        setData(response.data);
        const newData = response.data.map((item, index) => {
          return {
            ...item,
            ...images[index],
          };
        });
        setData(newData);
      }
    }
    fetchSubjects();
  }, []);

  return (
    <div>
      {data ? (
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
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} />}
              >
                <Meta title={item.nameSubject} />
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
