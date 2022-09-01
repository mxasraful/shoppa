import React from 'react';


const ErrorPage = ({ code, message }) => {
    return (
        <div className="error-page-main">
            <div className="container">
                <div className="text-center row" style={{ marginTop: "40vh" }}>
                    <div className="col-6 text-end pe-4 py-3 border-end">
                        {
                            code ?
                                <span style={{ fontSize: "30px" }}>
                                    {code}
                                </span>
                                :
                                <span style={{ fontSize: "30px" }}>
                                    404
                                </span>
                        }
                    </div>
                    <div className="col-6 text-start ps-4 py-4">
                        {
                            message ?
                                <span>
                                    {message}
                                </span>
                                :
                                <span>
                                    Not Found
                                </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;