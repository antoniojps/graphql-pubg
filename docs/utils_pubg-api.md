## pubg-api Util
Deals with requests to the pubg-api

<dl>
<dt><a href="#getPlayerMatches">getPlayerMatches(player, shards)</a> ⇒ <code>promise</code></dt>
<dd><p>gets player matches</p>
</dd>
<dt><a href="#getMatchListData">getMatchListData(matchesIdArr, shards)</a> ⇒ <code>promise</code></dt>
<dd><p>gets multiple matches data and returns array of matches objects</p>
</dd>
<dt><a href="#getMatchData">getMatchData(matchID, shards)</a> ⇒ <code>promise</code></dt>
<dd><p>gets match data</p>
</dd>
</dl>

<a name="getPlayerMatches"></a>

## getPlayerMatches(player, shards) ⇒ <code>promise</code>
gets player matches

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| player | <code>string</code> |  | player name - case sensitive |
| shards | <code>string</code> | <code>&quot;pc-eu&quot;</code> | platform-server (pc-eu/pc-na...) |

<a name="getMatchListData"></a>

## getMatchListData(matchesIdArr, shards) ⇒ <code>promise</code>
gets multiple matches data and returns array of matches objects

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matchesIdArr | <code>array</code> |  | [matchesIDs] |
| shards | <code>string</code> | <code>&quot;pc-eu&quot;</code> | platform-server (pc-eu/pc-na...) |

<a name="getMatchData"></a>

## getMatchData(matchID, shards) ⇒ <code>promise</code>
gets match data

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matchID | <code>string</code> |  | match id |
| shards | <code>string</code> | <code>&quot;pc-eu&quot;</code> | platform-server (pc-eu/pc-na...) |