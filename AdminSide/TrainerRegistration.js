var registration = new Vue({
  el: "#Registration",
  data: {
    name:'',
    description:'',
    username:'',
    password:''
  },
  mounted() {},
  updated() {},

  methods: {

    registerTrainer: function () {
      var trainer = {
        imagePath:'trainer1',
        name: this.name,
        username: this.username,
        password: this.password,
        description: this.description
      };

      axios
        .post("http://localhost:3000/trainer/add", trainer)
        .then((res) => {
          if (res.status == 200) {
            alert('Trainer added!')
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
    },
  },
});
