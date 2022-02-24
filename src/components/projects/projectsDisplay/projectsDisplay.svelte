<script>
  import ProjectsFilter from '../projectsFilter/projectsFilter.svelte';
  import ProjectView from '../projectView/projectView.svelte';
  
  import './projectsDisplay.scss';

  export let projectsArr;
  const filters = [];
  const filteredProjects = [ ...projectsArr ];

  const setFilters = ( filterArr ) => {
    const filters = [ ...filterArr ];

    if ( filters.length === 0 ) {
      setFilteredProjects(projectsArr)
      return;
    };
    const filteredProjects = projectsArr.filter( project =>  {
      let isIncluded = true;
      for ( const filter of filters ) {
        if( !project.tags.includes(filter) ) {
          isIncluded = false;
          break;
        }
      }
      return isIncluded;
    });
  } 
</script>

<div class='projects-display'>
  <div class='filters-wrapper'>
    <ProjectsFilter filters={ filters } setFilters={ setFilters }/>
  </div>
  <div class='projects-wrapper'>
    { #each filteredProjects as project }
      <ProjectView key={ project.slug } projectData={ project } />
    { /each }
    { #if filteredProjects.length === 0  }
      <p style={{ padding: '2rem 0', textAlign: 'center' }}>Sorry, i have no project with the specified filters!</p>
    {/if }
  </div>
</div>