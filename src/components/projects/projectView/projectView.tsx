import { Project } from '../../../types/Project';
import ProjectIcon from '../projectIcon/projectIcon';
import './projectView.scss';

function ProjectView({ projectData, key, projectPage = false }:{ projectData: Project, key: string, projectPage?: boolean }) {
  const { github, shortInfo, slug, tags, title, websiteAddress, thumbnail, npmPackage } = projectData;


  return (
    <div className={[ 'projectView' , projectPage ? 'projectPage' : null ].join(' ')}>
      <div className='header'>
        {
          tags.includes('website-project') ? <ProjectIcon name='globe' /> : null
        }
        {
          tags.includes('npm-project') ? <ProjectIcon name='npm' /> : null
        }
        <h3>{ title }</h3>
      </div>
      {
        thumbnail && <img lazy className='thumbnail' src={ thumbnail } alt={ title } /> 
      }
      <p className='short-info'>
        { shortInfo }
      </p>
      {
        !projectPage ? 
          <div className='read-more'>
            <a href={'./projects/' + slug}>
              <button>Read more</button>
            </a>
          </div> 
          : null
      }
      <div className='link-list'>
        { 
          github && 
          <a target='_blank' rel='noreferrer' href={ github }>
            <ProjectIcon name='github' /><p>Github</p>
          </a>
        }
        { 
          websiteAddress && 
          <a target='_blank' rel='noreferrer' href={ websiteAddress }>
            <ProjectIcon name='globe'/><p>Website</p>
          </a>
        }
        { 
          npmPackage && 
          <a target='_blank' rel='noreferrer' href={ npmPackage }>
            <ProjectIcon name='npm' /><p>Npm Package</p>
          </a>
        }
      </div>
      <div className='tags'>
        {
          tags.map( item => {
            const isFiltered = [ 'open-source-project', 'close-source-project', 'npm-project', 'website-project' ].includes(item);
            if ( isFiltered ) return null;
            return <p className='tag' key={ item } >{ item }</p>
          })
        }
      </div>
    </div>
  )
}

export default ProjectView