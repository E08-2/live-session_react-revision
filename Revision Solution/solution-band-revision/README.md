# Band Page - Revision Exercise

Create a "Comments" view for the "Black Sabbath" band app!

**Time allowed: 3 hours**

---

## Instructions

---

1. Create a functional component called **`Comments`**, and save it in the "views" directory.
- For now the component can return a div with the content "I am the Comments component!".
- Import your component into `<App />` and use React routing to display it whenever the user navigates to the "/comments" path.
- Finally, add a "Comments" link to your `<Navigation />` component, next to the "Albums" link. This should direct the user to the "/comments" path. 

---

2. Create another functional component called **`CommentForm`**, and save it to the "components" directory.
- This component will be a child of `<Comments />`.
- It should contain a small form which the user can use to add a comment about the "Black Sabbath" band app.
- The form should contain two inputs and a button which can be used to submit the form.

<img src="./src/examples/img1.png" width="800px" height="500px" alt="Example Image 1" />

---

3. Next, in **`App.js`**, you should create a new state variable called `comments`. This should be created using `useState`, and have an initial value of an empty array.

---

4. In **`App.js`**, you should now create a new `useEffect` which will only be called once, when the app first renders.
- The `useEffect` should make a **`fetch`** request to the following URL: https://jsonplaceholder.typicode.com/posts
- If you configure your `fetch` request correctly, this will GET all the "posts" data from the JSONPlaceholder API (which we have already used before). We will use this data to create some default comments.
- The data will arrive in the form of an array, containing 100 objects. Each object will contain the data for a single post.
- When the data arrives, you should create a new array called `first10Comments` containing 10 objects, based on the first 10 objects in the data you fetched.
- Each new object should have the "id", "title" and "body" properties from the original data, but not the "userId" property.
- When the new array of 10 objects is created, you should set it as the new value of your "comments" state variable.

---

5. Create another functional component called **`CommentsList`**, and save it in the "components" directory.
- This will be the child of `<Comments/>`, and be rendered underneath `<CommentForm />`.
- Later, this will render a list of the 10 comments you fetched in Step 4, plus any comments the user submits.
- For now, the component can return a div with the content "I am CommentsList!". Make sure this renders correctly in the "Comments" component before continuing to Step 6 (see the below image):

<img src="./src/examples/img2.png" width="800px" height="600px" alt="Example Image 2" />

---

6. Next, we will want to give the `<CommentsList />` component access to the data held in the `comments` state variable of `<App />`, so it can display that data in a list.
- To prevent prop-drilling, you should use **context** to pass the data directly from `<App />` to its grandchild <CommentList />.
- **Hint:** you can start by creating a second context variable in <App />, called `CommentsContext`...
- To test whether this has worked, you can update the content of the div returned by `<CommentsList />` to show the current number of objects inside the "comments" array. Make sure that after implementing **context**, your `<Comments />` view looks like the below image before continuing to Step 7:

<img src="./src/examples/img3.png" width="800px" height="600px" alt="Example Image 3" />

---

7. Create another functional component called **`Comment`**, and save it in the "components" directory. This will be the child of `<CommentsList />` (and the grandchild of `<Comments />`).
- This component will render the details of a single comment.
- In `<CommentsList />` you should **map** the array of data received from the context you created in **Step 6** to render a list of 10 `<Comment />` components. 
- See the below image for how you could simply style the `Comment` component (although you are welcome to create your own style if you prefer!).
- **Hint:** as each `<Comment />` is a child of `<CommentsList />`, you can use **props** to pass down relevant data to each `<Comment />` as part of your **mapping** logic.
- **Hint 2:** don't forget to give each `<Comment />` a "key" attribute! Luckily each "comment" object in the original `comments` state array has an "id" property, so you can use this. :-)

<img src="./src/examples/img4.png" width="900px" height="500px" alt="Example Image 4" />

---

8. Now add more functionality to your `<CommentForm />` component so you can create a new comment and add it to the list of comments!
- **Hints:**
	- You should create new state variables in `<App />` to track what you are typing into each input.
	- Each input's "value" attribute should be linked to one of your new state variables. 
	- When you change an input, you should use an `onChange` event handler to call a function in `<App />` to update the correct state variable. This will re-render the input with the new value.
	- You should also create a function in `<App />`, to be called when the form is submitted (using an `onSubmit` event handler). This will take the values of your two new state variables, and use them to create a new "comment" object (with an extra "id" property). Afterwards, the two new state variables should be reset to empty strings.
	- You should pass your new state variables and functions in `<App />` to the `<CommentForm />` grandchild component using **context**! 
	- To do this, you can re-use the `CommentsContext` variable you created in **Step 6**. However, in your JSX, you will need to update the data you are passing via the **value** prop of the `<CommentsContext.Provider>` component... 

---

**If you have done everything correctly, your "Comments" view should work in the following way:**

![Completed exercise demo](./src/examples/gif1.gif)

---

## If you finish early...

- I strongly recommend you take the opportunity, ahead of tomorrow morning's test, to look over the **"Notes"** files from the last few weeks of work, which I will add to your class repo before this afternoon. 
- If you have any questions after reading any of the files, feel free to reach out to me. :-)
