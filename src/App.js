import React, { useState } from 'react'
import CreateTripPage from './pages/createTrip'
import TripPage from './pages/trip'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  const [trip, setTrip] = useState({
    name: 'Placeholder Trip',
    description: 'Cool Trip description',
    owner: 'Mitch',
    members: ['Gerry', 'Felipe', 'Disha'],
  })

  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route
            path="/trip"
            render={routeProps => (
              <TripPage {...routeProps} trip={trip} />
            )}
          />
          <Route
            path="/"
            render={routeProps => (
              <CreateTripPage setTrip={setTrip} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
