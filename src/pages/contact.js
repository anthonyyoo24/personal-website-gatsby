import "./contact.scss"
import React, { useState } from "react"
import { Field, reduxForm, reset } from "redux-form"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import emailjs from "emailjs-com"
import { useDispatch } from "react-redux"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <p className="field__error">{error}</p>
  }
}

const renderInput = ({ input, meta, type, placeholder }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`
  const fieldInput =
    type === "textarea" ? (
      <textarea
        {...input}
        className="field__input"
        rows="7"
        placeholder={placeholder}
      />
    ) : (
      <input
        {...input}
        className="field__input"
        autoComplete="off"
        type={type}
        placeholder={placeholder}
      />
    )

  return (
    <div className={className}>
      {fieldInput}
      {renderError(meta)}
    </div>
  )
}

const Contact = props => {
  const [buttonText, setButtonText] = useState("SUBMIT")
  const dispatch = useDispatch()

  const { wave } = useStaticQuery(
    graphql`
      query {
        wave: file(relativePath: { eq: "wave-background.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const onSubmit = async formValues => {
    setButtonText("SENDING...")

    await emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        "#contact-form",
        "user_b3hbRKU9tYcbaMz10bObN"
      )
      .then(
        response => {
          setButtonText("SENT!")

          setTimeout(() => {
            dispatch(reset("contactForm"))
            setButtonText("SUBMIT")
          }, 2000)
        },
        error => {
          setButtonText("FAILED TO SEND")

          setTimeout(() => {
            setButtonText("SUBMIT")
          }, 2000)
        }
      )
  }

  return (
    <React.Fragment>
       <Helmet>
        <title>Contact | Anthony Yoo</title>
      </Helmet>
      <Header location={props.location} />
      <BackgroundImage
        className="contact-page"
        fluid={wave.childImageSharp.fluid}
        Tag="section"
      >
        <div className="contact">
          <h1>Let's Get in Touch</h1>
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={props.handleSubmit(onSubmit)}
          >
            <Field name="name" component={renderInput} placeholder="Name" />
            <Field
              name="email"
              component={renderInput}
              placeholder="Email"
              type="email"
            />
            <Field
              name="subject"
              component={renderInput}
              placeholder="Subject"
            />
            <Field
              name="message"
              component={renderInput}
              placeholder="Message"
              type="textarea"
            />
            <button className="primary button-3of4">{buttonText}</button>
          </form>
        </div>
      </BackgroundImage>
      <Footer />
    </React.Fragment>
  )
}

const validate = formValues => {
  const errors = {}

  if (!formValues.name) errors.name = "Please enter your name."
  if (!formValues.email) errors.email = "Please enter your email."
  if (!formValues.subject) errors.subject = "Please enter the subject."
  if (!formValues.message) errors.message = "Please enter a message."

  return errors
}

export default reduxForm({ form: "contactForm", validate })(Contact)
