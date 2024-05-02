import animation1 from "../../image/animation1.jpg";
import animation2 from "../../image/animation2.jpg";
import animation3 from "../../image/animation3.png";
import backend1 from "../../image/backend1.jpg";
import backend2 from "../../image/backend2.png";
import backend3 from "../../image/backend3.png";
import frontend1 from "../../image/frontend1.jpg";
import frontend2 from "../../image/frontend2.jpg";
import frontend3 from "../../image/frontend3.jpg";
import graphics1 from "../../image/graphics1.jpg";
import graphics2 from "../../image/graphics2.jpg";
import graphics3 from "../../image/graphics3.webp";
import iot1 from "../../image/iot1.jpg";
import iot2 from "../../image/iot2.png";
import iot3 from "../../image/iot3.jpg";
import ui1 from "../../image/ui1.jpg";
import ui2 from "../../image/ui2.jpg";
import ui3 from "../../image/ui3.jpg";

const CoursesData = [
  {
    category: "UIUX",
    courses: [
      {
        Title: "UI/UX Design Terminology",
        Name: "Rrittick Dey",
        Url: ui1,
      },
      {
        Title: "Common Design Patterns",
        Name: "John Smith",
        Url: ui2,
      },
      {
        Title: "Web Developer",
        Name: "Patrick Lyon",
        Url: ui3,
      },
    ],
  },
  {
    category: "Graphic",
    courses: [
      {
        Title: "Graphics Manager",
        Name: "Mahmud iqbal",
        Url: graphics1,
      },
      {
        Title: "Web Design",
        Name: "Abdullah iqbal",
        Url: graphics2,
      },
      {
        Title: "Web Developer",
        Name: "Hello iqbal",
        Url: graphics3,
      },
    ],
  },
  {
    category: "Animation",
    courses: [
      {
        Title: "Graphics Manager",
        Name: "Mahmud iqbal",
        Url: animation1,
      },
      {
        Title: "Web Design",
        Name: "Abdullah iqbal",
        Url: animation2,
      },
      {
        Title: "Web Developer",
        Name: "Hello iqbal",
        Url: animation3,
      },
    ],
  },
  {
    category: "Frontend",
    courses: [
      {
        Title: "Graphics Manager",
        Name: "Mahmud iqbal",
        Url: frontend1,
      },
      {
        Title: "Web Design",
        Name: "Abdullah iqbal",
        Url: frontend2,
      },
      {
        Title: "Web Developer",
        Name: "Hello iqbal",
        Url: frontend3,
      },
    ],
  },
  {
    category: "Backend",
    courses: [
      {
        Title: "Graphics Manager",
        Name: "Mahmud iqbal",
        Url: backend3,
      },
      {
        Title: "Web Design",
        Name: "Abdullah iqbal",
        Url: backend2,
      },
      {
        Title: "Web Developer",
        Name: "Hello iqbal",
        Url: backend1,
      },
    ],
  },
  {
    category: "IOT",
    courses: [
      {
        Title: "Graphics Manager",
        Name: "Mahmud iqbal",
        Url: iot3,
      },
      {
        Title: "Web Design",
        Name: "Abdullah iqbal",
        Url: iot2,
      },
      {
        Title: "Web Developer",
        Name: "Hello iqbal",
        Url: iot1,
      },
    ],
  },
];

export default CoursesData;
