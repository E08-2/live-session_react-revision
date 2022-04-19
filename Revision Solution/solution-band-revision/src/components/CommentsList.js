import React, { useContext } from "react";
import Comment from "./Comment";
import { CommentsContext } from "../App";

const CommentsList = () => {
    // * Revision - Step 6
    const comments = useContext(CommentsContext);
    
    return (
        <div className="comments_list_container">
            <h2>Previous Comments</h2>

            {/* // * Revision - Step 7 */}
            {comments.allComments.map(comment => <Comment key={comment.id} id={comment.id} title={comment.title} body={comment.body} />)}
        </div>
    )
}

export default CommentsList;