/*
	Utils for match data filtering
	const _match = require('./utils/filter/match')

*/

/**
 * gets Array of roster Objects in match, includes match data in each element
 * @param {object} - match data
 * @returns {array} 
 */
function getRosters(obj) {
	const rosters = obj.included.filter(includedObj => includedObj.type === 'roster')
		.sort((obj1, obj2) => obj1.attributes.stats.rank - obj2.attributes.stats.rank)
	return rosters.map(roster => {
		return { 
			roster,
			match: obj 
		}
	})
}

/**
 * gets Array of participants Objects in match
 * @param {object} - match data
 * @returns {array} 
 */
function getParticipants(obj) {
	return obj.included.filter(includedObj => includedObj.type === 'participant')
}

/**
 * gets Array of participants IDs in roster Object
 * @param {object} - roster type
 * @returns {array} 
 */
function getRosterParticipantsArr(rosterObj) {
	return rosterObj.relationships.participants.data.map(participant => participant.id)
}

/**
 * gets Array of Participant Objects in Roster by finding the participants with the roster participants id´
 * sorts Participants by kills
 * @param {array} - Array of participants
 * @param {array} - Array of roster participants IDs
 * @returns {array} 
 */
function getRosterParticipants(matchParticipants, rosterParticipantsArr) {
	return rosterParticipantsArr.map((id) => {
		return matchParticipants.find((participant => participant.id === id))
	}).sort((obj1, obj2) => obj2.attributes.stats.kills - obj1.attributes.stats.kills)
}

function _getRosterStats(rosterParticipantsObj, key = 'kills') {
	return rosterParticipantsObj.map(participant => participant.attributes.stats[key])
		.reduce((accumulator, current) => accumulator + current)
}

function getRosterKills(rosterParticipantsObj) {
	return _getRosterStats(rosterParticipantsObj, 'kills')
}

function getRosterDamage(rosterParticipantsObj) {
	return Math.round(_getRosterStats(rosterParticipantsObj, 'damageDealt'))
}

function getRosterDbnos(rosterParticipantsObj) {
	return _getRosterStats(rosterParticipantsObj, 'DBNOs')

}

module.exports = {
	getRosters,
	getParticipants,
	getRosterParticipants,
	getRosterParticipantsArr,
	getRosterKills,
	getRosterDamage,
	getRosterDbnos
}
