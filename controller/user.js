import UserServices from "../services/user.js";

export const signUp = async (req, res, next) => {
  try {
    const newUser = req.body;
    const savedUser = await UserServices.createUser(newUser);

    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
    next(new Error(error.message));
  }
};

export const signIn = async (req, res, next) => {
  try {
    const payload = req.body;
    const token = await UserServices.signInUser(payload);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    next(new Error(error.message));
  }
};

export const getUser = function(req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
};

export const updateUser = function(req, res) {
    User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
};
