import { component$ } from "@builder.io/qwik";
import { LTMLogo } from "../icons/ltm";
import { Link } from "@builder.io/qwik-city";
// Coming soon, game selection
// <li>
//   <a
//     href="https://qwik.builder.io/docs/components/overview/"
//     target="_blank"
//   >
//     SSBU
//   </a>
// </li>
export default component$(() => {
  return (
    <header class="bg-black">
      <div class={["container", "flex flex-wrap justify-between gap-8"]}>
        <a href="/" title="qwik" class="flex h-12">
          <LTMLogo />
        </a>
        <ul class="flex flex-col gap-4 p-0">
          <li>
            <Link href="/matchups">Matchups</Link>
          </li>
          <li>
            <Link href="/clips">Clips</Link>
          </li>
          <li>
            <Link href="/tutorials">Tutorials</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
