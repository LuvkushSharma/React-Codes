// -------------- Lec_5 ---------------

import { useLoaderData } from "react-router-dom";
import {getMenu} from "../../services/apiRestaurant"
import MenuItem from "../../features/menu/MenuItem"

function Menu() {
  
  // Step-3 :  Since we already loaded the data to this route i.e. we can fetch it from the custom hook.
  const menu = useLoaderData();
  // console.log(menu)

  return <ul>
    {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>;
}

// Step-1 : Create Loader Function
export async function loader () {

   const menu = await getMenu();
   return menu;
}

export default Menu;
