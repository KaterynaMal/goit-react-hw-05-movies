import React from 'react';
import css from './SearchMowies.module.css'


const SearchMowies = () => {
  return (
      <div>
          <form action="" className={css.form}>
              <input type="text"
                  className={css.input} 
            // `${css.input} ${onFocus ? css.focus : css.input}`
          
                //   style={{borderColor: onfocus ? "rgb(248, 206, 190)" : "rgba(0, 0, 0, 0.12)"} }
                  />
              <button type="submit" className={css.button}>Search</button>
          </form>
          
    </div>
  )
}
export { SearchMowies };