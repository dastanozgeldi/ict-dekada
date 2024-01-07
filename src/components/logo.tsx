import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image src="/logo.png" width={38} height={38} alt="Logo" />
      <div className="w-full -space-y-1">
        <h1 className="text-lg font-bold">Декада Информатики</h1>
        <p className="text-xs text-right">НИШ ФМН Алматы</p>
      </div>
    </Link>
  );
};
