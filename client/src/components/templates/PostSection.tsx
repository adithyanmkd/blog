import Post from "../molecules/Post";
import PostHeader from "../molecules/PostHeader";

const postData = [
  {
    src: "posts/post-placeholder.png",
    heading: "8 Rules of Travelling In Sea You Need To Know",
    p: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    alt: "post",
    date: "13 March 2023",
    category: "Travel",
  },
];

const PostSection = () => {
  return (
    <>
      <PostHeader heading="Our Recent Post" />
      {postData.map((data, index) => (
        <Post key={index} {...data} />
      ))}
      <PostHeader heading="Popular Post" />
    </>
  );
};

export default PostSection;
