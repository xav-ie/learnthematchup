import { Slot, component$ } from "@builder.io/qwik";
import { LTMLogo } from "../icons/ltm";
import { Link, useLocation } from "@builder.io/qwik-city";

const ComingSoonLink = component$(() => {
  return (
    <a
      onClick$={(e) => {
        e.stopPropagation();
        alert("You will have to wait a little while before I get to this!");
      }}
      href="#soon"
      class="rounded p-1 italic text-foreground-100 opacity-50 transition hover:bg-foreground-100/25 hover:text-foreground-100"
    >
      <Slot /> (coming soon)
    </a>
  );
});

type GameLinkProps = { url: string };
const GameLink = component$<GameLinkProps>(({ url }) => {
  const pathnameParts = useLocation().url.pathname.split("/").filter(Boolean);
  const isActive = pathnameParts.includes(url);
  return (
    <Link
      class={[
        isActive
          ? "bg-foreground-100 text-background-900 hover:text-background-900"
          : "text-foreground-100 hover:bg-foreground-100/25 hover:text-foreground-100",
        "inline-flex rounded p-1 underline transition ",
      ]}
      href={`/games/${url}`}
    >
      <Slot />
    </Link>
  );
});
export default component$(() => {
  const pathnameParts = useLocation().url.pathname.split("/").filter(Boolean);
  const isRoot = pathnameParts.length === 0;

  return (
    <header>
      <div class={["container", "flex flex-wrap justify-between gap-8"]}>
        <Link
          href="/"
          title="Learn the Mathcup"
          class={[
            "flex h-12 rounded p-1 transition",
            isRoot
              ? "border-background-900 bg-foreground-100 fill-background-900"
              : "border-foreground-100 bg-transparent fill-foreground-100 hover:bg-foreground-100/25",
          ]}
        >
          <LTMLogo />
        </Link>
        <div class="flex gap-4">
          <ul class="flex flex-col gap-4 p-0">
            <li>
              <GameLink url="ssbu">SSBU</GameLink>
            </li>
            <li>
              <ComingSoonLink>Tekken 7</ComingSoonLink>
            </li>
            <li>
              <ComingSoonLink>Nick All Stars</ComingSoonLink>
            </li>
            <li>
              <ComingSoonLink>More games</ComingSoonLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
