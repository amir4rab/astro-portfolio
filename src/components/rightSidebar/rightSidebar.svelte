<script>
  import './rightSidebar.scss';
  export let contentArr;
</script>

<nav aria-label='inner-page-nav' class="rightSidebar">
  {#each contentArr as content ( content.slug )}
    <a href={`#${content.slug}`} class={`link depth-${content.depth}`}>{content.text}</a>
  {/each}
</nav>