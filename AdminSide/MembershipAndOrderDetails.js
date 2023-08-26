var memberDetails = new Vue({
    el: "#MemberDetails",
    data: {
      memberDetails:[],

    },
    mounted() {

        axios
        .get("http://localhost:3000/member")
        .then((res) => {
          if (res.status == 200) {
            
            this.memberDetails = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
        
    },
    updated() {
        
    },
  })

  var orderDetails = new Vue({
    el: "#OrderDetails",
    data: {
      orderDetails:[],

    },
    mounted() {

        axios
        .get("http://localhost:3000/order")
        .then((res) => {
          if (res.status == 200) {
            
            this.orderDetails = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
        
    },
    updated() {
        
    },
  })