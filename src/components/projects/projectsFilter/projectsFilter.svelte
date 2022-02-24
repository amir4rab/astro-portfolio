<!-- import { useState } from 'preact/hooks'; -->
<script>
  import './projectsFilter.scss';
  import FilterGroup from './filterGroup.svelte';

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

  export let filters;
  export let setFilters;
  let currentOpenFilterGroup = null;

  const toggleFilters = ( newValue ) => {
    if ( filters.includes(newValue) ) {
      setFilters(filters.filter( filter => filter !== newValue ))
    } else {
      setFilters([ ...filters, newValue ])
    }
  }

  const toggleFilterGroupState = ( filterGroupName ) => {
    currentOpenFilterGroup = currentOpenFilterGroup === filterGroupName ? null : filterGroupName;
    // setCurrentOpenFilterGroup(( currentActiveFilterGroup ) => currentActiveFilterGroup === filterGroupName ? null : filterGroupName )
  }

</script>

<div class='projects-filter'>
  <h1>Projects</h1>
  <div class='filter-sub-header'>
    <h3>
      Filters { filters.length !== 0 ? filters.length : null }
    </h3>
    <button style={{ display: filters.length !== 0 ? 'block' : 'none' }} class='clear-filters' onClick={ () => setFilters([]) }>
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