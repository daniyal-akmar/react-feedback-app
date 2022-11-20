import React, { useEffect, useState } from "react";
import RatingInput from "./RatingInput";

const RatingGroup = ({ rating, setRating }) => {
    const [selection, setSelection] = useState(1);

    useEffect(() => {
        setSelection(rating);
    }, [rating]);

    return (
        <ul className="rating">
            <li>
                <RatingInput
                    num={1}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={2}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={3}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={4}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={5}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={6}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={7}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={8}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={9}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
            <li>
                <RatingInput
                    num={10}
                    selection={selection}
                    setRating={setRating}
                    setSelection={setSelection}
                />
            </li>
        </ul>
    );
};

export default RatingGroup;
