import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
function DeleteButton({ item, loading, onSelected }) {
  return (
    <>
      <Button
        danger
        icon={<DeleteOutlined />}
        loading={loading}
        type="primary"
        onClick={() => {
          onSelected(item.id);
        }}
      ></Button>
    </>
  );
}

export default DeleteButton;
