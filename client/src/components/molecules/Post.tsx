import PostPlaceholder from "../../assets/images/post-placeholder.png";

type PostProps = {
  src: string;
  classname?: string;
  alt: string;
  heading: string;
  p: string;
};

//{ src, classname, alt }: PostProps

const Post = () => {
  return (
    <div>
      <div>
        <img
          className={`mx-auto h-[258px] w-[287px]`}
          src={PostPlaceholder}
          alt={"sample alt"}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Post;
