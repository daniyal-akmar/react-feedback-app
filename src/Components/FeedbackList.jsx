// Context
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

// Component
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext);

    if (isLoading === false && (!feedback || feedback.length === 0)) {
        return (
            <p style={{ textAlign: "center", marginTop: "4rem" }}>
                No Feedback Yet
            </p>
        );
    }

    return isLoading ? (
        <h3 style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</h3>
    ) : (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default FeedbackList;
