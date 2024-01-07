import Image from "next/image";
import { Logo } from "./logo";

export const Nav = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Logo />
      </div>

      <div className="flex items-center space-x-3">
        <a
          href="https://t.me/+C8sgkBvdtww1YmVi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Telegram Channel"
            src="/telegram.png"
            width={28}
            height={28}
          />
        </a>
        <a
          href="https://github.com/dastanozgeldi/ict-dekada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="Source Code" src="/github.png" width={28} height={28} />
        </a>
      </div>
    </header>
  );
};
