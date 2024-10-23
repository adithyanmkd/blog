import Button from "../atoms/Button";

//static files
import HeroSectionImg from "../../assets/images/heroSection.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-primary py-[42px] pl-6 pr-12">
      <div>
        <p className="text-xs font-bold text-white">Featured Post</p>
        <h1 className="text-4xl font-bold leading-[120%] text-white">
          How AI Will Change the Future
        </h1>
        <p className="mt-[19px] text-xs leading-[160%] text-white">
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <Button
          label="Read more"
          classname="bg-white !text-darkGray text-xs font-bold"
        />
      </div>
      <div className="mt-14 h-[330px] w-[327px]">
        <img src={HeroSectionImg} alt="hero section img"></img>
      </div>
    </div>
  );
};

export default HeroSection;
