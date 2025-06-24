
import { Button } from "@repo/ui";
import Link from "next/link";

export default function Page() {
  return (
    <Button size="lg" color="secondary">
      <Link href="/games/pokemon">Pokemon</Link>
    </Button>
  );
}
