import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";


const ExpenseListItem =  ({ id, description, amount, createdAt, dispatch }) => (
    <li>
        <h3><Link to = {`/edit/${id}`}>{description}</Link></h3>
        <p>{amount} - {console.log(createdAt.toString())}</p>
    </li>
)

export default ExpenseListItem;