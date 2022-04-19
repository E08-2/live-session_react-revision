import React from "react";
import CommentsForm from "../components/CommentsForm";
import CommentsList from "../components/CommentsList";

const Comments = () => {
    return (
        <div className="comments_container">
            <CommentsForm />
            <CommentsList />
        </div>
    )
}

export default Comments;