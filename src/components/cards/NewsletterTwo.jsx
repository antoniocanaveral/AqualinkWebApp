import React from 'react';
import { NewsletterStyle } from './Style';

function Newsletter() {
  return (
    <NewsletterStyle className="ninjadash-newsletter-theme-2">
      <img src={new URL('../../static/img/icon/message.svg', import.meta.url).href} alt="" />
      <figcaption>
        <h2>Subscribe To Our Newsletter</h2>
        <p>Sed ut perspiciatis unde omnis iste natussit</p>
      </figcaption>
    </NewsletterStyle>
  );
}

export default Newsletter;
