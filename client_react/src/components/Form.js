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

        const item = e.target.elements.items.value
        const was = e.target.elements.was.value
        const now = e.target.elements.now.value

        let formData = new FormData();
        formData.append("image", this.state.image, this.state.image.name);
        formData.append("item", item);
        formData.append("was", was);
        formData.append("now", now);


        e.currentTarget.reset();

        const token = localStorage.getItem('auth-token');
        await axios({
            method: 'Post',
            url: 'http://localhost:5000/salee',
            data: formData,
            headers: { Authorization: `Bearer ${token}` }
        })
        this.props.refresh();
    }

    render() {
        return (
            <form className="salee-form" onSubmit={this.sendSalee}>
                <div class="custom-file">
                    <input type="file" onChange={this.fileSelected} class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
                <div>
                    <input type="text" name="items" placeholder='Item' />
                </div>
                <div>
                    <input type="text" name="was" placeholder='Was' />
                </div>
                <div>
                    <input  type="number" name="now" placeholder='Now' />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-lg">Send Salee</button>
                </div>
            </form>
        )
    }
}
export default Form;