<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ page, fetch }) {
    const url = `/api/guilds/${page.params.guildId}/roles`;
    const response = await fetch(url);
    if (response.ok)
      return {
        props: {
          roles: await response.json(),
        },
      };

    if (response.status === 404)
      return {
        status: 404,
        error: new Error(`Guild not found`),
      };

    return {
      status: response.status,
    };
  }
</script>

<script>
  import Role from '../../../components/Role.svelte';

  export let roles;
</script>

<div class="p-4">
  {#each roles as { name, color }}
    <div class="flex border-b border-bg-lighter py-1">
      <Role class="m-2" {name} {color} />
    </div>
  {/each}
</div>
