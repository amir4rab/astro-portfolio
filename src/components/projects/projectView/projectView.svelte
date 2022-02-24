<script>
  // import { Project } from '../../../types/Project';
  import ProjectIcon from '../projectIcon/projectIcon.svelte';
  import './projectView.scss';

  // function ProjectView({ projectData, key, projectPage = false }:{ projectData: Project, key: string, projectPage?: boolean }) {
  export let projectData;
  export let projectPage = false;
  const { github, shortInfo, slug, tags, title, websiteAddress, thumbnail, npmPackage } = projectData;
</script>


<div class={[ 'projectView' , projectPage ? 'projectPage' : null ].join(' ')}>
  <div class='header'>
    { #if tags.includes('website-project') }
      <ProjectIcon name='globe' />
    { :else if tags.includes('npm-project') }
      <ProjectIcon name='npm' />
    { /if }
    <h3>{ title }</h3>
  </div>
  { #if thumbnail !== null }
    <img class='thumbnail' src={ thumbnail } alt={ title } /> 
  { /if }
  <p class='short-info'>
    { shortInfo }
  </p>
  { #if !projectPage }
    <div class='read-more'>
      <a href={'./projects/' + slug}>
        <button>Read more</button>
      </a>
    </div> 
  { /if }
  <div class='link-list'>
    { #if github !== null }      
      <a target='_blank' rel='noreferrer' href={ github }>
        <ProjectIcon name='github' /><p>Github</p>
      </a>
    { /if }
    { #if websiteAddress !== null }      
      <a target='_blank' rel='noreferrer' href={ websiteAddress }>
        <ProjectIcon name='globe'/><p>Website</p>
      </a>
    { /if }
    { #if npmPackage !== null }      
    <a target='_blank' rel='noreferrer' href={ npmPackage }>
      <ProjectIcon name='npm' /><p>Npm Package</p>
    </a>
    { /if }
  </div>
  <div class='tags'>
    { #each tags as tag }
      { #if ![ 'open-source-project', 'close-source-project', 'npm-project', 'website-project' ].includes(tag) }
        <p class='tag' key={ tag } >{ tag }</p>
      { /if }
    { /each }
  </div>
</div>