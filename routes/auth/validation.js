exports.signIn = (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    console.log(1);
  } else if (username.trim().length > 15){
    console.log(2);
  }

  next();
}