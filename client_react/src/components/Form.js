import React from 'react'
import '../components/ComponentStyle/Form.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component {

    state = {
        image: null
    }

    fileSelected = (e) => {

        this.setState({
            image: e.target.files[0]
        })

    }

    sendSalee = async (e) => {
        e.preventDefault();

        const content = e.target.elements.content.value

    

        let formData = new FormData();
        formData.append("content", content);
        formData.append("image", this.state.image, this.state.image.name);

        
        e.currentTarget.reset();

        const token = localStorage.getItem('auth-token');
        await axios({
            method: 'Post',
            url: 'http://localhost:5000/salee',
            data: formData,
            headers: {Authorization: `Bearer ${token}`}
        })
        this.props.refresh();
    }

    render() {
        return (
            <form className="salee-form" onSubmit={this.sendSalee}>
                <div class="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" onChange={this.fileSelected} class="custom-file-input" />
                        <label className="custom-file-label" for="inputGroupFile01">Choose Sale Image</label>
                    </div>
                </div>

                <label>Salee</label>
                <input className="u-full-width" type="text" name="content"/>
                <div>
                <button type='submit' className="button-primary">Send Salee</button>
                </div>
            </form>
        )
    }
}
export default Form;