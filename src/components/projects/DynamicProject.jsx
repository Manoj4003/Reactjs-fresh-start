import React from 'react'
import { useState } from 'react'
import './DynamicProject.css'

export default function DynamicProject() {
    const [user, setUser] = useState(
        {
            name: "Manoj",
            age: 24,
            gender: 'male',
            isMaried: true,
            country:"India",
            bio:"gr"
        }
    )

    function changeHandeler(e) {
        const name = e.target.name;
        const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
        setUser({...user,[name]:value})

    }

    return (
        <div>

            <table>
                <tbody >
                    {/* <tr>
                        <th>Tittle</th>
                        <th>Values</th>
                    </tr> */}
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>{user.isMaried ? " Married " : " Not Married "}</td>

                    </tr>
                     <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>

            </table>

            <form action="">
                <div className="form_inputs">

                    <div className="field">
                        <label htmlFor="userName"></label>
                        <input type="text" name='name' id='userName' placeholder='UserName' value={user.name} onChange={changeHandeler} />
                    </div>

                    <div className="field">
                        <label htmlFor="userAge"></label>
                        <input type="number" name='age' id='UserAge' placeholder='UserAge' value={user.age} onChange={changeHandeler} />
                    </div>

                    <div className="field">
                        <input type="radio" name="gender" id="male"  checked={user.gender === "male"} onChange={changeHandeler} value="male"/>
                        <label htmlFor="userGender">Male</label>


                        <input type="radio" name="gender" id="frmale"  checked={user.gender === "female"} onChange={changeHandeler} value="female" />
                        <label htmlFor="userGender">Female</label>
                    </div>

                    <div className="field">
                        <input type="checkbox" name="isMaried" id="maritalStatus" checked={user.isMaried} onChange={changeHandeler} />
                        <label htmlFor="isMarried">Marital status</label>

                    </div>
                    <div className="field">
                        
                        <label htmlFor="isMarried">Select Country</label>
                        <select name="country" id="country" onChange={changeHandeler}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="America">America</option>


                        </select>

                    </div>
                      <div className="field">
                        <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Write about you..' value={user.bio} onChange={changeHandeler}></textarea>
                        </div>

                </div>


            </form>


        </div>
    )
}
