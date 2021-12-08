<script>
  import classNames from 'classnames';

  // export let id;
  export let name;
  export let color;
  color = color === 0 ? '99AAB5' : color.toString(16).padStart(6, 0);
</script>

<div
  class={classNames(
    'role bg-bg-darker rounded-full shadow-sm cursor-pointer px-4 py-2 hover:scale-105 hover:bg-bg-dark transition',
    $$props.class
  )}
  style="--color: #{color}"
>
  <div class="circle w-3.5 h-3.5 inline-block rounded-full" />
  <span class="text-xl ml-2">{name}</span>
</div>

<style lang="scss">
  .role {
    box-shadow: inset 0px 0px 0px 2px var(--color);

    .circle {
      background: var(--color);
    }
  }
</style>
