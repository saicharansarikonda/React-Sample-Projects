import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page Requested for cannot be found...</p>
            <div className="page-link">
                <Link to='/'>Back to home page</Link>
            </div>
        </div>
    );
}
 
export default NotFound;