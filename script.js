function init() {

    new Vue({
        el: "#app",
        data: {
            'cds': [],
            'genres': [],
            'selected': 'all',
            'filterParam': ''
        },

        methods: {
            genreFilter: function() {
                
                this.filterParam = this.selected;

                const params = {
                    params: {
                      'searchKey': 'genre', 
                      'searchValue': this.filterParam
                    }
                };

                axios.get('data.php', params)
                .then(r => {
                    this.cds = r.data;
                    // console.log(this.cds);
                })
                .catch(e => {
                    console.log(e);
                })
                

                console.log(this.filterParam);
            }
        },

        mounted() {
            axios.get('data.php')
                .then(r => {
                    this.cds = r.data;
                    // console.log(this.cds);

                    this.cds.forEach(disc => {
            
                        const genres = this.genres;
                        const currentGenre = disc.genre;
            
                        if (!genres.includes(currentGenre)) {
            
                          genres.push(currentGenre);
                        }
                    });

                    // console.log(this.selected);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    });
}

document.addEventListener("DOMContentLoaded",init);