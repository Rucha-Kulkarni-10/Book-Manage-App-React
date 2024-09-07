import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    console.log(err);

     return(
        <>
            <h1>Error</h1>
            <h2>{err.status} {err.statusText}</h2>
            <h3>{err.data}</h3>
        </>
     );
}

export default Error;
