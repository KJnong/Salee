const form = document.querySelector('form')
const loadImage = document.querySelector('#loading')
const API_url = 'http://localhost:5000/salee'
const salesElement = document.querySelector('.sales')

loadImage.style.display = ''

loadContent();

form.addEventListener('submit', (event)=>
{

    salesElement.innerHTML = ""
    event.preventDefault()

    //hidding the form and loading GIF after salee has been submitted
    form.style.display = 'none'
    loadImage.style.display = ''

    // retrieving data from the form using the FormData class
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    //salee object from the form
    const salee = {
        name,
        content
    }

    fetch(API_url,{
        method: 'Post',
        body: JSON.stringify(salee),
        headers:{'content-type':'application/json'}
    }).then(response => response.json())
      .then(createdSale =>
            {
                form.reset();
                form.style.display = '';
                loadImage.style.display = 'none';
            })
    loadContent();        
})

function loadContent() {
    fetch(API_url)
        .then(response => response.json())
        .then(sales=>
        {
            sales.reverse();    
            sales.forEach(sale =>
                { 
                    const div = document.createElement('div')

                    const header = document.createElement('h6')
                    header.textContent = sale.name;

                    const contents = document.createElement('p')
                    const contents2 = document.createElement('h5')
                    contents2.textContent = sale.content;

                    const dateCreated = document.createElement('small')
                    dateCreated.textContent = moment(sale.created).fromNow();

                    const breakline = document.createElement('hr')
                    
                    contents.appendChild(contents2)
                    div.appendChild(dateCreated);
                    div.appendChild(header);
                    div.appendChild(contents);
                    div.appendChild(breakline);
                    
                    salesElement.appendChild(div);
                });
            loadImage.style.display = 'none'
        })
}

