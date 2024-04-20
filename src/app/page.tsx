import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-medium text-sky-700">Hello!</p>
      <Button>Click Me</Button>
    </>
  );
}
