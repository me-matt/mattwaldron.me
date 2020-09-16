import React from "react"
import Line from "./Line"

const Contact = props => (
  <Line>
    <a href={`mailto:${props.email}`}>{props.email}</a>
  </Line>
)

export default Contact;