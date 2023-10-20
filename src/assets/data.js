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

import hint1 from "../assets/hint1.gif";
import hint2 from "../assets/hint2.gif";
import hint3 from "../assets/hint3.gif";
import hint4 from "../assets/hint4.gif";

const brands = [
  { name: "Uber Eats", profileLogo: SiUbereats },
  { name: "Airbnb", profileLogo: SiAirbnb },
  { name: "Facebook", profileLogo: SiFacebook },
];

export const users = [
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

export const faqs = [
  {
    title: "What are the new changes for the Partner Program?",
    answer:
      "We’ve updated the Partner Program to incentivize high-quality human writing. Here’s a quick summary: we’ve opened up the Partner Program to more locations, removed the 100 follower requirement, and require Medium membership to join. Earnings will be higher for stories that have repeat readers, have been Boosted, and that have a high read ratio. All stories will also earn more based on engagement signals like claps, highlights, and replies. Referral bonuses are being deprecated and new story stats will be added in so writers can better understand their story earnings breakdown.",
    additionalLink:
      "Read more about all of the changes and our vision for the Partner Program.",
  },
];

export const writeOptions = [
  "Add to publications",
  "Share draft link",
  "Share to Twitter",
  "Manage unlisted setting",
  "Change featured image",
  "Change display title / subtitle",
  "Change topics",
  "see revision history",
  "More settings",
  "Hints keyboard shortcuts",
];

export const hints = [
  { name: "hint1", url: hint1 },
  { name: "hint2", url: hint2 },
  { name: "hint3", url: hint3 },
  { name: "hint4", url: hint4 },
];

export const notifications = [
  {
    user: { name: "David Berkowitz" },
    message:
      "You have a new message and I suggest you should hurry and open it right now...",
  },
  {
    user: { name: "Babara Willar" },
    message:
      "There is something that is known as foot patrol and I can guarantee you it is not what you think it is ok?...",
  },
  {
    user: { name: "David Berkowitz" },
    message:
      "You have a new message and I suggest you should hurry and open it right now...",
  },
  {
    user: { name: "Babara Willar" },
    message:
      "There is something that is known as foot patrol and I can guarantee you it is not what you think it is ok?...",
  },
  {
    user: { name: "David Berkowitz" },
    message:
      "You have a new message and I suggest you should hurry and open it right now...",
  },
  {
    user: { name: "Babara Willar" },
    message:
      "There is something that is known as foot patrol and I can guarantee you it is not what you think it is ok?...",
  },
  {
    user: { name: "David Berkowitz" },
    message:
      "You have a new message and I suggest you should hurry and open it right now...",
  },
  {
    user: { name: "Babara Willar" },
    message:
      "There is something that is known as foot patrol and I can guarantee you it is not what you think it is ok?...",
  },
];

export { posts, mainPosts, testiominials };
