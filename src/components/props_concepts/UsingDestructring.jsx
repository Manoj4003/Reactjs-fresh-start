import React from 'react'

// export default function UsingDestructring({ id, name, age }) { //or using this
//same for class component also use  const {id,name,age} =this.props
export default function UsingDestructring(props) {
    const {id,name,age} =props


    return (
        <div>
            <h1>Using Destructuring</h1>
            <ul>
                <li>id:{id}</li>
                <li>name:{name}</li>
                <li>age:{age}</li>

            </ul>


        </div>
    )
}
