import React, { useEffect } from 'react';

const LoginRedirect: React.FC = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      console.log('카카오 인가 코드:', code);
    }
  }, []);

  return <div>카카오 로그인 테스트...</div>;
};

export default LoginRedirect;
