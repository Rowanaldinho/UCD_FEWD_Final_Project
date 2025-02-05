import TabbedMenu from "./TabbedMenu.svelte";

const target = document.getElementById("svelte-menu");

if (target) {
  new TabbedMenu({ target });
}

