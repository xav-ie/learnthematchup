import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from './hero.module.css'

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
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        outputRef.value.setAttribute("data-animated", "false");
      }
    }
  });

  return (
    <div class={styles.scroller} ref={outputRef} data-animated="true">
      <ul>
        {games.map((game) => (<li key={game}>{game}</li>))}
        {games.map((game) => (<li key={game} class={styles.scrollerShowOnAnimate}>{game}</li>))}
      </ul>
    </div>
  );
});

export default component$(() => {
  const outputRef = useSignal<Element>();

  useVisibleTask$(() => {
    if (outputRef.value) {
      outputRef.value.classList.remove("opacity-0");
    }
  },
    { strategy: 'document-ready' }
  );

  return (
    <div
      class={[
        'flex flex-col h-full items-center justify-between gap-8 pt-4 pb-8 transition-[height,opacity] duration-500', 'opacity-0'
      ]}
      ref={outputRef}
    >
      <div>{/*dummy for spacing*/}</div>
      <div class="container flex flex-col items-center gap-4">
        <h1 class="text-center">
          Your go-to <span class="highlight">source</span> for game matchup{" "}
          <span class="highlight">insights</span>.
        </h1>
        <p class="text-center">SSBU for now, more games coming soon!</p>
        <Link href="/games/ssbu" class="button button-dark">
          Explore Matchups
        </Link>
      </div>
      <Scroller />
    </div>
  );
});
