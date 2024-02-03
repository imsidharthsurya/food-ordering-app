import { useRouteError } from "react-router-dom";
const ErrorPage=()=>{
    const err=useRouteError();
    console.log(err.data)
    console.log(err.statusText)
    return (
        <div className="error">
            <h1>Oops! Something went wrong</h1>
            <h3>Currently we're unable to process your request</h3>
            <p>{err.data}: {err.statusText}</p>
        </div>
    )
}
export default ErrorPage;