import React, { useContext} from 'react';
import { FirstName, LastName } from './App';


const CompC = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName)
    return (<>

    <h1>My name is {fName} {lName}</h1>



    {/* <FirstName.Consumer>
        {(fName) => {
            return (
                <LastName.Consumer>
                    {(lName) => {
                        return <h1>My anme is {fName} {lName}</h1>
                    }}
                </LastName.Consumer>
            )
        }}
    </FirstName.Consumer> */}
    </>);
}
 
export default CompC;