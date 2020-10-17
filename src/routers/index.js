const routers = [
  {
    path: "dashboard",
    exact: true,
    component: "dashboard",
  },
  {
    path: "users",
    exact: true,
    component: "users/UsersManagement/Users",
  },
  {
    path: "users/:id/edit",
    exact: true,
    component: "users/UsersManagement/UsersUpdate",
  },
  {
    path: "subjects",
    exact: true,
    component: "subjects/Subjects",
  },
];
export default routers;
