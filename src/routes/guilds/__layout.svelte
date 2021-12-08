<script>
  import { page } from '$app/stores';

  import Sidebar from '../../components/Sidebar.svelte';
  import MediaQuery from '../../components/MediaQuery.svelte';
  import Button from '../../components/Button.svelte';

  const getLink = (link) => {
    const url = `/guilds/${$page.params.guildId}`;
    return link ? `${url}/${link}` : url;
  };

  const routes = {
    [getLink()]: {
      label: 'Home',
      title: 'Home',
      link: getLink(),
      icon: 'fa fa-home fa-lg',
    },
    [getLink('roles')]: {
      label: 'Roles',
      title: 'Manage Server Roles',
      link: getLink('roles'),
      icon: 'fa fa-user-tag fa-lg',
    },
  };

  const removeTrailingSlash = (link) =>
    link.endsWith('/') ? link.slice(0, -1) : link;

  $: currentRoute = routes[removeTrailingSlash($page.path)];

  let sidebarShown = false;
  const toggleSidebar = () => (sidebarShown = !sidebarShown);
</script>

<div class="flex h-full">
  <MediaQuery query="(min-width: 768px)" let:matches>
    <Sidebar
      class="h-full"
      items={Object.values(routes)}
      currentRoute={currentRoute.link}
      temporary={!matches}
      bind:shown={sidebarShown}
    />
  </MediaQuery>

  <div class="flex-grow flex flex-col">
    <header class="flex items-center bg-bg-dark px-2 py-4">
      <MediaQuery query="(max-width: 767px)" let:matches>
        {#if matches}
          <Button
            class="w-12 h-12 rounded-full px-3 ml-1"
            text
            on:click={toggleSidebar}
          >
            <i class="fa fa-bars text-2xl" />
          </Button>
        {/if}
      </MediaQuery>
      <span class="text-2xl py-2 font-bold ml-2">
        {currentRoute.title}
      </span>
    </header>
    <div class="overflow-y-auto">
      <slot />
    </div>
  </div>
</div>
