import { gql } from 'apollo-server-micro';
import db from './db.json';

// The statements within quotes are used by GraphQL to provide
// human readable descriptions to developers using the API
export const typeDefs = gql`
	type Beast {
		"ID of beast (taken from binomial initial)"
		id: ID
		"number of legs beast has"
		legs: Int
		"a beast's name in Latin"
		binomial: String
		"a beast's name to you and I"
		commonName: String
	}

	type Query {
		beasts: [Beast]
		cmfs:	[CMF]
	}

	type CMF {
		"Goal of the CMF"
		goal: Expression
		"Output of the CMF"
		output: [Expression]
		"Input of the CMF"
		input: [Expression]
		"Constraint of the CMF"
		contraint:	[Expression]
		"Representations"
		representation:	[Representation]
		"Related CMFs"
		related:	[{CMF, Expression}]
	}

	type Expression {
		"List of terms"
		terms:	[Term]
	}

	type Term {
		"Standard semantic URI"
		uri: String
		"Generality group"
		generality: Generality
	}

	type Generalilty {
		"Name of the generality group"
		name: String
		"Parent generality group"
		parent: Generality
	}

	type Representation {
		"Management system for this representation"
		managementSystem:	String
		"Script/Implementation"
		script:	String
	}
`
export const resolvers = {
	Query: {
		// Returns array of all beasts.
		beasts: () => db.beasts,
		cmfs:	() => db.cmfs,
	}
}
