const loadData = () =>{ 
    fetch('https://jsonplaceholder.typicode.com/todos/1') //Fetch gives promis of a response

      .then(response => { // then gets the promise of JSON data

        // console.log(response)
        return response.json()
       
      })
      .then(json => display(json)) 
    //   this then outputs the data from the JSON response

    }

post_url = 'https://jsonplaceholder.typicode.com/posts'

const load_post = ()=>{
    fetch(post_url)
    .then(response => response.json())
    .then(data => display(data))
}

const display = (posts) =>{
    // console.log(posts)
    posts.forEach(post => {
        console.log(post)
    });
}