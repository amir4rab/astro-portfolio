<script>
  export let filters;
  export let toggleFilter;
  export let title;
  export let fitterList;
  export let isOpen;
  export let toggleState;

  const generateHeight = () => `${ fitterList.length * 2 + ( fitterList.length + 1 ) * .25 }rem`;

</script>

<div class={[ 'filter-group', isOpen ? 'open' : null ].join(' ')}>
  <button on:click={ toggleState } class='header'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.39266 8.30441L10.7776 19.2564C10.9289 19.4329 11.1165 19.5745 11.3277 19.6716C11.5388 19.7687 11.7685 19.819 12.0009 19.819C12.2333 19.819 12.463 19.7687 12.6741 19.6716C12.8853 19.5745 13.0729 19.4329 13.2242 19.2564L22.6091 8.30441C23.5048 7.25902 22.7622 5.64429 21.3858 5.64429H2.61328C1.2369 5.64429 0.494321 7.25902 1.39266 8.30441Z"/>
    </svg>
    <p>{ title }</p>
  </button>
  <div class='content' style={`height: ${ isOpen ? generateHeight() : `0rem` }`}>
    { #each fitterList as filter }
      <button id={ filter.value } on:click={ () => toggleFilter(filter.value) } class={[ 'filter', filters.includes(filter.value) ? 'active' : null ].join(' ')}>
        { filter.title }
      </button>
    { /each }
  </div>
</div>