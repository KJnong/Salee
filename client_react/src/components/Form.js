import React from 'react'
import '../components/ComponentStyle/Form.css'


class Form extends React.Component
{
    state = 
    {
        response : []
    }

    sendSalee = async (e)=> {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const content = e.target.elements.content.value

        const salee = {
            name,
            content
        }

        e.currentTarget.reset();

        const API_post = await fetch('http://localhost:5000/salee',{
            method: 'Post',
            body: JSON.stringify(salee),
            headers:{'content-type':'application/json'}})

        // const response2 = await API_post.json();

        // this.setState({ response: response2 });
        this.props.refresh();

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