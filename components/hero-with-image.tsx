import { Button } from "./ui/button";
import { TypographyH1, TypographyP } from "./ui/typography";

export default function HeroWithImage() {
    return (
      <div className="w-[100%] min-h-[calc(100vh-56px)] grid grid-cols-2">
        <div className="w-full h-full flex flex-col items-start justify-center gap-4 px-8">
          <TypographyH1>Next Gen SaaS</TypographyH1>
          <TypographyP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            nulla cupiditate debitis, deleniti laboriosam porro iure, sint iusto
            provident, ullam minima sunt eius esse consequatur eaque. Veritatis
            laudantium corporis rerum?
          </TypographyP>
          <div className="space-x-2">
            <Button>Get Started</Button>
            <Button variant="ghost">Read Docs</Button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-center gap-4">
          <div
            className="h-[100%] w-[100%] bg-slate-200 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(https://picsum.photos/id/18/512/512)`,
            }}
          />
        </div>
      </div>
    );
  }