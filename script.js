function init() {

    new Vue({
        el: "#app",
        data: {
            'cds': []
        },
        mounted() {
            axios.get('data.php')
                .then(r => {
                    this.cds = r.data;
                    console.log(this.cds);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    });
}

document.addEventListener("DOMContentLoaded",init);