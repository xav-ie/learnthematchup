import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const Scroller = component$(() => {
  const outputRef = useSignal<Element>();
  const games = [
    "Smash",
    "Tekken 7",
    "Nick All Stars",
    "Street Fighter V",
    "Mortal Kombat 11",
    "Dragon Ball FighterZ",
    "Soulcalibur VI",
    "Guilty Gear Strive",
    "More soon!",
  ]
  useVisibleTask$(() => {
    if (outputRef.value) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        outputRef.value.setAttribute("data-animated", "true");
      }
    }
  });

  return (
    <div class="scroller" ref={outputRef}>
      <ul>
        {games.map((game) => (<li key={game}>{game}</li>))}
        {games.map((game) => (<li key={game}>{game}</li>))}
      </ul>
    </div>
  );
});

export default component$(() => {
  const outputRef = useSignal<Element>();

  useVisibleTask$(() => {
    if (outputRef.value) {
      outputRef.value.classList.add("opacity-100");
    }
  });

  return (
    <div
      class={[
        `flex flex-col h-full items-center justify-between gap-8 pt-4 pb-8 opacity-0 transition-[height,opacity] duration-500`,
      ]}
      ref={outputRef}
    >
      <div>{/*dummy for spacing*/}</div>
      <div class="container flex flex-col items-center gap-4">
        <h1 class="text-center">
          Your go-to <span class="highlight">source</span> for game matchup{" "}
          <span class="highlight">insights</span>.
        </h1>
        <p>SSBU for now, more games coming soon!</p>
        <Link href="/games/ssbu" class="button button-dark">
          Explore Matchups
        </Link>
      </div>
      <Scroller />
    </div>
  );
});
