var login = new Vue({
    el: "#trainer",
    data: {
        trainers:[],
        name: 'sds',
        description: 'aa',
        imagePath:''
    },
    mounted() {

        axios
        .get("http://localhost:3000/trainer")
        .then((res) => {
          if (res.status == 200) {
            this.trainers = res.data;
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