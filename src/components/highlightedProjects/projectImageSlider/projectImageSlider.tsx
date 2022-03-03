type Image = {
  url: string,
  type: string
}

export type ImagesArray = Image[];

import { useState } from 'preact/hooks';
import classes from './projectImageSlider.module.scss';

const imageClasses = ( currentPage: number, perviousImage: number, currentIndex: number ) => {
  return [ classes.image , currentPage === currentIndex ? classes.display : perviousImage === currentIndex ? classes.hide : classes.hidden ].join(' ')
}

const ProjectImageSlider = ({ imagesArray }):{ imageArray: ImagesArray } => {
  const [ currentPage, setCurrentPage ] = useState<number>(0);
  const [ perviousImage, setPerviousImage ] = useState<number>(0);

  // const goNext = () => {
  //   if ( currentPage < imagesArray.length - 1 ) {
  //     setCurrentPage(currentPage + 1);
  //     setPerviousImage(currentPage);
  //   } else {
  //     setCurrentPage(0);
  //     setPerviousImage(currentPage);
  //   }
  // }
  // const goBack = () => {
  //   if ( currentPage > 0 ) {
  //     setCurrentPage(currentPage - 1);
  //     setPerviousImage(currentPage);
  //   } else {
  //     setCurrentPage(imagesArray.length - 1);
  //     setPerviousImage(currentPage);
  //   }
  // }
  const setPage = (input: number) => {
    setCurrentPage(input);
    setPerviousImage(currentPage);
  }

  return (
    <div className={ classes.projectImageSlider }>
      <div className={ classes.imageWrapper }>
        { imagesArray.map(({ url }, index: number ) => (
          <img
            area-label='hidden'
            src={ url } 
            key={ url }
            lazy
            className={ imageClasses(currentPage, perviousImage ,index) }
          />
        ))}
      </div>
      <div className={ classes.buttons }>
        {
          imagesArray.map(({}, index: number ) => (
            <button 
              className={[ classes.button, currentPage === index ? classes.active : null ].join(' ')}
              onClick={ () => setPage(index)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectImageSlider