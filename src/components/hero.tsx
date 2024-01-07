import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[92vh] flex items-center">
      <div className="w-full space-y-8 flex flex-col items-center lg:flex-row lg:justify-between lg:gap-8">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Добро пожаловать в декаду информатики!
          </h1>

          <div>
            <Link href="/#timetable">
              <Button
                size="lg"
                className="text-xl bg-[#536DFE] hover:bg-[#536DFE]/90"
              >
                Расписание
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            className="w-full"
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
