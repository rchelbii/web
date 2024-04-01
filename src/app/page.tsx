import Expriments from "@/presentation/sections/Experiments";
import RecentWork from "@/presentation/sections/RecentWork";
import Header from "@/presentation/sections/Header";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-dark-gray">
      <main className="container mx-auto">
        <Header />
        <RecentWork />
        <Expriments />
      </main>
    </div>
  );
}
