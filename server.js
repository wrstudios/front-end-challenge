const { ApolloServer, gql } = require('apollo-server')
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')

const typeDefs = gql`
  type Car {
    id: ID!
    make: String!
    model: String!
    year: Int!
    price: Int!
    fuelType: String!
    engineVolume: Float!
    engineType: String!
    driveType: String!
    imageUrl: String!
    trim: String!
  }

  type Query {
    cars: [Car]!
  }
`

const resolvers = {
  Query: {
    cars: () => {
      // Mimic network conditions
      const latency = Math.floor(Math.random() * 1500)
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: '1',
                make: 'Audi',
                model: 'RS 7',
                year: 2021,
                price: 116223,
                fuelType: 'Hybrid',
                engineVolume: 4.0,
                engineType: 'V8 Turbocharged',
                driveType: 'All Wheel Drive',
                imageUrl: 'http://localhost:3001/images/audi.png',
                trim: 'Sportback'
              },
              {
                id: '2',
                make: 'Alfa Romeo',
                model: '4C',
                year: 2020,
                price: 64190,
                fuelType: 'Gas',
                engineVolume: 1.7,
                engineType: 'Inline 4 Turbocharged',
                driveType: 'Rear Wheel Drive',
                imageUrl: 'http://localhost:3001/images/alpha-romeo.png',
                trim: 'Spider'
              },
              {
                id: '3',
                make: 'Ford',
                model: 'Mustang',
                year: 2020,
                price: 41075,
                fuelType: 'Gas',
                engineVolume: 5.0,
                engineType: 'V8',
                driveType: 'Rear Wheel Drive',
                imageUrl: 'http://localhost:3001/images/mustang.png',
                trim: 'GT Premium Fastback'
              },
              {
                id: '4',
                make: 'Jaguar',
                model: 'F-TYPE',
                year: 2021,
                price: 62750,
                fuelType: 'Gas',
                engineVolume: 2.0,
                engineType: 'Inline 4 Turbocharged',
                driveType: 'Rear Wheel Drive',
                imageUrl: 'http://localhost:3001/images/jaguar.png',
                trim: 'P300 Coupe RWD'
              },
              {
                id: '5',
                make: 'Mercedes',
                model: 'AMG GT',
                year: 2021,
                price: 89920,
                fuelType: 'Hybrid',
                engineVolume: 3.0,
                engineType: 'V6 Turbocharged',
                driveType: 'All Wheel Drive',
                imageUrl: 'http://localhost:3001/images/mercedes.png',
                trim: 'AMG GT 43 4-Door Coupe'
              },
              {
                id: '6',
                make: 'Porsche',
                model: '911',
                year: 2021,
                price: 98708,
                fuelType: 'Gas',
                engineVolume: 3.0,
                engineType: 'Flat 6 Turbocharged',
                driveType: 'Rear Wheel Drive',
                imageUrl: 'http://localhost:3001/images/porsche.png',
                trim: 'Carrera Coupe'
              },
              {
                id: '7',
                make: 'Lotus',
                model: 'Evora',
                year: 2020,
                price: 116223,
                fuelType: 'Gas',
                engineVolume: 3.5,
                engineType: 'V6 Supercharged',
                driveType: 'Rear Wheel Drive',
                imageUrl: 'http://localhost:3001/images/lotus.png',
                trim: 'GT'
              },
              {
                id: '8',
                make: 'Maserati',
                model: 'Quattro',
                year: 2020,
                price: 100757,
                fuelType: 'Gas',
                engineVolume: 3.0,
                engineType: 'V6 Turbocharged',
                driveType: 'All Wheel Drive',
                imageUrl: 'http://localhost:3001/images/maserati.png',
                trim: 'S Q4 GranLusso 3.0L'
              }
            ]),
          latency
        )
      )
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
