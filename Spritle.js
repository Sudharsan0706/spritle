import React, { useState } from "react";
import "./Spritle.css"

const Spritle=(props)=>{
     
    return(
        <div>
            <div  className="secdiv">
                <h4>Transactions:</h4>
                <table>
                    {
                        props.data.map((x)=>{
                            return(
                                <tr>
                                    <td>{x.dt} -  </td>
                                    <td>{x.idvalue} - </td>
                                    <td>{x.contant}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
export default Spritle;