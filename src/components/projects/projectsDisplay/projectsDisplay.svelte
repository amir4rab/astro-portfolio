<script>
  import ProjectsFilter from '../projectsFilter/projectsFilter.svelte';
  import ProjectView from '../projectView/projectView.svelte';
  
  import './projectsDisplay.scss';

  export let projectsArr;

  let filters = [];
  let filteredProjects = [ ...projectsArr ];

  const setFilters = ( filterArr ) => {
    filters = [ ...filterArr ];

    if ( filters.length === 0 ) {
      filteredProjects = [ ...projectsArr ];
      return;
    };
    const filterd = projectsArr.filter( project => {
      let isIncluded = true;
      for ( const filter of filters ) {
        if( !project.tags.includes(filter) ) {
          isIncluded = false;
          break;
        }
      }
      return isIncluded;
    });
    filteredProjects = [ ...filterd ];
  } 
</script>

<div class='projects-display'>
  <div class='filters-wrapper'>
    <ProjectsFilter filters={ filters } setFilters={ setFilters }/>
  </div>
  <div class='projects-wrapper'>
    { #each filteredProjects as project ( project.slug )}
      <ProjectView projectData={ project }  />
    { /each }
    { #if filteredProjects.length === 0  }
      <p style={{ padding: '2rem 0', textAlign: 'center' }}>Sorry, i have no project with the specified filters!</p>
    {/if }
  </div>
</div>