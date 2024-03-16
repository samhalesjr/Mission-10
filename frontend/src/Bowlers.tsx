import React, { useState, useEffect } from "react";
import { Bowler } from "./types/Bowler";

function Bowlers() {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    // Example fetch call to get bowlers data - adjust URL as needed
    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('https://localhost:7231/bowler'); // Adjust the URL to your API endpoint
            const data = await response.json();
            setBowlers(data);
        };

        fetchBowlers();
    }, []);

    return (
        <div className="container mt-5">
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                        <th>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.filter(bowler=>{
                        return ["Marlins","Sharks"].includes(bowler.team?.teamName??"")
                    }).map((bowler) => (
                        <tr key={bowler.bowlerId}>
                            <td>{bowler.bowlerFirstName+(bowler.bowlerMiddleInit?" "+bowler.bowlerMiddleInit+".":"")+" "+bowler.bowlerLastName}</td>
                            <td>{bowler.bowlerAddress}</td>
                            <td>{bowler.bowlerCity}</td>
                            <td>{bowler.bowlerState}</td>
                            <td>{bowler.bowlerZip}</td>
                            <td>{bowler.bowlerPhoneNumber}</td>
                            <td>{bowler.team?.teamName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bowlers;