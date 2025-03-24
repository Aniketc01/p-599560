import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center gap-10 bg-white px-[120px] py-[60px] max-md:px-5 max-md:py-[30px] max-sm:px-[15px] max-sm:py-5">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c7e68255b2d7aec7bb07d2d0fb6bb7c7fbdb5d"
          alt="TitleMine"
          className="w-[102px] h-11"
        />
      </Link>
      <nav className="flex gap-10 max-md:hidden">
        <Link to="/" className="text-base cursor-pointer px-0 py-2.5">
          Home
        </Link>
        <Link to="/what-we-do" className="text-base cursor-pointer px-0 py-2.5">
          What We Do
        </Link>
        <Link
          to="/early-access"
          className="text-base cursor-pointer px-0 py-2.5"
        >
          Early Access Program
        </Link>
        <Link to="/contact" className="text-base cursor-pointer px-0 py-2.5">
          Contact Us
        </Link>
      </nav>
      <button className="w-[168px] text-center text-sm font-medium shadow-[0_4px_14px_rgba(92,46,46,0.25)] bg-[rgba(229,229,229,0.81)] ml-auto px-0 py-[11px] rounded-[5px]">
        Log in
      </button>
    </header>
  );
};
