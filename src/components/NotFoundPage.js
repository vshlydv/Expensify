import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => (
    <div>
        404! {/*Link is used to leverage cleint side routing */} 
        <Link to = "/">Go Home</Link>
    </div>
);

export default NotFoundPage;