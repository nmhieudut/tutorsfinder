const routes = [
  {
    path: "dashboard",
    exact: true,
    component: "dashboard",
  },
  {
    path: "courses",
    exact: true,
    component: "courses",
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
  {
    path: "tutors",
    exact: true,
    component: "tutors/Tutors",
  },
  {
    path: "needs",
    exact: true,
    component: "needs/Needs",
  },
  {
    path: "feedbacks",
    exact: true,
    component: "feedback/Feedbacks",
  },
  {
    path: "notifications",
    exact: true,
    component: "notifications/Notifications",
  },
];
export default routes;
