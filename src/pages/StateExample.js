import { useState } from "react"

const TopComponent = () => {
    const [state, setState] = useState();
    return(
        <div>
            <MiddleComponent state={state} />
        </div>
    );
};

const MiddleComponent = (state) => {
    const [state, setState] = useState();
    return(
        <div>
            <BottomComponent state={state} />
            
        </div>
    );
};

const BottomComponent = (state) => {
    return <div>{state}</div>;
}

