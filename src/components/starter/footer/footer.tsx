import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="bg-gradient-to-b from-background-900 to-black">
      <div class="container">
        <span>
          Made with <span class="text-red-500">❤️</span> by{" "}
          <a href="https://xav.ie">Xav.ie</a>r
        </span>
      </div>
    </footer>
  );
});
