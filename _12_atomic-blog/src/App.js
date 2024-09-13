/*

// ------------------ Lec_1 -------------------


import { createContext, useContext, useEffect, useState } from "react";

import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}



// Step-1️⃣ : Create a CONTEXT
// PostContext is basically a component.

// After this we need to create "Provider" , "Value" and "Consumer".
const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  // Step-2️⃣ : Make PostContext as the parent component of all other components in the below JSX.

  // Step-3️⃣ : Provide value to the provider so, that later consumer can get this from the providers. Value is an object which contains all the data that we want to make accessible to the child components.

  // Basically we had passed the derived state i.e. searchedPosts and the two handler functions.

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        Step-4️⃣ : Removing all the props 
        <Header />

        <Main/>
        <Archive />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}



// Step-6️⃣
// But this Component needs a props which this component is not passing and that is onClearPosts function.
function Header() {
   
  // Pass the entire Context Object in the useContext hook.
  
  //  const x = useContext (PostContext);
  //  console.log(x) // returns all the value that we had passed into this object.

   // Let's destructure this object

   // Step-7️⃣ : Consuming the CONTEXT VALUE
   const { onClearPosts } = useContext (PostContext);

  
  // Step-5️⃣
  // Removing further props from Results and SearchPosts component.
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}


// Step-8️⃣ : Since , SearchPosts also wants the access of props i.e. create a useContext here also.
function SearchPosts() {
  
  // Again consuming the value.
  const { searchQuery , setSearchQuery} = useContext(PostContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}


// Step-9️⃣
function Results() {

  const {posts} = useContext (PostContext);

  return <p>🚀 {posts.length} atomic posts found</p>;
}


// Step-🔟 : Main function donot sends the props to it's child components as child components can access the props using the Provider value.
function Main() {

  return (
    <main>
      <FormAddPost/>
      <Posts/>
    </main>
  );
}


// Step-1️⃣1️⃣ : Remove props from the child component.
function Posts() {

  return (
    <section>
      <List/>
    </section>
  );
}

// Step-1️⃣2️⃣ : It needs the access of Provider's Value.
function FormAddPost() {
  
  const {onAddPost} = useContext(PostContext);


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}


// Step-1️⃣3️⃣
function List() {

  const {posts} = useContext (PostContext);

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}


// Step-1️⃣4️⃣
function Archive() {

  const {onAddPost} = useContext (PostContext);

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉

  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

// Now , not only we had removed the Prop Drilling Problem but also made each component independent as We can create a List component here also and it can access all the Providers value here also without depending on the parent components for getting access of their parent props. 😲

// Now , we donot have to pass the Props first to Footer and then to List. It's Amazing.
function Footer() {

  <List/>
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;

*/

// ----------------- Lec_2 -------------------

import { useContext, useEffect, useState } from "react";

import { faker } from "@faker-js/faker";

// import { PostProvider, PostContext } from "./PostProvider";

// Step-7️⃣
import { PostProvider, usePosts } from "./PostProvider";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// What we had done in the previous lecture is pretty enough but we can now make this even more advanced by implementing some more advanced patterns like Custom Provider Component and Custom Hook.

// So, we will then have all the state and we will then provide that using context into our application.

// Step-1️⃣ : Create a new component named as "PostProvider.js"

// And take everything related to context and place that in the PostProvider.js file.

function App() {
  // Step-2️⃣
  // So, we had grabbed all the state and state updating logic from here and placed that in the PostProvider.js file.

  const [isFakeDark, setIsFakeDark] = useState(false);


  // Step-9️⃣ : Using Custom Hook in the parent component. And x will be undefined because we had made this custom hook for it's Childrens not for the parent. So, let's define an Error if someone from the parents want to access usePosts()
  
  // const x = usePosts();
  // console.log(x); // undefined

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      {/* 

      Step-3️⃣
      
      Since above button donot need this Provider i.e. we had enclosed the below components only within the PostProvider Component. */}
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

// Step-4️⃣ : Since , we are writing useContext(PostContext); redundantly many times in each of the child components. So, Let's build a Custom Hook for that also as we had created a custom PostProvider we will create that also.

// Create custom hook in the PostProvider.js file
function Header() {
  // Step-8️⃣ : Using a Cutsom Hook
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results() {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

function Posts() {
  return (
    <section>
      <List />
    </section>
  );
}

function FormAddPost() {
  const { onAddPost } = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

function List() {
  const { posts } = usePosts();

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Archive() {
  const { onAddPost } = usePosts();

  const [posts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
