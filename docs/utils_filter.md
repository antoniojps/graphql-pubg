## Filters the boring data
Basically a lot of loops, filtering and maps on arrays and objects (boring stuff)

### Match
<dl>
<dt><a href="#getRosters">getRosters(obj)</a> ⇒ <code>array</code></dt>
<dd><p>gets Array of roster Objects in match, includes match data in each element</p>
</dd>
<dt><a href="#getParticipants">getParticipants(obj)</a> ⇒ <code>array</code></dt>
<dd><p>gets Array of participants Objects in match</p>
</dd>
<dt><a href="#getRosterParticipantsArr">getRosterParticipantsArr(rosterObj)</a> ⇒ <code>array</code></dt>
<dd><p>gets Array of participants IDs in roster Object</p>
</dd>
<dt><a href="#getRosterParticipants">getRosterParticipants(matchParticipants, rosterParticipantsArr)</a> ⇒ <code>array</code></dt>
<dd><p>gets Array of Participant Objects in Roster by finding the participants with the roster participants id´
sorts Participants by kills</p>
</dd>
</dl>

<a name="getRosters"></a>

## getRosters(obj) ⇒ <code>array</code>
gets Array of roster Objects in match, includes match data in each element

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | match data |

<a name="getParticipants"></a>

## getParticipants(obj) ⇒ <code>array</code>
gets Array of participants Objects in match

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | match data |

<a name="getRosterParticipantsArr"></a>

## getRosterParticipantsArr(rosterObj) ⇒ <code>array</code>
gets Array of participants IDs in roster Object

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| rosterObj | <code>object</code> | roster type |

<a name="getRosterParticipants"></a>

## getRosterParticipants(matchParticipants, rosterParticipantsArr) ⇒ <code>array</code>
gets Array of Participant Objects in Roster by finding the participants with the roster participants id´
sorts Participants by kills

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| matchParticipants | <code>array</code> | Array of participants |
| rosterParticipantsArr | <code>array</code> | Array of roster participants IDs |

### Player

<a name="getPlayerMatchesArr"></a>

## getPlayerMatchesArr(playerObj, limit) ⇒ <code>array</code>
gets Array of Player matches
sorts by more recent

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| playerObj | <code>array</code> |  | Array of participants |
| limit | <code>array</code> | <code>1</code> | Array of roster participants IDs |