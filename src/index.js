const express = require("express");
const app = express();
const port = 3002;
const getRSSFeed = require("./utilities/rss-parser");
const RSSParser = require("rss-parser");

const parser = new RSSParser();

//create different file for url imput
const url = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

app.get("/", (req, res) => {
	try {
		//rss parser required async
		(async () => {
			//xml feed from url
			const feed = await parser.parseURL(url);

			//create array and view as object
			let feedArray = [];

			//fetch frist 10
			// for (var x = 1; x < 10; x++) {
			// 	feedArray.push(feed.item[x].title);
			// 	feedArray.push(feed.item[x].content);
			// }
			feed.items.forEach((item) => {
				feedArray.push(item.title);
				feedArray.push(item.content);
			});
			console.log(feed);
			res.json(feedArray);
		})();

		// return parser.parseURL(rss_url);
	} catch (error) {
		console.log("Error:", error.message);
	}
});

//using rss-parser utility
app.get("/nasa2", (req, res) => {
	// const feed3 = parser2(url);
	// var feed = parser.parseURL(url);

	(async () => {
		const feed4 = await getRSSFeed(url);

		let feedArray4 = [];
		// feed4.item.forEach((item) => {
		// 	feedArray4.push(item);
		// 	console.log("item " + item.title);
		// });
		console.log(feed4);
		res.send(feed4);
	})();

	// const feedArray = feed3.forEach((items) => {
	// 	console.log("item " + items.title);
	// });
	console.log();
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
