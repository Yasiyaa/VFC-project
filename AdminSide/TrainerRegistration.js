var registration = new Vue({
  el: "#Registration",
  data: {
    memberDetails: [],
  },
  mounted() {},
  updated() {},

  methods: {
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("https://httpbin.org/post", formData, { headers })
        .then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
    },

    registerTrainer: function () {
      var package = {
        email: this.email,
        plan: this.plan,
        payment: this.payment,
      };

      axios
        .post("http://localhost:3000/trainer/add", package)
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
  },
});
