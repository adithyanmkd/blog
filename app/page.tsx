import HeroSection from "./components/home/HeroSection";
import Post from "./components/home/Post";
import TopCard from "./components/home/TopCard";

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <TopCard />
      <Post />
    </div>
  );
}
