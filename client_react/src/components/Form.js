import React from 'react'
import '../components/ComponentStyle/Form.css'
import axios from 'axios'

const Form = (props) => {

    const sendSalee = async (e) => {
        e.preventDefault();

        const content = e.target.elements.content.value

        const salee = {
            content,
            name: 'Jerthro'
        }

        e.currentTarget.reset();

        const token = localStorage.getItem('auth-token');
        await axios({
            method: 'Post',
            url: 'http://localhost:5000/salee',
            data: salee,
            headers: { 'content-type': 'application/json',
            Authorization: `Bearer ${token}` }
        })
        props.refresh();
    }

    return (
        <form className="salee-form" onSubmit={sendSalee}>
            <label>Salee</label>
            <textarea className="u-full-width" type="text" name="content"></textarea>

            <button type='submit' className="button-primary">Send Salee</button>
        </form>
    )
}
export default Form;