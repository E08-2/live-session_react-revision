import React, { useContext } from "react";
import { CommentsContext } from "../App";

const CommentForm = () => {
    // * Revision - Step 8
    // See inside the JSX for all the times we are using state variables/functions via "comments"...
    const comments = useContext(CommentsContext);
    
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();

                const newComment = {
                    id: comments.allComments.length + 1,
                    title: comments.newCommentTitle,
                    body: comments.newCommentBody
                }

                comments.updateComments(newComment);
            }}>
                <h2>Add a comment</h2>
                <div className="form_div">
                    <input placeholder="Enter a title" value={comments.newCommentTitle} onChange={event => comments.updateNewCommentTitle(event.target.value)} />
                </div>
                <div className="form_div">
                    <input placeholder="Enter your comment text" value={comments.newCommentBody} onChange={event => comments.updateNewCommentBody(event.target.value)} />
                </div>
                <div className="form_div">
                    <button className="form_button">Add comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;