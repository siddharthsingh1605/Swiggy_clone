import ResCards from './ResCards'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {

  //whenever the state changes or gets updated, react triggers a reconciliation algorithm(rerenders the components)
  const [listOfRestaurants, setListOfRestaurants] = useState([])  //////array destructuring

  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchText, setSearchText] = useState("")

  //if there is no dependency array=>useEffect will be called everytime component will get rendered.
  //if dependency array is  empty [ ] then it will only call once when the component gets mounted or after the initial render
  //if dependency array is {searchText}=> then it will be called  only when searchText changes.
  useEffect(() => {
    fetchData()
  }, ([]))

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5793735&lng=77.45011819999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log(json)
  };

  //conditional rendering
  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className='body'>
      <div className='filter'>
        <button className="top-restaurants" onClick={() => {
          // Filter the array and update the state
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.3)
          setFilteredRestaurants(filteredList)
        }}>Top Rated Restaurants</button>

        <button className="top-restaurants" onClick={() => {
          setFilteredRestaurants(listOfRestaurants)
        }}>All Restaurants</button>

        <div className='search'>
          <input
            type="text"
            className='search-btn'
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button className='search-btn' onClick={() => {
            const searchedRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(searchedRestaurant)
            setFilteredRestaurants(searchedRestaurant)
          }}>Search</button>
        </div>

      </div>
      <div className="res-container">
        {filteredRestaurants.map((resData, id) => (
          <ResCards key={id} resData={resData} />
        ))}
      </div>
    </div>
  )
}

export default Body


//   const [resList, setresList] = useState(resList)
//   return (
//     <div className='body'>
//       <div className="search">
//         <button onClick={() => {
//           resList.filter(
//             (res) => resList.info.avgRating > 4)
//         }}>Top Rated Restraunts</button>
//       </div>
//       <div className="res-container">
//         {resList.map((resData, id) => (
//           <ResCards key={id} resData={resData} />
//         ))}
//       </div>
//     </div>
//   )
// }
// Use a different variable name for the state
//State are super powerfull variables in react//