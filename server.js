require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const {makeExecutableSchema} = require('graphql-tools')
const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')
const fs = require('fs')

const port = process.env.PORT || 9000

const typeDefs = fs.readFileSync('./graphql/schema.graphql',{encoding:'utf-8'})
const resolvers = require('./graphql/resolvers')
const schema = makeExecutableSchema({typeDefs,resolvers})

const app = express()
app.use(cors(), bodyParser.json())
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))

app.listen(port, () => console.info(`Server started on port ${port}`))
