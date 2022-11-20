import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [FeedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFeedback();
    }, []);

    // Fetch Feedback from the server
    const getFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&&_order=desc");
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    };

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedback/${id}`, {
                method: "DELETE",
            });
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    // Add new feedback
    const addFeedback = async (obj) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
    };

    // Update feedback on server
    const updateFeedback = async (id, obj) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        const data = await response.json();

        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    };

    // Set feedback to edit state
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                FeedbackEdit,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
