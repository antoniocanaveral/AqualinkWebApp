import React from 'react';
import { NewsletterStyle } from './Style';
import { Button } from '../buttons/buttons';

function Newsletter() {
  return (
    <NewsletterStyle>
      <figcaption>
        <form action="">
          <h4>Subscribe To Our Newsletter</h4>
          <p>We notify you once any post is published</p>
          <Button size="small" type="primary">
            Subscribe
          </Button>
        </form>
      </figcaption>
      <img src={new URL('../../static/img/open-message.png', import.meta.url).href} alt="" />
    </NewsletterStyle>
  );
}

export default Newsletter;
