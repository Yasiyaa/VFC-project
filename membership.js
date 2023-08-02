var login = new Vue({
    el: "#membershipSelect",
    data: {
        email: 'jason@gmaill.com',
        plan: 'basic',
        payment:10000
    },
    mounted() {
        
    },
    updated() {
        
    },
    methods:{
  
        selectPackage: function(){
  
            var package  = { email: this.email, plan: this.plan, payment: this.payment};
  
        axios.post('http://localhost:3000/member/add',package)
        .then((res) => {
            
            if(res.status == 200){
                window.location.href = './index.html'
            }
  
        })
        .catch((err)=>{
            console.log(err)
            alert('Error');
        });
        }
    }
  })