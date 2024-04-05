import { component$ } from "@builder.io/qwik";
import Combobox from "~/components/headless/combobox/combobox";

export default component$(() => {
  return (

    <>
      <div class="p-4">
        <div>hello</div>
        <Combobox />
      </div>
    </>
  );
});
