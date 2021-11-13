import React from "react"

const SignupForm = () => {
  return (
    <form
      action="https://gmail.us20.list-manage.com/subscribe/post?u=f7018dceb3150994f88bb6444&amp;id=6ba40da537"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <label htmlFor="mce-EMAIL">Subscribe</label>
        <input
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        />
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_f7018dceb3150994f88bb6444_6ba40da537"
            tabIndex="-1"
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignupForm
