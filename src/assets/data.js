import { SiUbereats, SiAirbnb, SiFacebook } from "react-icons/si";
import userProfile0 from "../assets/user0.jpg";
import userProfile1 from "../assets/user1.jpg";
import userProfile2 from "../assets/user2.jpg";

const brands = [
  { name: "Uber Eats", profileLogo: SiUbereats },
  { name: "Airbnb", profileLogo: SiAirbnb },
  { name: "Facebook", profileLogo: SiFacebook },
];

const users = [
  {
    name: "Kaniel Outis",
    profileLogo: userProfile0,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 100000),
  },
  {
    name: "David Berkowitz",
    profileLogo: userProfile1,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 10200),
  },
  {
    name: "Hanibal Lecter",
    profileLogo: userProfile2,
    bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    follows: Math.floor(Math.random() * 145000),
  },
];

const posts = [
  {
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
  },
  {
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
  },
  {
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
  },
  {
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
  },
  {
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
  },
  {
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
  },
];

export { posts };
