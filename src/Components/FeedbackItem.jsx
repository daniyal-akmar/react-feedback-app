import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Shared/Card";
import PropTypes from "prop-types";

// Context
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    rating: PropTypes.number,
    text: PropTypes.string,
};

export default FeedbackItem;
