const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type ComplaintSummary {
    outStandingCount: Int
    total: Int
    type: String
    trend: String
  }

  type AverageStat {
    timeTaken: String
    percentageDelta: String
    trend: String
  }

  type Complaint {
    tenantNumber: Int
    tenantAddress: String
    complaintText: String
    date: String
    time: String
    level: String
    resolved: Boolean
  }

  type Query {
    complaintSummaries: [ComplaintSummary]
    averageResponseStats: AverageStat
    complaints: [Complaint]
  }
`

const summaries = [
  {
    total: 4,
    outStandingCount: 3,
    type: 'Severe',
    trend: 'down'
  },
  {
    total: 8,
    outStandingCount: 2,
    type: 'Moderate',
    trend: 'up' 
  },
  {
    total: 18,
    outStandingCount: 1,
    type: 'First Time',
    trend: 'up'
  }
]

const averageResponseStats = {
  timeTaken: '10 minutes',
  percentageDelta: '+12%',
  trend: 'up'
}

const complaints = [
  {
    id: 123489,
    tenantAddress: 126,
    complaintText: "Hi, I would like to report a water leak from the bedroom door",
    date: "30 June 2022",
    time: "7:00",
    level: "normal",
    resolved: true
  },
  {
    id: 567,
    tenantAddress: 241,
    complaintText: "Lights off in the corridor",
    date: "29 June 2022",
    time: "7:00",
    level: "moderate",
    resolved: true
  },
  {
    id: 1267829,
    tenantAddress: 102,
    complaintText: "This is the fifth time I complain about",
    date: "30 July 2022",
    time: "9:00",
    level: "severe",
    resolved: true
  },
  {
    id: 1,
    tenantAddress: 126,
    complaintText: "Hi, I would like to report a water leak from the bedroom door",
    date: "30 June 2022",
    time: "7:00",
    level: "normal",
    resolved: true
  },
  {
    id: 12,
    tenantAddress: 241,
    complaintText: "Lights off in the corridor",
    date: "29 June 2022",
    time: "7:00",
    level: "moderate",
    resolved: true
  },
  {
    id: 123,
    tenantAddress: 102,
    complaintText: "This is the fifth time I complain about",
    date: "30 July 2022",
    time: "9:00",
    level: "severe",
    resolved: true
  },
  {
    id: 234,
    tenantAddress: 126,
    complaintText: "Hi, I would like to report a water leak from the bedroom door",
    date: "30 June 2022",
    time: "7:00",
    level: "normal",
    resolved: true
  },
  {
    id: 129,
    tenantAddress: 241,
    complaintText: "Lights off in the corridor",
    date: "29 June 2022",
    time: "7:00",
    level: "moderate",
    resolved: true
  },
  {
    id: 1289,
    tenantAddress: 102,
    complaintText: "This is the fifth time I complain about",
    date: "30 July 2022",
    time: "9:00",
    level: "severe",
    resolved: true
  }
]


const resolvers = {
  Query: {
    complaintSummaries: () => summaries,
    averageResponseStats: () => averageResponseStats,
    complaints: () => complaints
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});