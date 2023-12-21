const app = Vue.createApp({
    data() {
        return {
          name: "Jhon Doe",
          age: 20,
          imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.floor(Math.random() * 5);
        }
    }
});

app.mount('#assignment');
