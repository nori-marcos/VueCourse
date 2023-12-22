const app = Vue.createApp({
    data() {
        return {
            keydownInput: '',
            keydownInput2: '',
            enterInput: ''
        };
    },
    methods: {
        showAlert() {
            alert('Alert!');
        },
        keydownInputHandler(event) {
            this.keydownInput = event.target.value;
        },
        keydownInputHandler2(event) {
            this.keydownInput2 = event.target.value;
        },
        enterInputHandler() {
            this.enterInput = this.keydownInput2;
        }
    }
});

app.mount('#assignment');
