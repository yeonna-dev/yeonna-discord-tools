<script>
  import { page } from '$app/stores';
  import classNames from 'classnames';

  import Button from './Button.svelte';

  const menuItems = [
    {
      label: 'Home',
      link: '/',
      icon: 'fa fa-home fa-lg',
    },
    {
      label: 'Roles',
      link: '/roles',
      icon: 'fa fa-user-tag fa-lg',
    },
  ];

  $: currentRoute = $page.path;
</script>

<nav class="sidebar grid bg-bg-dark">
  <h1 class="text-center py-6">Yeonna Discord Tools</h1>
  <ul>
    {#each menuItems as { label, link, icon }}
      <a href={link}>
        <li
          class={classNames(
            'font-bold px-4 py-3 mx-4',
            currentRoute === link && 'bg-primary rounded-lg shadow-xl'
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

<style>
  .sidebar {
    grid-template-rows: auto 1fr auto;
  }
</style>
