
const photos = [
  {
    src: './photo4.jpeg',
    width: 4,
    height: 3
  },
  {
    src: './photo3.jpeg',
    width: 1,
    height: 1
  }
];

&lt;Gallery photos={photos} /&gt;;







var form = document.getElementById('form')

    form.addEventListener('submit',function(event){
      event.preventDefault()

      var username = document.getElementById("username").value
      console.log(username)
    
      var email = document.getElementById("email").value
      console.log(email)
    })

