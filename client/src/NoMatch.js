import React from 'react'
import { Header } from 'semantic-ui-react'

const NoMatch = () => (
    <Header as='h3' textAlign='center'>
        Page not Found
        <Link to='/'> Home</Link>
    </Header>
)

export default NoMatch