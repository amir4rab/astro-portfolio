import { useState } from 'preact/hooks';
import './projectsFilter.scss';

type FilterItem = {
  value: string,
  title: string
};

const FilterGroup = (
  { filters , toggleFilter, title, fitterList, isOpen, toggleState }:
  { filters: string[], toggleFilter: (newFilter: string) => void, title: string, fitterList: FilterItem[], isOpen: boolean, toggleState: () => void }
) => {
  return (
    <div className={[ 'filter-group', isOpen ? 'open' : null ].join(' ')}>
      <button onClick={ toggleState } className='header'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.39266 8.30441L10.7776 19.2564C10.9289 19.4329 11.1165 19.5745 11.3277 19.6716C11.5388 19.7687 11.7685 19.819 12.0009 19.819C12.2333 19.819 12.463 19.7687 12.6741 19.6716C12.8853 19.5745 13.0729 19.4329 13.2242 19.2564L22.6091 8.30441C23.5048 7.25902 22.7622 5.64429 21.3858 5.64429H2.61328C1.2369 5.64429 0.494321 7.25902 1.39266 8.30441Z"/>
        </svg>
        <p>{ title }</p>
      </button>
      <div className='content' style={{ height: isOpen ? `${ fitterList.length * 2 + ( fitterList.length + 1 ) * .25 }rem` : `0rem` }}>
        {
          fitterList.map( filter => (
            <button onClick={ () => toggleFilter(filter.value) } className={[ 'filter', filters.includes(filter.value) ? 'active' : null ].join(' ')}>
              { filter.title }
            </button>
          ))
        }
      </div>
    </div>

  )
} 

const frameWorks = [
  {
    value: 'next.js',
    title: 'Next.js'
  },
  {
    value: 'gatsby',
    title: 'Gatsby'
  },
];

const libraries = [
  {
    value: 'react.js',
    title: 'React.js'
  },
  {
    value: 'framer-motion',
    title: 'Framer motion'
  },
  {
    value: 'validator',
    title: 'Validator'
  },
  {
    value: 'mongodb',
    title: 'Mongodb'
  },
  {
    value: 'uuid',
    title: 'Uuid'
  },
  {
    value: 'socket.io',
    title: 'Socket.io'
  },
  {
    value: 'next-auth',
    title: 'next auth'
  },
  {
    value: 'web3.js',
    title: 'Web3.js'
  },
  {
    value: 'crypto-js',
    title: 'Crypto-js'
  },
  {
    value: 'jsonwebtoken',
    title: 'Jsonwebtoken'
  },
  {
    value: 'sass',
    title: 'Sass'
  },
];

const uiLibraries = [
  {
    value: 'mantine',
    title: 'Mantine'
  },
];

const projectType = [
  {
    value: 'website-project',
    title: 'Website'
  },
  {
    value: 'npm-project',
    title: 'Npm package'
  },
];

const sourceCode = [
  {
    value: 'open-source-project',
    title: 'open source'
  },
  {
    value: 'close-source-project',
    title: 'close source'
  },
];

const ProjectsFilter = ({ filters ,setFilters }:{ filters: string[], setFilters: ( value: string[] ) => void }) => {
  const [ currentOpenFilterGroup, setCurrentOpenFilterGroup ] = useState(null);

  const toggleFilters = ( newValue: string ) => {
    if ( filters.includes(newValue) ) {
      setFilters(filters.filter( filter => filter !== newValue ))
    } else {
      setFilters([ ...filters, newValue ])
    }
  }

  const toggleFilterGroupState = ( filterGroupName: string ) => {
    setCurrentOpenFilterGroup(( currentActiveFilterGroup: string | null ) => currentActiveFilterGroup === filterGroupName ? null : filterGroupName )
  }

  return (
    <div className='projects-filter'>
      <h1>Projects</h1>
      <div className='filter-sub-header'>
        <h3>
          Filters { filters.length !== 0 ? filters.length : null }
        </h3>
        <button style={{ display: filters.length !== 0 ? 'block' : 'none' }} className='clear-filters' onClick={ () => setFilters([]) }>
          clear filters
        </button>
      </div>
      <div>
        <FilterGroup 
          filters={ filters } 
          toggleFilter={ toggleFilters } 
          title='Frame Works' 
          fitterList={ frameWorks } 
          isOpen={ currentOpenFilterGroup === 'frameWorks' } 
          toggleState={ () => toggleFilterGroupState('frameWorks') } 
        />
        <FilterGroup 
          filters={ filters } 
          toggleFilter={ toggleFilters } 
          title='Libraries' 
          fitterList={ libraries } 
          isOpen={ currentOpenFilterGroup === 'libraries' } 
          toggleState={ () => toggleFilterGroupState('libraries') } 
        />
        <FilterGroup 
          filters={ filters } 
          toggleFilter={ toggleFilters } 
          title='Ui Libraries' 
          fitterList={ uiLibraries } 
          isOpen={ currentOpenFilterGroup === 'uiLibraries' } 
          toggleState={ () => toggleFilterGroupState('uiLibraries') } 
        />
        <FilterGroup 
          filters={ filters } 
          toggleFilter={ toggleFilters } 
          title='Project Type' 
          fitterList={ projectType } 
          isOpen={ currentOpenFilterGroup === 'projectType' } 
          toggleState={ () => toggleFilterGroupState('projectType') } 
        />
        <FilterGroup 
          filters={ filters } 
          toggleFilter={ toggleFilters } 
          title='Source Code' 
          fitterList={sourceCode} 
          isOpen={ currentOpenFilterGroup === 'sourceCode' } 
          toggleState={ () => toggleFilterGroupState('sourceCode') } 
        />
      </div>
    </div>
  )
}

export default ProjectsFilter