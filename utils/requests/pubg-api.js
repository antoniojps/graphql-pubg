const axios = require('axios')
// config
const ax = axios.create({
	baseURL: 'https://api.playbattlegrounds.com/shards/',
	timeout: 10000,
	headers: {
		'Authorization': `Bearer ${process.env.PUBG_KEY}`,
		'Accept': 'application/vnd.api+json',
		'Accept-Encoding': 'gzip'
	}
})

/**
 * gets player matches
 * @param {string} - player name - case sensitive
 * @param {string} - platform-server (pc-eu/pc-na...)
 * @returns {promise} 
 */
async function getPlayerMatches(player, shards = "pc-eu") {
	const url = `${encodeURI(shards)}/players?filter[playerNames]=${encodeURI(player)}`
	console.log(url)
	const playerMatches = await ax.get(url)
		.then(res => res.data)
		.catch(err => {
			console.log(error)
			return err
		})
	return playerMatches
}

/**
 * gets multiple matches data and returns array of matches objects
 * @param {array} - [matchesIDs]
 * @param {string} - platform-server (pc-eu/pc-na...)
 * @returns {promise} 
 */
async function getMatchListData(matchesIdArr, shards = 'pc-eu') {
	const matchesDataObj = await Promise.all(
		matchesIdArr.map((matchID) => getMatchData(matchID, shards))
	)
	return matchesDataObj
}

/**
 * gets match data
 * @param {string} - match id
 * @param {string} - platform-server (pc-eu/pc-na...)
 * @returns {promise} 
 */
async function getMatchData(matchID, shards = 'pc-eu') {
	const match = await ax.get(`${encodeURI(shards)}/matches/${encodeURI(matchID)}`)
		.then(res => res.data)
		.catch(err => {
			console.log(err)
			return err
		})
	return match;
}

module.exports = {
	getPlayerMatches,
	getMatchData,
	getMatchListData
}