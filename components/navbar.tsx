import { Button } from "./ui/button";
import { TypographyAnchor, TypographyH3 } from "./ui/typography";

export default function Navbar() {
  return (
    <div className="h-[56px] flex items-center justify-between px-8 border-b-[1px] border-b-[rgba(0,0,0,0.12)]">
      <TypographyH3 className="text-black font-bold">Website</TypographyH3>

      <div className="flex gap-4 items-center justify-center">
        <TypographyAnchor href="#">Home</TypographyAnchor>
        <TypographyAnchor href="#">Cart</TypographyAnchor>
        <TypographyAnchor href="#">About</TypographyAnchor>
        <TypographyAnchor href="#">Support</TypographyAnchor>
      </div>

      <div>
        <Button variant="ghost">Login</Button>
        <Button>Create Account</Button>
      </div>
    </div>
  );
}
