import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { AuthenticationWrap } from './overview/style';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <AuthenticationWrap style={{ backgroundImage: `url(${new URL('../../../static/img/admin-bg-light.png', import.meta.url).href})` }}>
          <div className="ninjadash-authentication-wrap">
            <div className="ninjadash-authentication-brand">
              <img className='aqx-authentication-brand' src={new URL(`../../../static/img/AQx-IMG/logo-aqualink-240x36px-bgLite-02.svg`, import.meta.url).href} alt="AquaLink" />
            </div>
            <WraperContent />
          </div>
        </AuthenticationWrap>
      </Suspense>
    );
  };
};

export default AuthLayout;
