import React from "react";
import Users from "../../../features/main/components/Users/components";

function UsersList(props) {
  return (
    <div>
      <Users searchTerm={props.searchTerm} />
    </div>
  );
}
export default UsersList;
