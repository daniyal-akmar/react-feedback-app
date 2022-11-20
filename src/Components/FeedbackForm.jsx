import React, { useEffect, useState } from "react";
import Card from "./Shared/Card";

// Context
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

// Components
import RatingGroup from "./RatingGroup";

const FeedbackForm = () => {
    const { addFeedback, updateFeedback, FeedbackEdit } =
        useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [msg, setMsg] = useState("");
    const [rating, setRating] = useState(1);

    useEffect(() => {
        if (FeedbackEdit.edit) {
            setBtnDisabled(false);
            setText(FeedbackEdit.item.text);
            setRating(FeedbackEdit.item.rating);
        }
    }, [FeedbackEdit]);

    // Form validation
    useEffect(() => {
        if (text === "") {
            setBtnDisabled(true);
            setMsg("");
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMsg("Write atleast 10 characters.");
        } else {
            setBtnDisabled(false);
            setMsg("");
        }
    }, [text]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (FeedbackEdit.edit) {
            updateFeedback(FeedbackEdit.item.id, { rating, text });
        } else {
            addFeedback({ rating, text });
        }
        setText("");
    };

    return (
        <Card>
            <h2 style={{ marginBottom: ".75em" }}>
                How will you rate our service?
            </h2>
            <RatingGroup rating={rating} setRating={setRating} />
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        autoFocus
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write a review"
                    />
                    <button
                        type="submit"
                        disabled={btnDisabled}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {msg}
        </Card>
    );
};

export default FeedbackForm;
