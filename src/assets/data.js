import { SiUbereats, SiAirbnb, SiFacebook } from "react-icons/si";
import userProfile0 from "../assets/user0.jpg";
import userProfile1 from "../assets/user1.jpg";
import userProfile2 from "../assets/user2.jpg";

const brandsLogos = [
  { name: "uber", logo: SiUbereats },
  { name: "airbnb", logo: SiAirbnb },
  { name: "facebook", logo: SiFacebook },
];

const users = [
  {
    name: "Kaniel Outis",
    imgUrl: userProfile0,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 100000),
  },
  {
    name: "Kaniel Outis",
    imgUrl: userProfile1,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 10200),
  },
  {
    name: "Kaniel Outis",
    imgUrl: userProfile2,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 145000),
  },
];

export { brandsLogos, users };
