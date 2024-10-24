import Button from "../atoms/Button";

type PostHeaderType = {
  heading: string;
};

const PostHeader = ({ heading }: PostHeaderType) => {
  return (
    <div className="mb-8 mt-12 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-[#333333]">{heading}</h1>
      <Button label="view All" />
    </div>
  );
};

export default PostHeader;
