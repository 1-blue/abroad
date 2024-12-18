"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@abroad/ui";
import { cn } from "@abroad/ui/libs";

import { routes } from "#/constants/routes";

const Aside: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0">
          <ul className="flex flex-1 flex-col justify-center text-sm">
            {routes.map((route) => (
              <SheetClose asChild key={route.path}>
                <Link
                  href={route.path}
                  {...(route.path.includes("http") && { target: "_blank" })}
                  className={cn(
                    "relative p-4",
                    pathname.includes(route.path) &&
                      "font-semibold text-primary",
                  )}
                >
                  <span>{route.label}</span>
                  {pathname.includes(route.path) && (
                    <div className="absolute bottom-[calc(50%-4px)] right-4 h-2 w-2 rounded-full bg-primary" />
                  )}
                </Link>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default Aside;
