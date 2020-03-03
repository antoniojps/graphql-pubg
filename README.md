# Deprecated
I no longer maintain this project and do not recommend it's usage.

![graphql-pubg](./docs/logo.png)
# GraphQL-pubg
PUBG API aggregator on top of GraphQL

## How to start the server?

1. Clone the repository
```
$ git clone https://github.com/antoniojps/graphql-pubg.git
$ cd graphql-pubg
```
2. Paste your **API KEY to .env**

	- create .env file from .env.example (just remove .example) and add your API KEY
3. Install dependencies and start the server

```
$ npm install

// Starts both the webpack server as well as the graphQL server on 2 different ports
$ npm start
```

### GraphQL API
http://localhost:9000/graphql
.

### Access GraphiQL
http://localhost:9000/graphiql

## Example Queries:
The last 2 games of the player "shroud" in the North American server

```graphql
{
  player(name:"shroud",shards:"pc-na",matchesLimit:2){
    matches{
      id
      gameMode
      createdAt
      map
      isCustomMatch
      duration
      totalParticipants
      rosters{
        id
        slot
        stats{
          rank
          kills
          damage
          dbnos
        }
        participants{
          id
          name
          kills
          damage
          dbnos
        } 
      }
    }
  }
}
```

Get single match data

```graphql
{
  match(id:"47529205-1e29-4149-ac67-90907027c5f0",shards:"pc-eu"){
      id
      map
      isCustomMatch
      rosters{
        stats{
          rank
          kills
          damage
        }
        participants{
          name
          kills
          damage
        }
      }
    }
}
```

### Notes

- Shards is defaulted to "pc-eu" on all queries
- matchesLimit in the Player query is capped at 5 as of now (you can change this at Utils/filter/player.js on the function getPlayerMatchesArr
- Error handling is really limited
- No telemetry data

### Docs for the Utils
- [Filter](./docs/utils_filter.md)
- [Pubg-Api](./docs/utils_pubg-api.md)
