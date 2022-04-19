import React from "react";
import CommentsForm from "../components/CommentForm";
import CommentList from "../components/CommentsList";

const Comments = () => {
    return (
        <div className="comments_container">
            <CommentsForm />
            <CommentList />
        </div>
    )
}

export default Comments;