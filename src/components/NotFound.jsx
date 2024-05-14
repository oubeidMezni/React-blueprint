import React, { useState, useEffect } from 'react';

const NotFound = () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showMessage && (
                <>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </>
            )}
        </div>
    );
};

export default NotFound;