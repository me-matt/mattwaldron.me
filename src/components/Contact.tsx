import React from "react"

type Props = {
  email: string
}

const Contact = ({ email }: Props) => (
  <a href={`mailto:${email}`}>{email}</a>
)

export default Contact;
