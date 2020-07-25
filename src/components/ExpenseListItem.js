import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";


// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: ''
    }
});

// switch between locales
numeral.locale('fr');

const ExpenseListItem =  ({ id, description, amount, createdAt, dispatch }) => (
    <li>
        <h3><Link to = {`/edit/${id}`}>{description}</Link></h3>
        <p>Rs{numeral(amount).format("0,0.00")}/-
            :
            {moment(createdAt).format(" DD/MM/YYYY")}
        </p>
    </li>
)

export default ExpenseListItem;