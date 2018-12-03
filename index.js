const express = require('express');
const app = express();


const CardData = [
    {
        image: "https://media.giphy.com/media/xUA7bdmmuDruZ7f86k/giphy.gif",
        title: "Boku no Hero Academia",
        description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
        showlink: "https://www.crunchyroll.com/my-hero-academia",
        learnlink: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=boku%20no%20hero",

    },
    {
        image: "https://media.giphy.com/media/g4BcE4UhLhNks/giphy.gif",
        title: "Naruto",
        description: "Naruto Uzumaki, an adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        showlink: "https://www.viz.com/naruto",
        learnlink: "https://myanimelist.net/anime/20/Naruto",
    },
    {
        image: "https://media.giphy.com/media/dLPhgJ9MhcdP2/giphy.gif",
        title: "Sakuraso no Pet na Kanojo",
        description: "Mashiro, a prodigal painter, has her whole world flipped upside down after transferring to the Sakurasou dormatory.",
        showlink: "https://www.crunchyroll.com/the-pet-girl-of-sakurasou",
        learnlink: "https://myanimelist.net/anime/13759/Sakurasou_no_Pet_na_Kanojo?q=sakurasou",
    },
    {
        image: "https://thumbs.gfycat.com/HauntingCharmingAmericankestrel-size_restricted.gif",
        title: "Emiya-san Chi no Kyou no Gohan",
        description: "Fate and food meet in a delicious and gentle world." +
            "Delicious meals are served at the Emiya’s dinner table every day, through spring, summer, fall and winter. ",
        showlink: "https://www.crunchyroll.com/todays-menu-for-the-emiya-family",
        learnlink: "https://myanimelist.net/anime/37033/Emiya-san_Chi_no_Kyou_no_Gohan",
    },
    {
        image: "https://i.gifer.com/6jqn.gif",
        title: "Shingeki no Kyojin",
        description: "Eren Jaeger and the rest of humanity live inside cities surrounded " +
            "by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason.",
        showlink: "https://www.crunchyroll.com/attack-on-titan",
        learnlink: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=shin",
    },
    {
        image: "https://media1.tenor.com/images/7628ef15fae6335243426753e35ae71d/tenor.gif?itemid=6185864",
        title: "Anohana",
        description: "Menma, a girl who dies in an accident, then returns as a ghost to haunt her best friend, Jintan, five years later. "
            + "The problem is, neither Menma or Jintan know why she has returned.",
        showlink: "https://myanimelist.net/anime/9989/Ano_Hi_Mita_Hana_no_Namae_wo_Bokutachi_wa_Mada_Shiranai?q=anohana",
        learnlink: "https://www.crunchyroll.com/anohana-the-flower-we-saw-that-day",
    },
];

app.get('/confirm', (req, res) => {
    res.json(CardData);
});
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

        // res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    });

    // app.get('/confirm', (req, res) => {
    //     res.json(CardData);
    // });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);