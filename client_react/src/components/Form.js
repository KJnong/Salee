import React from 'react'
import '../App.css'


class Form extends React.Component{
    render()
    {
        return(
        <form className="salee-form">
            <label>Name</label>
            <input className="u-full-width" type="text" id="name" name="name"/>

            <label>Salee</label>
            <textarea className="u-full-width" type="text" id="content" name="content"></textarea>
            
            <button className="button-primary">Send Salee</button>
        </form>
        )
    }

}

export default Form;