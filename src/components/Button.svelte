<script>
  import classNames from 'classnames';

  export let fab = false;
  export let outlined = false;
  export let text = false;
  export let basic = !fab && !outlined && !text;
  export let rounded = false;
</script>

<button
  class={classNames(
    'focus:outline-none focus:ring transition font-bold px-4 py-2',
    basic && 'bg-primary hover:bg-primary-hover',
    text && 'focus:ring-0 bg-transparent hover:bg-primary',
    outlined &&
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    rounded && 'rounded-sm',
    fab &&
      'w-16 h-16 grid place-items-center rounded-full text-5xl shadow-xl m-12',
    $$props.class
  )}
  on:click
>
  <slot />
</button>
