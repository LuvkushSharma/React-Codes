import { createContext, useContext, useState } from "react";

import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// Step-5️⃣ : Creating Custom PostProvider Context

// 1) CREATE A CONTEXT
const PostContext = createContext();

function PostProvider({children}) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");

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

  return (

    //  2) PROVIDE VALUE TO CHILD COMPONENTS
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
        {children}
    </PostContext.Provider> 
  );
}


// Step-6️⃣ : Creating Custom Hook
function usePosts () {

     const context = useContext(PostContext);

     // Step-🔟 : Defining an Error
     if (context === undefined) throw new Error('PostContext was used outside of the PostProvider.')

     return context;

}


// export {PostProvider , PostContext};

// So, instead of exposing the context object itself we will send the function that provides this Object.


export {PostProvider , usePosts};
