<script>
  import classNames from 'classnames';

  import Button from './Button.svelte';

  export let items;
  export let currentRoute;
  export let temporary = false;
  export let shown = false;

  $: isShown = shown || !temporary;

  const hide = () => (shown = false);
</script>

<nav
  class={classNames(
    $$props.class,
    'sidebar grid bg-bg-darker',
    temporary &&
      'fixed transition duration-300 z-50 md:relative md:translate-x-0',
    !isShown && '-translate-x-full'
  )}
>
  <h1 class="text-center py-6">Yeonna Discord Tools</h1>
  <ul class="px-4">
    {#each items as { label, link, icon }}
      <a href={link} on:click={hide}>
        <li
          class={classNames(
            'font-bold px-4 py-3',
            link === currentRoute && 'bg-primary rounded-lg shadow-xl'
          )}
          role="button"
        >
          <i class={classNames(icon, 'w-8')} />
          <span class="text-lg">{label}</span>
        </li>
      </a>
    {/each}
  </ul>
  <Button class="flex items-center text-left text-sm font-normal py-3" text>
    <i class="fa fa-sign-out-alt fa-lg mr-2" />
    Logout
  </Button>
  <div class="flex items-center bg-bg-light px-4 py-3">
    <img
      src="https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
      alt="avatar"
      width="36"
      class="rounded-full"
    />
    <h2 class="overflow-ellipsis overflow-hidden text-sm ml-3">
      DiscordUser#1234
    </h2>
  </div>
</nav>
<div
  class={classNames(
    'absolute w-full h-full bg-black transition duration-300 z-40',
    temporary && isShown
      ? 'pointer-events-auto opacity-40'
      : 'pointer-events-none opacity-0'
  )}
  on:click={hide}
/>

<style>
  .sidebar {
    grid-template-rows: auto 1fr auto;
  }
</style>
