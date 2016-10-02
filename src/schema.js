import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import data from './data';
import Person from './types/person';

const { people } = data;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    person: {
      type: Person,
      args: {
        ssn: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (_, { ssn }) =>
        people.find(person => person.ssn === ssn),
    },
  },
});

const Schema = new GraphQLSchema({
  query: RootQueryType,
});

export default Schema;
