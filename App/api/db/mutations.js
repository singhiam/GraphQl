

import gql from 'graphql-tag'

const createUser = gql`
mutation ($email: String!, $password: String!, $name: String!, $emailSubscription: Boolean!) {
  createUser(authProvider: {email: {email: $email, password: $password}}, name: $name, emailSubscription: $emailSubscription) {
    id
  }
}
`

const signinUser = gql`
mutation ($email: String!, $password: String!) {
  signinUser(email: {email: $email, password: $password}) {
    token
  }
}
`

const userQuery = gql`
query {
  user {
    id
  }
}
`


export default graphql(createUser, { name: 'createUser' })(
    graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
        graphql(signinUser, { name: 'signinUser' })(
            withRouter(CreateUser))
    )
)