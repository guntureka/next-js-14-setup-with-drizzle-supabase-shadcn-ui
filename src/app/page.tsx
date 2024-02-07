import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <h1>Home</h1>
      <pre>{process.env.DATABASE_URL}</pre>
    </main>
  );
}
