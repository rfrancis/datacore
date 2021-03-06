module.exports = {
	siteMetadata: {
		title: `Star Trek Timelines Data Core`
	},
	plugins: [
		`gatsby-transformer-remark`,
		`gatsby-transformer-json`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/static/pages/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'crew',
				path: `${__dirname}/static/crew/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'structured',
				path: `${__dirname}/static/structured/`,
				ignore: [
					'**/events/*',
					'**/botcrew.json',
					'**/allcrew.json',
					'**/botcrewbad.json',
					'**/collections.json',
					'**/dilemmas.json',
					'**/event_crew.json',
					'**/event_instances.json',
					'**/event_leaderboards.json',
					'**/factions.json',
					'**/items.json',
					'**/missions.json',
					'**/quests.json',
					'**/ship_schematics.json',
					'**/upcomingevents.json',
					'**/misc_stats.json'
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Star Trek Timelines DataCore`,
				short_name: `DataCore`,
				start_url: `/`,
				background_color: `#3A3F44`,
				theme_color: `#272B30`,
				display: `standalone`,
				icon: `src/images/logo.svg`,
				include_favicon: true
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-112738113-3'
			}
		}
	]
};
