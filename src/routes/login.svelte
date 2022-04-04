<script lang="ts"> 
  import { user } from '$lib/firebase-auth'
  import Stories from '$lib/stories.svelte';
</script>

{#if $user}
  <Stories />
{:else}
  <p>public content, login to see private content</p>
{/if}


