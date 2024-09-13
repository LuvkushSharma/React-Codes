import { useState } from "react";

// ------------ Lec_1 -----------
// Thinking About State and Lifting Up

// Changes Occured in <Form> , <PackingList> and then <App>

/*

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


export default function App() {
  
  // Step-2️⃣ : Lifted Up state and function
  // Now , we will pass this function to the Form component so, that it can pass the new item and then this function adds new item in the "items" state.

  // And then we will pass the items state to the PackingList component for rendering all the items using map function.
  const [items,setItems] = useState([]);

  function handleAddItems (item) {
      
    // Bad Practise as we are trying to mutate the items which is not allowed in case of UseState.
   // setItems (items => items.push(item));

   // So, we return an array in which are spreading the old items array and the new item.
   setItems (items => [...items, item]);
}

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}



function Form({onAddItems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  // Initially our items list contains empty list
  
   // Step-1️⃣ :- Lifting this state and the below handleAddItems function to the App Component.

  // const [items,setItems] = useState([]); 

  // function handleAddItems (item) {
      
        // Bad Practise as we are trying to mutate the items which is not allowed in case of UseState.
       // setItems (items => items.push(item));

      // So, we return an array in which are   spreading the old items array and the new item.
        // setItems (items => [...items, item]);
  // }

  

  function handleSubmit(e) {

    e.preventDefault();
    
    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    
    // Now we had added the item in the items array so, we need to pass it to the packingList component and most of you will try to send it via prop but as we know that we can prop from parent to child only not to the other component.

    // Hence , we'll use the concept of Lifting Up
    // So, we'll take this state i.e. items and move it to the closest common parent component i.e. <App/> in this case for Form and PackingList.
    onAddItems (newItem);
    
    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// We had passed the items state from App to the packingList
function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

*/

// ----------------- Lec_2 ----------------

// Deleting and Item : More Child-to-Parent Communication!

// Since , our "items" state lives in the <App/> component but we are deleting an item from the <PackingList/> component. So, can we update an state that lives in tha parent component from the child component.

// So, the answer is : Like we had passed the onAddItems() function from <App/> to <Form/> component which is inserting the item.

// Likewise we can also pass the new function from <App/> to the <PackingList/> which is deleting the item from the list.

/*

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Step-1️⃣
  function handleDeleteItem(id) {
    // Filtering the item having "id = id"
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Step-2️⃣ : Pass the function as prop

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// We had passed the items state from App to the packingList

// Step-3️⃣
function PackingList({ items, onDeleteItem }) {
  // Step-4️⃣ : Now pass the function to it's child component i.e. Item
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// Step-5️⃣ : So, whenever we clicked  ❌ then onDeleteItem() function calls and we are passing the id of the item.
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}


*/

// ------------------- Lec_3 -------------------

// Updating an Item: Complex Immutable Data Operation.

// Firstly go the <Item/> component for adding a checkbox which means items is already selected. Then , go the <App/> component.

/*

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(id) {
    // Filtering the item having "id = id"
    setItems((i) => i.filter((item) => item.id !== id));
  }

  // Step-2️⃣
  // Simply change the checked key from false to true.
  function handleToggleItem(id) {
    // So, we are toggling the item.packed boolean value from false to true if it's id matched with the clicked checkbox else we are simply returning the item object.
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Step-3️⃣ : Send the handleToggleItems function to it's child component.
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem = {handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// Step : 4️⃣
function PackingList({ items, onDeleteItem , onToggleItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// Step-1️⃣ :  Add a <input type="checkbox"> and then go to tge <App/> component for creating a new function which updates the item state.

// Step-5️⃣
function Item({ item, onDeleteItem , onToggleItem}) {
  return (
    <li>

      <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item.id)} />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

*/

// ----------------- Lec_4 ------------------

// Calculating Statistics as Derived State

/*

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(id) {
    // Filtering the item having "id = id"
    setItems((i) => i.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Step-1️⃣ : Passing item as a prop in <Stats/>
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {


  // Step-4️⃣ : If no items in the items array then no need to calculate below things.
  if (!items.length) return <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
  </p>

  // Step-2️⃣
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  // return (
  //   <footer className="stats">
  //     <em>You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)</em>
  //   </footer>
  // );

  // Step-3️⃣ : Now , when the items are 100% packed the conditionally write the below statement
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

*/


// ------------------- Lec_5 --------------------

// Sorting Items

// Go to <PackingList/>

/*

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(id) {
    // Filtering the item having "id = id"
    setItems((i) => i.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}


function PackingList({ items, onDeleteItem, onToggleItem }) {

  // Step-2️⃣ : Create a state
  const [sortBy, setSortBy] = useState("packed");

  // Step-3️⃣ : We'll apply sorting on new array not on the real "items" array.
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  // Step-1️⃣ : Creating <input type = select />
  // for different sortings.
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy (e.target.value)}>

          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
      </div>  
      

    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {


  if (!items.length) return <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
  </p>

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

*/


// ------------------ Lec_6 -------------------

// Clearing the list

// Go to the <PackingList/>

/*

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(id) {
    // Filtering the item having "id = id"
    setItems((i) => i.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Step-1️⃣
  function handleClearList () {

      // Step-4️⃣
      const confirmed = window.confirm('Are you sure you want to delete all items?');
      
      // Setting the "Items" array to empty array.
      if(confirmed) setItems ([]);
  }

  
  // Step-2️⃣
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
       onClearList ={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Trying to add the item with no description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    // Again set all the state to the default values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}


// Step-3️⃣
function PackingList({ items, onDeleteItem, onToggleItem , onClearList}) {


  const [sortBy, setSortBy] = useState("packed");


  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy (e.target.value)}>

          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear list</button>

      </div>  
    
    </div>
  );
}



function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {


  if (!items.length) return <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
  </p>

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

*/