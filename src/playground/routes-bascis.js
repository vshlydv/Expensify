import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import "./styles/styles.scss";

const ExpensDashboardPage = () => (
    <div>
        This is from my Dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404! {/*Link is used to leverage cleint side routing */} 
        <Link to = "/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink activeClassName = "is-active" to = "/" exact>Home</NavLink></p>
        <p><NavLink activeClassName = "is-active" to = "/create">Add</NavLink></p>
        <p><NavLink activeClassName = "is-active" to = "/edit">Edit</NavLink></p>
        <p><NavLink activeClassName = "is-active" to = "/help">Help</NavLink></p>
    </header>
)

const routes = (
    <BrowserRouter> 
    {/*It expects either one child or none */}
        {
            /*<div>
                <Route path="/" component = {ExpensDashboardPage} exact/>
                <Route path="/create" component = {AddExpensePage} />   
                <Route path="/edit" component = {EditExpensePage}/>
                <Route path="/help" component = {HelpPage} />   
            </div>*/
        }
        <div>
            <Header />
            <Switch>
                {/*Switch stops adding below routes if it gets a match */}
                <Route path="/" component = {ExpensDashboardPage} exact/>
                <Route path="/create" component = {AddExpensePage} />   
                <Route path="/edit" component = {EditExpensePage}/>
                <Route path="/help" component = {HelpPage} />   
                <Route component = {NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));