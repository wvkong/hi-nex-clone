import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ScrollButton } from "@/components/scroll-button";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default HomeLayout;
