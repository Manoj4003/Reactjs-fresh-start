import React, { Component } from 'react'
import './Form_concept.css';
export default class Form_Concept extends Component {
    render() {
        return (
            <div className='contanier'>
                <div className="form_inputs">

                    <form action="" >
                        <h1 >Welcome</h1>
                        <input type='text' name='userName' placeholder='Enter Your Name ' />
                        <input type='password' name='userPass' placeholder='Enter Your Password ' />
                        <button type='submit'>Submit</button>

                    </form>
                </div>


            </div>
        )
    }
}
