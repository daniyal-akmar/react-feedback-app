import React from "react";

// Components
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

// Context
import { FeedbackProvider } from "./Context/FeedbackContext";

const App = () => {
    return (
        <FeedbackProvider>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider>
    );
};

export default App;
