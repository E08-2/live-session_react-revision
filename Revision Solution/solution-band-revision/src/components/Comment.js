import React from "react";

const Comment = props => {
    return (
        <div className="comment_container">
            <h3 className="comment_heading">#{props.id} - {props.title}</h3>
            <section className="comment_body">{props.body}</section>
        </div>
    );
}

export default Comment;