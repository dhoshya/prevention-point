import React from "react"
import Navbar from "../components/Navbar"
import LoginForm from "../components/LoginForm"
import ParticipantSearch from "../components/ParticipantSearch"
import Participant from "../components/Participants"
import Queue from "../components/Queue"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from "../routes/PrivateRoute"

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <PrivateRoute exact path="/" component={ParticipantSearch} />
      <PrivateRoute exact path="/participants" component={Participant} />
      <PrivateRoute exact path="/queue" component={Queue} />
      <Route path="/login" component={LoginForm} />
    </Router>
  )
}

export default Routes
