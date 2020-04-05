import React from 'react'
import '../App.css'


class Form extends React.Component
{
    state = 
    {
        name : '',
        content : ''
    }

    sendSalee = async (e)=> {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const content = e.target.elements.content.value

        const salee = {
            name,
            content
        }

        const API_post = await fetch('http://localhost:5000/salee',{
            method: 'Post',
            body: JSON.stringify(salee),
            headers:{'content-type':'application/json'}})

        console.log(API_post);

        this.setState({name : undefined,
            content : undefined})
        

    }



    render()
    {
        return(
        <form className="salee-form" onSubmit = {this.sendSalee}>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name"/>

            <label>Salee</label>
            <textarea className="u-full-width" type="text" name="content"></textarea>
            
            <button type = 'submit' className="button-primary">Send Salee</button>
        </form>
        )
    }

}

export default Form;