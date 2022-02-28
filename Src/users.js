exports.createUser = (req, Res) => {
  // first, let' do some validation.... (email, Password)
  if (!req.body || !req.body.email || !req.body.password) {
    // invalid request
    res.status(400).send('invalid request')
  }

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    isAdmin: false,
    userRole: 5,
  };

  const db = connectDb();
  db.collection('users').add(newUser)
  .then(doc => {
      //TODO: create a JWT and send bak the token
      res.send('Account Created')
  })
  .catch(err => res.status(500).send(err))


}
