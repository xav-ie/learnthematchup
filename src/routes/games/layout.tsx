import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  // const loc = useLocation();
  // const lastPartOfPath = loc.url.pathname.split("/").filter(Boolean).pop();
  // const dudRoutes = ["ssbu"];
  // const isDud = lastPartOfPath && dudRoutes.includes(lastPartOfPath);
  return (
    <>
      <Slot />
    </>
  );
});
