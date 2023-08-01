var login = new Vue({
  el: "#order_placement",
  data: {
    first_name: "",
    last_name: "",
    address: "",
    items: [
      {
        product: "Back Machine",
      },
    ],
    total: 95000,
  },
  mounted() {},
  updated() {},
  methods: {
    placeOrder: function () {
      var order = {
        firstname: this.first_name,
        lastname: this.last_name,
        address: this.address,
        items: this.items,
        total: this.total,
      };

      axios
        .post("http://localhost:3000/order/addNew", order)
        .then((res) => {
          if (res.status == 200) {
            window.location.href = "./index.html";
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Incorrect email or password");
        });
    },
  },
});
