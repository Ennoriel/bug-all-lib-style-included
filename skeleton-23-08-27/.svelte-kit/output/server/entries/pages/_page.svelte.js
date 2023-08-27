import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const CompoA_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1a7i8ec{color:red}",
  map: null
};
const CompoA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<p class="svelte-1a7i8ec" data-svelte-h="svelte-a17zc">Hello</p>`;
});
const CompoB_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> ${validate_component(CompoA, "CompoA").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
