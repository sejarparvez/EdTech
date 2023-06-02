import CoursesData from "./CoursesData";

type TabData = {
  title: string;
  courses: Course[];
};

type Course = {
  Title: string;
  Name: string;
  Url: string;
};

const tabsData: TabData[] = [
  { title: "UI/UX Design", courses: CoursesData[0].courses },
  { title: "Graphic Design", courses: CoursesData[1].courses },
  { title: "3D & Animation", courses: CoursesData[2].courses },
  { title: "Front-End", courses: CoursesData[3].courses },
  { title: "Back-End", courses: CoursesData[4].courses },
  { title: "IOT", courses: CoursesData[5].courses },
];

export default tabsData;
