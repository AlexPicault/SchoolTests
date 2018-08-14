<template>
<div>
    <home></home>
    <div class="container">
        <ul>
            <li v-for ="(sticker) in stickers">{{sticker}}</li>
        </ul>
            <div class="mx-auto">
        <table>
            <tr>
                <th>edfzre</th>
                <th>zdvcz</th>
            </tr>
            <tr v-for="(sticker) in stickers">
               <td>{{sticker}}</td>
                                </tr>
        </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      stickers: ["toto", "tata", "tutu", 3]
    };
  }
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}

ul {
  text-align: center;
  height: 1em;
  width: 100%;
}
li {
  padding: 1%;
  font-size: 1.5em;
  display: inline-block;
  list-style: none;
  font: Verdana;
}

.table {
}
</style>

