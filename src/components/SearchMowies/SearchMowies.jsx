// import React from 'react';
// import { useNavigate, useSearchParams  } from 'react-router-dom';
// import css from './SearchMowies.module.css';


// const SearchMowies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();

  // const query = searchParams.get('query');
  //  setSearchParams({
  //     sQuery: searchValue,
  //   });
  

  // const handleSearch = () => {
  //   navigate(`/movies?query=${searchParams.get('query')}`);
  // };

  // const handleSubmit = (value) => {
  //   setSearchParams({query: value})
  // }

//   return (
//     <div>
//       <form action="" className={css.form} onSubmit={(e) => {
//           e.preventDefault();
//           handleSearch();
//         }}>
//         <input
//           type="text"
//           value={searchParams.get('query') || ''}
//           onChange={e => setSearchParams({query: e.target.value})}
//           className={css.input}
//         />
//         <button type="submit" className={css.button}>
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };
// export { SearchMowies };
