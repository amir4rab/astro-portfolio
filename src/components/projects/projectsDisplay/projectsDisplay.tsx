import { useState, useEffect } from 'preact/hooks';

import { Project } from '../../../types/Project'
import ProjectsFilter from '../projectsFilter/projectsFilter';
import ProjectView from '../projectView/projectView';

import './projectsDisplay.scss';

const ProjectsDisplay = ({ projectsArr }:{ projectsArr: Project[] }) => {
  const [ filters, setFilters ] = useState< string[] >([]);
  const [ filteredProjects, setFilteredProjects ] = useState< Project[] >(projectsArr);

  useEffect( () => {
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
    setFilteredProjects(filteredProjects);
  }, [ filters, projectsArr ]);

  return (
    <div className='projects-display'>
      <div className='filters-wrapper'>
        <ProjectsFilter filters={ filters } setFilters={ setFilters }/>
      </div>
      <div className='projects-wrapper'>
        {
          filteredProjects.map(( project ) => <ProjectView key={ project.slug } projectData={ project } />)
        }
        {
          filteredProjects.length === 0 ? <p style={{ padding: '2rem 0', textAlign: 'center' }}>Sorry, i have no project with the specified filters!</p> : null
        }
      </div>
    </div>
  )
}

export default ProjectsDisplay