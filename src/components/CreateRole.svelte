<script>
  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';

  export let onClose = () => {};
</script>

<div class="bg-bg p-4 rounded-lg">
  <h1
    class="flex justify-between items-center text-2xl font-semibold border-b border-bg-lighter pb-2 mb-3"
  >
    <span>Create Role</span>
    <Button class="w-10 h-10" icon noPadding on:click={onClose}>
      <i class="fa fa-times fa-sm" />
    </Button>
  </h1>
  <div>
    <Input />
  </div>
</div>
