import { SiUbereats, SiAirbnb, SiFacebook } from "react-icons/si";
import userProfile0 from "../assets/user0.jpg";
import userProfile1 from "../assets/user1.jpg";
import userProfile2 from "../assets/user2.jpg";

import postImage0 from "../assets/post0.jpg";
import postImage1 from "../assets/post1.jpg";
import postImage2 from "../assets/post2.jpg";
import postImage3 from "../assets/post3.jpg";
import postImage4 from "../assets/post4.jpg";
import postImage5 from "../assets/post5.jpg";
import postImage6 from "../assets/post6.jpg";
import postImage7 from "../assets/post7.jpg";

import testiominials1 from "../assets/testimonials1.jpg";
import testiominials2 from "../assets/testimonials2.jpg";
import testiominials3 from "../assets/testimonials3.jpg";

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

const mainPosts = [
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Police Journal",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Comedy",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Lifestyle",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Horror Fiction",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "Tech",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Travel",
  },
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Tech",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Comedy",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Lifesyles",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Tech",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "Politics",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Travel",
  },
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Tech",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Tech",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Education",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Fiction",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "Politics",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Fiction",
  },
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Tech",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Tech",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Tech",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Tech",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "A I",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Medecine",
  },
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Tech",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Tech",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Tech",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Fiction",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "Politics",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Travel",
  },
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
    category: "Tech",
  },
  {
    id: 5,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
    category: "Comedy",
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
    category: "Lifestyle",
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
    category: "Fiction",
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
    category: "Fishing",
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
    category: "Tech",
  },
];
const posts = [
  {
    id: 6,
    author: users[0],
    title: "Foot Patrol",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage0,
  },
  {
    id: 1,
    author: users[1],
    title: "The difference between hospitality and hospitalized",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage1,
  },
  {
    id: 4,
    author: brands[2],
    title: "Why we act the way we do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "brand",
    imgUrl: postImage2,
  },
  {
    id: 1,
    author: users[1],
    title: "Hanibal Lecter: the gream ripper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "person",
    imgUrl: postImage3,
  },
  {
    id: 2,
    author: users[2],
    title: "Something fishy is going on here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: false,
    userType: "person",
    imgUrl: postImage4,
  },
  {
    id: 3,
    author: brands[0],
    title: "A place called home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis mi vitae est rhoncus iaculis. Duis nec iaculis est. Donec ac lacinia orci, eu ullamcorper lacus. Pellentesque id finibus sapien. Donec a augue erat. Etiam eget massa dui. Etiam finibus, nisl sit amet venenatis efficitur, mi dui sagittis metus, sed scelerisque felis magna nec risus. Curabitur lobortis sodales ligula eget dignissim. Nullam sed posuere massa, in interdum risus. Proin sit amet quam et quam sollicitudin interdum. Mauris luctus lectus et rutrum pretium. In consequat laoreet leo ut pulvinar. Aenean ullamcorper urna ex, quis imperdiet orci fermentum et. Mauris mollis neque ut nibh vestibulum posuere. Nam accumsan nec leo ut vehicula.",
    date: new Date(),
    readlength: Math.floor(Math.random() * 10),
    isMembershipOnly: true,
    userType: "brand",
    imgUrl: postImage5,
  },
];

const testiominials = [
  {
    name: "Hannibal Lecter",
    testimony:
      "Look I have to say that I gave my money to this folks out of being sorry. Did I feel good? yes. Did I get my moneys worth? maybe",
    imgUrl: testiominials2,
  },
  {
    name: "Dreymond Grey",
    testimony:
      "Look I have to say that I gave my money to this folks out of being sorry. Did I feel good? yes. Did I get my moneys worth? maybe",
    imgUrl: testiominials1,
  },
  {
    name: "Grace Floric",
    testimony:
      "Look I have to say that I gave my money to this folks out of being sorry. Did I feel good? yes. Did I get my moneys worth? maybe",
    imgUrl: testiominials3,
  },
];

export { posts, mainPosts, testiominials };
