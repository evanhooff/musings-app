import { cn } from "@repo/ui/lib";
import { Attacker } from "./attacker";
import { Action } from "./action";
import { Defender } from "./defender";
import { Menu } from "./menu";

interface GridProps {
    className?: string;
    children?: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ className, children }) => {
    return (
      <div className={cn("bg-white/50 grid grid-flow-col grid-rows-4", className)}>
          <Attacker className="grid grid-cols-3">
            <div>Name + Health</div>
            <div className="col-span-2">Image</div>
          </Attacker>
          <Action className="">
            <div>Animation</div>
          </Action>
          <Defender className="grid grid-cols-3">
            <div className="col-span-2">Image</div>
            <div>Name + Health</div>
          </Defender>
          <Menu className="grid grid-cols-3">
            <div>Choice 1</div>
            <div>Choice 2</div>
            <div>Choice 3</div>
          </Menu>
      </div>
    );
};

export { Grid };