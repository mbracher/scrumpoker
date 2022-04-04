<script lang="ts">
  import { user } from './firebase-auth'
</script>
  
  {#if $user === undefined}
    Checking auth status &hellip;
  {:else}
    {#if $user === null}
      <button on:click={() => user.signInWith('google')}>Sign In with Google</button>
    {:else}
      <button on:click={() => user.signOut()}>Sign Out</button>{$user.displayName} ({$user.email}) {$user.uid}
    {/if}
  {/if}