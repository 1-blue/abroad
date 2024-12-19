"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { cn } from "@abroad/ui/libs";

import { useMe } from "@abroad/apis/hooks";
import {
  Avatar,
  AvatarFallback,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@abroad/ui";
import { useAuthMutations } from "@abroad/apis/hooks";

import { routes } from "#/constants/routes";
import LogInDialogButton from "#/components/common/LogInDialogButton";
import SignUpDialogButton from "#/components/common/SignUpDialogButton";
import Aside from "#/components/layouts/Aside";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { me } = useMe();

  const { logOutMutateAsync } = useAuthMutations();
  const onLogout = async () => {
    await logOutMutateAsync({});
  };

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-background lg:px-8">
      <article className="mx-auto flex max-w-screen-xl items-center justify-center px-4 py-2 lg:px-0 lg:py-0">
        <Aside />

        <section className="flex flex-1 justify-center lg:block lg:flex-initial">
          <Link href="/">
            <figure>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={113}
                height={30}
              />
            </figure>
          </Link>
        </section>

        <ul className="hidden flex-1 justify-center gap-2 text-sm lg:flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              {...(route.path.includes("http") && { target: "_blank" })}
              className={cn(
                "relative px-3 py-6",
                pathname.includes(route.path) && "text-primary",
              )}
            >
              <span>{route.label}</span>
              {pathname.includes(route.path) && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </Link>
          ))}
        </ul>

        {me ? (
          <section className="flex items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="size-8 cursor-pointer">
                  <AvatarFallback className="text-sm">
                    {me.name[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="mr-2 flex w-fit flex-col p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toast.info("프로필 페이지 구현 예정")}
                >
                  프로필
                </Button>
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  로그아웃
                </Button>
              </PopoverContent>
            </Popover>
          </section>
        ) : (
          <section className="flex gap-4 text-xs">
            <LogInDialogButton />
            <SignUpDialogButton />
          </section>
        )}
      </article>
      <ul className="flex gap-4 border-t border-zinc-200 px-4 text-xs lg:hidden">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            {...(route.path.includes("http") && { target: "_blank" })}
            className={cn(
              "relative px-2 py-4",
              pathname.includes(route.path) && "text-primary",
            )}
          >
            <span>{route.label}</span>
            {pathname.includes(route.path) && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
            )}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
