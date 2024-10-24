import Button from "../atoms/Button";

type PostProps = {
  src: string;
  alt: string;
  heading: string;
  p: string;
  date: string;
  category: string;
};

const Post = ({ src, alt, heading, p, date, category }: PostProps) => {
  return (
    <div className="mx-auto mb-11 max-w-[288px]">
      <div>
        <img className={`h-[258px] w-[287px]`} src={src} alt={alt} />
      </div>
      <div>
        <p className="mt-7 text-[10px] font-bold text-[#333333]">
          {category}
          <span className="font-medium text-[#999999]">{date}</span>
        </p>
        <h3 className="mt-3.5 text-lg font-bold">{heading}</h3>
        <p className="mt-1 text-xs leading-[160%] text-[#666666]">{p}</p>
        <Button
          label="Read More..."
          classname="text-primary font-bold bg-white underline px-0 py-0"
        />
      </div>
    </div>
  );
};

export default Post;
