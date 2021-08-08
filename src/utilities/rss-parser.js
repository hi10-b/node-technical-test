const RSSParser = require("rss-parser");

const parser = new RSSParser();

// This function uses the rss-parser library to fetch the url that's passed
// and return a javascript object.
// For more info see - https://github.com/rbren/rss-parser#readme

// function getRSSFeed(rss_url) {
// 	try {
// 		let feed = parser.parseURL(
// 			"https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss"
// 		);

// 		console.log("pasered data " + feed);
// 		return parser.parseURL(rss_url);
// 	} catch (error) {
// 		console.log("Error:", error.message);
// 	}
// }

function getRSSFeed(rss_url) {
	try {
		(async () => {
			const feed = await parser.parseURL(rss_url);

			let feedArray = [];
			feed.items.forEach((item) => {
				feedArray.push(item);
			});
			// console.log(feed);

			return feed;
		})();
		// return parser.parseURL(rss_url);
	} catch (error) {
		console.log("Error:", error.message);
	}

	// feed.items.forEach((item) => {
	// 	console.log(item.title + ":" + item.link);
	// });
}

module.exports = getRSSFeed;
