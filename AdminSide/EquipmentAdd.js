var addingSection = new Vue({
  el: "#AddingSection",
  data: {
    name:'',
    price:'',
    imagePath:'',

  },
  mounted() {},
  updated() {},

  methods: {

    addEquipment: function () {
      var trainer = {
        imagePath:'e3',
        name: this.name,
        price: this.price,
       
      };

      axios
        .post("http://localhost:3000/equipment/add", trainer)
        .then((res) => {
          if (res.status == 200) {
            alert('Equipment added!')
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
    },
  },
});
