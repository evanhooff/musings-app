import { Skeleton } from "@repo/ui";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
    </div>
  );
}
