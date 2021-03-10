<template>
  <div>
    <b-container class="placeholder">
      <b-row no-gutters>
        <b-col cols="12" class="header-banner">
          <img src="/assets/images/contact-banner.gif" />
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="intro">
          <h3 class="title">Let's chat</h3>
          <p class="bio-text">
            If you like what you have seen are interesting in hiring me for
            work, please get in touch via any of the methods below.
          </p>
        </b-col>
      </b-row>

      <!-- old contact
    <b-row id="contact-details" no-gutters>

      <b-col class="contact" cols="12" lg=6>
        <span class="contact-method"><a href="mailto:mr.kieran.mcbride@googlemail.com"><u>E-mail me</u></a></span>
      </b-col>
      <b-col class="contact" cols="12" lg="6">
        <span class="contact-method"> Tel: +44 (0)790 683 6833</span>
      </b-col>
      
    </b-row>
    -->

      <b-row no-gutters>
        <b-col class="form-container" cols="12">
          <form
            netlify
            name="contact-me"
            method="POST"
            id="contact-form"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-me" />

            <input
              class="field"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />

            <input
              class="field"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />

            <textarea
              class="field"
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
            ></textarea>

            <button type="submit" value="Send Message" class="primary-btn">
              Send Message
            </button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};
</script>

<style scoped>
.placeholder {
  font-family: "Open Sans", sans-serif;
  padding: 0;
  text-align: left;
}
img {
  display: block;
  margin: 0 auto;
  overflow: hidden;
  max-width: 100%;
}
.intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5%;
}
#contact-details {
  margin-bottom: 6%;
}
.bio-text {
  width: 60%;
  padding-right: 7%;
}
.title {
  width: 40%;
  font-family: "Abril Fatface", cursive;
  font-size: 4rem;
  text-align: center;
}
a {
  color: #242424;
  width: 100%;
}
.contact {
  display: flex;
  justify-content: space-between;
}
.contact-method {
  margin: 7%;
  text-align: center;
  width: 100%;
  border: solid 1px #2c3e50;
  padding: 8% 0;
}

#contact-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 93%;
  margin: 0 auto;
}
.form-container {
  min-height: 400px;
  margin: 3% auto;
}
.field {
  margin-bottom: 2.5%;
  width: 100%;
  border: none;
  background-color: #ebebeb;
  padding: 1.5%;
}
.primary-btn {
  padding: 1% 1.5%;
  color: #ffffff;
}

@media only screen and (max-width: 991px) {
  .intro {
    flex-direction: column;
  }
  .bio-text,
  .title {
    width: 70%;
    margin: 0 auto;
    padding: 0;
  }
  .placeholder {
    padding: 0;
    text-align: center;
  }
  .contact {
    flex-direction: column;
    margin-top: 5%;
  }
  .contact-method {
    text-align: center;
    align-content: center;
    width: 66%;
    border: solid 1px #2c3e50;
    padding: 3% 0;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 480px) {
  .title {
    font-size: 2.75rem;
  }
  .primary-btn {
    padding: 2% 3.5%;
    color: #ffffff;
  }
}
</style>
