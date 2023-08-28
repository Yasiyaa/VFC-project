var login = new Vue({
  el: "#cart",
  data: {
    first_name: "",
    last_name: "",
    address: "",
    selectedItems: [],
    total: 0,
    telephone:"",

    // all items
    equipments: [],

    // cart dynamic variables
    showTotal: 0,
  },
  mounted() {
    axios
      .get("http://localhost:3000/equipment")
      .then((res) => {
        if (res.status == 200) {
          this.equipments = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  },
  updated() {},
  methods: {
    placeOrder: function () {
      var order = {
        firstname: this.first_name,
        lastname: this.last_name,
        address: this.address,
        items: this.selectedItems,
        total: this.showTotal,
        telephone : this.telephone
      };

      axios
        .post("http://localhost:3000/order/addNew", order)
        .then((res) => {
          if (res.status == 200) {
            window.location.href = "./payment.html";
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
    },

    addToCart: function (item) {
      this.selectedItems.push(item);
      this.showTotal = parseInt(this.showTotal) + parseInt(item.price)
    },
    removeCartItem: function (item) {
      var index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index,1);
      this.showTotal = parseInt(this.showTotal) - parseInt(item.price);
    },
  },
});
