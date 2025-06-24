
import { Button, Canvas } from "@repo/ui";
import Link from "next/link";
import { Grid } from "./components/grid";

export default function Page() {
  return (
    <>
      <Button size="sm" color="primary">
        <Link href="/games">All games</Link>
      </Button>
      <h2 className="text-center my-4">Pokemon</h2>
      <Canvas className="grow bg-white/20 flex">
        <Grid className="grow" />
      </Canvas>
    </>
  );
}
