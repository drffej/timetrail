module.exports = function(eleventyConfig) {

console.log('here')

	// convert hh:mm:ss to sections
	function seconds(hms){
		const [hours, minutes, seconds] = hms.split(':');
		const number =  Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
		return number
	}

	// find fastest time in array of events
	function findFastestTime(events, id){
		var fastestTime = null;
		events.forEach(event =>{
			if (event.id === id && event.races.length > 0){
				var fastestSeconds = seconds(event.races[0].time)
				fastestTime = { ...event.races[0], 'seconds': fastestSeconds }
				
				for(var i=1; i < event.races.length; i++){
					if (fastestSeconds > seconds(event.races[i].time)){
						fastestSeconds = seconds(event.races[i].time);
						fastestTime = { ...event.races[i], 'seconds': fastestSeconds }
						
					}
				}
			}
		})
		console.log(fastestTime)
		return fastestTime;
	}


	// Return fastest times for event
	eleventyConfig.addFilter("getFastestTime", function( competitorCollection, id) {
		//console.log('got :', competitorCollection,id )
		//console.log(competitorCollection)

		var results = []; 
		competitorCollection.forEach(competitor => {
			const fastestTime = findFastestTime( competitor.data.events, id)
			if (fastestTime !== null){
				console.log('saving',fastestTime)
				results.push({ ...fastestTime, name: competitor.data.name, club: competitor.data.club} )
			}
			
		});

		function compare(a,b){
			if (a.seconds < b.seconds)
			return -1;
			if (a.seconds > b.seconds)
				return 1;
			return 0;
		}
		
		return results.sort(compare);
	});

	// add pass through
	//eleventyConfig.addPassthroughCopy("/public/*.png");
	eleventyConfig.addPassthroughCopy("/content/**/*.png");

    return {

		passthroughFileCopy: true,
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
			"js"
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
}