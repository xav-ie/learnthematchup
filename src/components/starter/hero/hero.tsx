import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

function getMinContentHeight(element: Element) {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.height = "min-content";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";

  document.body.appendChild(clone);
  const height = clone.clientHeight;
  document.body.removeChild(clone);

  return height;
}

const Scroller = component$(() => {
  const outputRef = useSignal<Element>();
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
        <li>Smash</li>
        <li>Tekken 7</li>
        <li>Nick All Stars</li>
        <li>Street Fighter V</li>
        <li>Mortal Kombat 11</li>
        <li>Dragon Ball FighterZ</li>
        <li>Soulcalibur VI</li>
        <li>Guilty Gear Strive</li>
        <li>More soon!</li>
        <li>Smash</li>
        <li>Tekken 7</li>
        <li>Nick All Stars</li>
        <li>Street Fighter V</li>
        <li>Mortal Kombat 11</li>
        <li>Dragon Ball FighterZ</li>
        <li>Soulcalibur VI</li>
        <li>Guilty Gear Strive</li>
        <li>More soon!</li>
      </ul>
    </div>
  );
});

export default component$(() => {
  const outputRef = useSignal<Element>();
  // first, we set to value we know is bigger than screen
  const componentHeight = useSignal<string>("100vh");

  useVisibleTask$(() => {
    const header = document.querySelector("header");
    if (outputRef.value && header) {
      // we want to measure the natural height of the Element
      const absoluteMinimumHeight = getMinContentHeight(outputRef.value);
      const headerRect = header.getBoundingClientRect();
      outputRef.value.classList.add("opacity-100");
      // then we shrink to size of screen - height of header --
      // or the absoluteMinimumHeight for really short screens
      componentHeight.value = `${Math.max(
        window.innerHeight - headerRect.height,
        absoluteMinimumHeight,
      )}px`;
      // starting small would have meant initial flash of content
      // below element, then growing to size, but we don't want any of that
    }
  });

  return (
    <div
      class={[
        `flex flex-col items-center justify-between gap-8  opacity-0 transition-[height,opacity] duration-500`,
      ]}
      style={{
        height: componentHeight.value,
      }}
      ref={outputRef}
    >
      <div>{/*dummy*/}</div>
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
