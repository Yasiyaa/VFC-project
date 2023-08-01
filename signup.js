var login = new Vue({
    el: "#signupForm",
    data: {
        username: '',
        password: ''
    },
    mounted() {
        
    },
    updated() {
        
    },
    methods:{
  
        addUser: function(){
  
        var credentials  = { password: this.password, email: this.username};
  
        axios.post('http://localhost:3000/user/addNew',credentials)
        .then((res) => {
            
            if(res.status == 200){
                window.location.href = './login.html'
            }
  
        })
        .catch((err)=>{
            console.log(err)
            alert('Incorrect email or password');
        });
        }
    }
  })