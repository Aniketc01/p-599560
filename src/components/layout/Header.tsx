
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-[120px] py-6 max-md:px-5 max-md:py-4 max-sm:px-[15px] max-sm:py-3">
      <Link to="/" className="flex-shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c7e68255b2d7aec7bb07d2d0fb6bb7c7fbdb5d"
          alt="TitleMine"
          className="w-[102px] h-11"
        />
      </Link>
      
      <nav className="flex items-center gap-8 max-md:hidden">
        <Link to="/" className="text-base font-medium hover:text-[#5C2E2E] transition-colors">
          Home
        </Link>
        <Link to="/what-we-do" className="text-base font-medium hover:text-[#5C2E2E] transition-colors">
          What We Do
        </Link>
        <Link to="/early-access" className="text-base font-medium hover:text-[#5C2E2E] transition-colors">
          Early Access Program
        </Link>
        <Link to="/contact" className="text-base font-medium text-[#5C2E2E] border-b-2 border-[#5C2E2E] pb-1">
          Contact Us
        </Link>
      </nav>
      
      <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 text-black font-medium px-6 py-2 rounded-md">
        Log in
      </Button>
    </header>
  );
};
