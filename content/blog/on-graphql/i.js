import { getBook } from './models/book'

const schema = new GraphQLSchema ({
	query : new GraphQLObjectType ({
		name : `Query`,
		fields : {
			book : {
				type : bookType ,
				args : {
					id : {
						description : 'internal id of the book',
						type : GraphQLNonNull ( GraphQLString ) ,
					},
				},
				resolve: ( root, { id } ) => getBook ( id ),
			}
		}
	})
});