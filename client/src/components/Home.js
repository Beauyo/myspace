import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Segment, Button, Card, Icon, Image } from 'semantic-ui-react'

class Home extends React.Component {
    state = { people: [] }

    componentDidMount() {
        axios.get(`/api/people`)
        .then(res => 
            this.setState({ people: res.data.data })
        )
    }

    downVote = (id) => {
        const { people } = this.state
        this.setState({ people: people.filter( c => c.id !== id), })
    }

    sample = () => { 
        const { people } = this.state

        if (people.length) {
            const index = Math.floor(Math.random() * people.length)
            return people[index]
        } else {
            return null
        }
    }

    render() {
        const person = this.sample()
        // const people1 = this.sample()
        // const people2 = this.sample()
        if (person) {
        return (
            <div>
                <br />
                <Header as='h1'>Myspace</Header>
                <br />
                <Card key={person.id}>
                    <Image src={person.avatar} />
                    <Card.Content>
                        <Card.Header>
                            { person.name }
                        </Card.Header>
                        <Card.Description>
                            { person.age }
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button color='red' icon basic>
                            <Icon name='thumbs down' />
                        </Button>
                        <Button color='green' icon basic>
                            <Icon name='thumbs up' />
                        </Button>
                    </Card.Content>
                </Card>
                <Link to='/my_people'>
                    <Button color='blue'>
                        My Friends
                    </Button>
                
                </Link>
            </div>
        )
    } else {
    return <h1>no mas friends</h1> }
    }


}

export default Home