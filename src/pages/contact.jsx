import React from 'react'
import Layout from '../layout'
import Seo from '../seo'
import { Link } from 'gatsby'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-16">
            <h1 className="mt-4 text-sm leading-7 text-slate-500 font-regular uppercase">
              Contact Us
            </h1>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-slate-900">
              Get In <span className="text-primary">Touch</span>
            </h3>
          </div>

          <form
            className="w-full"
            method="post"
            action="https://getform.io/f/19c7479b-99af-444b-9a77-2be10547457d"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="block w-full bg-slate-200 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="first-name"
                  type="text"
                  name="first-name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full bg-slate-200 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="last-name"
                  type="text"
                  name="last-name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="block w-full bg-slate-200 text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full bg-slate-200 text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="block w-full bg-slate-200 text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="message"
                ></textarea>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                By submitting this form, you agree to our{' '}
                <Link className="text-primary" to="/privacy-policy">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link className="text-primary" to="/terms-and-conditions">
                  Terms and Conditions
                </Link>
                .
              </p>
              <div className="flex justify-between w-full px-3">
                <button
                  className="shadow bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const Head = () => {
  return (
    <Seo
      title="Contact Us"
      description="Feel free to send us a message any time."
    />
  )
}
