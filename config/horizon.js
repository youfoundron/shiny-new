const hz = {
  project_name: "shiny_new",
  auto_create_collection: true,
  auto_create_index: true,
  permissions: false,
  auth: {
    /* Authentication Options
    ** Each auth subsection will add an endpoint for authenticating through the
    ** specified provider.
    */
    // 'token_secret' is the key used to sign jwts
    token_secret: "whoopee",
    // 'allow_anonymous' issues new accounts to users without an auth provider
    allow_anonymous: true,
    // # 'allow_unauthenticated' allows connections that are not tied to a user id
    allow_unauthenticated: true,
    // # 'auth_redirect' specifies where users will be redirected to after login
    // auth_redirect: "/"
  }
}

export default hz
