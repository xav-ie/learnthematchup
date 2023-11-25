import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class={[
        "container",
        "flex h-[calc(100dvh_-_150px)] flex-col items-center justify-center gap-8",
      ]}
    >
      <h1>
        Your go-to <span class="highlight">source</span> for game matchup{" "}
        <span class="highlight">insights</span>.
      </h1>
      <p>SSBU for now, more games coming soon!</p>
      <Link href="/matchups" class="button button-dark">
        Explore Matchups
      </Link>
    </div>
  );
});
