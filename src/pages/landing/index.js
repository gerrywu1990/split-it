import React, { useContext } from 'react'
import SigninButton from '../../components/signinButton'
import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
} from '@chakra-ui/core'
import { UserContext } from '../../providers/UserProvider'
import calculator from '../../assets/calculator.png'

const LandingPage = () => {
  const user = useContext(UserContext)

  return (
    <>
      {user ? (
        <Heading as="h2">list user's trips & add trip button</Heading>
      ) : (
        <Flex h={600} bg="blue.50" align="flex-start" p={20}>
          <Flex w="35%" maxW="600px" m={5}>
            <Image src={calculator} alt="" />
          </Flex>
          <Flex
            h={400}
            direction="column"
            borderWidth="1px"
            rounded="lg"
            justify="space-around"
            p={10}
            bg="rgba(255,255,255,0.7)"
          >
            <Heading as="h2" size="xl">
              Sign in to split your trips!
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon icon="check-circle" color="green.500" />
                Add new trips with multiple members
              </ListItem>
              <ListItem>
                <ListIcon icon="check-circle" color="green.500" />
                Document all the trip expense at one place
              </ListItem>
              <ListItem>
                <ListIcon icon="check-circle" color="green.500" />
                Settle up the expense at just one click!
              </ListItem>
            </List>
            <SigninButton />
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default LandingPage