import React from "react";

const RatingInput = ({ num, selection, setSelection, setRating }) => {
    return (
        <>
            <input
                type="radio"
                name="rating"
                id={"num" + num}
                value={`${num}`}
                onChange={(e) => {
                    setSelection(+e.target.value);
                    setRating(+e.target.value);
                }}
                checked={selection === num}
            />
            <label htmlFor={"num" + num}>{num}</label>
        </>
    );
};

export default RatingInput;
