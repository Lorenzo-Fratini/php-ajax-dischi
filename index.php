<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base php</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <!-- vue 2 -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
  </head>
  <body>
  <div id="app">
    <div class="select-cont">
      <label for="genre">Choose a genre :</label>
      <select name="genre" v-model="selected" @change="genreFilter()">
        <option value="all">All</option>
        <option v-for="genre in genres" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>
    <div class="cont">
      <div v-for="cd in cds">
        <div class="box">
          <div class="img-cont">
            <img :src="cd.poster" alt="poster">
          </div>
          <div class="info-cont">
            <h4>{{ cd.title }}</h4>
            <p>{{ cd.author}} - <i>{{ cd.year }}</i></p>
            <p>{{ cd.genre }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</html>