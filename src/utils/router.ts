function redirectToLogin() {
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false
    }
  }
}

function redirectToHome() {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  }
}

export { redirectToLogin, redirectToHome }
