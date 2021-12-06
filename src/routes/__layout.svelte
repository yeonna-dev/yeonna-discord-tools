<script>
  import '@fortawesome/fontawesome-free/css/all.css';
  import '../styles/app.css';
  import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="layout h-full grid overflow-y-hidden">
  <Sidebar />
  <div class="overflow-y-auto">
    <slot />
  </div>
</div>

<style>
  .layout {
    grid-template-columns: 13rem 1fr;
  }
</style>
