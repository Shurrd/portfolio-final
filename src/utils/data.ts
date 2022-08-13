import Fitness from "../images/fitness.png";
import IpTracker from "../images/iptracker.png";
import RestCountries from "../images/restcountries.png";
import Tiktik from "../images/tiktik.png";

const projects = [
  {
    id: 1,
    name: "TIKTIK",
    github: "https://github.com/Shurrd/Tiktok-clone",
    url: "https://tiktok-clone-sigma-pied.vercel.app/",
    image: Tiktik,
    description:
      "This is a Tiktok clone! You can Sign In using Google Authentication, you can upload videos, comment on videos,view posts based on your favourite topics, view your profile and also search your other friends or other people's profile.",
    tools: [
      { label: "Next JS and TypeScript" },
      { label: "Tailwind CSS" },
      { label: "Axios" },
      { label: "Google Auth" },
      { label: "Zustand" },
      { label: "Sanity" },
    ],
  },
  {
    id: 2,
    name: "REST COUNTRIES API",
    github: "https://github.com/Shurrd/rest-countries-api",
    url: "https://restcountries-api-abraham.netlify.app",
    image: RestCountries,
    description:
      "This displays all the countries in the world, you can search for a specific country and filter based on any region of your choice and all comes with a dark mode option.",
    tools: [
      { label: "React JS" },
      { label: "React Router DOM" },
      { label: "Rest-Contries API" },
      { label: "Tailwind CSS" },
      { label: "Context API(useContext)" },
    ],
  },
  {
    id: 3,
    name: "IP ADDRESS TRACKER",
    github: "https://github.com/Shurrd/ip-tracker",
    url: "https://iptrackerabraham.netlify.app/",
    image: IpTracker,
    description:
      "You can track any IP Address in the world and also on page load, you can view your current Ip Address which includes the location on the map, the timezone in UTC and the ISP.",
    tools: [
      { label: "React JS" },
      { label: "Leaflet JS" },
      { label: "Geo Ipify API" },
      { label: "Tailwind CSS" },
      { label: "Context API(useContext)" },
    ],
  },
  {
    id: 4,
    name: "FEETNESS GYM",
    github: "https://github.com/Shurrd/Gym-Exercises",
    url: "https://myfeetnessgym.netlify.app",
    image: Fitness,
    description:
      "  Are you feeling unfit, feetness gym is the best website for you to track your fitness life and also get new exercise videos from youtube and you also have the opportunity to see similar exercises relating to your proposed exercise.",
    tools: [
      { label: "React JS" },
      { label: "Material UI" },
      { label: "ExerciseDB API" },
      { label: "YoutubeDB API" },
      { label: "React Router DOM" },
    ],
  },
];

export default projects;
