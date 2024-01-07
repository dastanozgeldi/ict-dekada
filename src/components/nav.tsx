import { Logo } from "./logo";

export const Nav = () => {
  return (
    <header>
      <div className="flex items-center space-x-3">
        <Logo />
      </div>
    </header>
  );
};
