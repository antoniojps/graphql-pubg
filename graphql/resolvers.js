const _match = require('./../utils/filter/match')
const _player = require('./../utils/filter/player')
const _pubg = require('./../utils/requests/pubg-api')


const Query = {
	player: (obj, arg) => {
		return _pubg.getPlayerMatches(arg.name, arg.shards).then(player => {
			return {
				id: player.data[0].id,
				name: player.data[0].attributes.name,
				matches: () => {
					arg.matchesLimit = arg.matchesLimit || 1;
					const matchesIDs = _player.getPlayerMatchesArr(player, arg.matchesLimit)
					return _pubg.getMatchListData(matchesIDs, arg.shards).then(res => res)
				}
			}
		}).catch(err => {
			console.log(err)
		})
	},
	match: (obj, arg) =>  _pubg.getMatchData(arg.id).then(res => res)
}

const Match = {
	id: obj => obj.data.id,
	gameMode: obj => obj.data.attributes.gameMode,
	createdAt: obj => obj.data.attributes.createdAt,
	map: obj => obj.data.attributes.mapName,
	isCustomMatch: obj => obj.data.attributes.isCustomMatch,
	duration: obj => obj.data.attributes.duration,
	server: obj => obj.data.attributes.shardId,
	totalParticipants: obj => _match.getParticipants(obj).length,
	rosters: obj => _match.getRosters(obj)
}

const Roster = {
	id: obj => obj.roster.id,
	slot: obj => obj.roster.attributes.stats.teamId,
	stats: obj => {
		const rosterParticipants = _match.getRosterParticipantsArr(obj.roster)
		const matchParticipants = _match.getParticipants(obj.match)
		const rosterParticipantsData = _match.getRosterParticipants(matchParticipants, rosterParticipants);

		return {
			rosters: obj.roster,
			participants: rosterParticipantsData
		}
	},
	participants: (obj) => {
		const rosterParticipants = _match.getRosterParticipantsArr(obj.roster)
		const matchParticipants = _match.getParticipants(obj.match)

		return _match.getRosterParticipants(matchParticipants, rosterParticipants)
		// make request if data not available
	}
}

const RosterStats = {
	won: obj => obj.rosters.attributes.won === "true" ? true : false,
	rank: obj =>  obj.rosters.attributes.stats.rank,
	kills: obj =>  _match.getRosterKills(obj.participants),
	damage: obj => _match.getRosterDamage(obj.participants),
	dbnos: obj => _match.getRosterDbnos(obj.participants)
}

const Participant = {
	id: obj => obj.id,
	name: obj => obj.attributes.stats.name,
	kills: obj => obj.attributes.stats.kills,
	damage: obj => obj.attributes.stats.damageDealt,
	dbnos: obj => obj.attributes.stats.DBNOs
}

module.exports = {
	Query,
	Match,
	Roster,
	RosterStats,
	Participant
}
