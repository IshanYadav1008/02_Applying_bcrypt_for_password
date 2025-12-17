const express = require ('express'); 
const router  = express.Router();

const User = require('./../models/User'); 

// POST route to add a person
router.post('/signup', async (req, res) => {

    try{
        const data      = req.body
        const newUser   = new User(data);
        const savedUser = await newUser.save();

        console.log('User created successfully');
        res.status(200).json({response: savedUser, message: 'Signup successful'});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// Login Route
router.post('/login', async (req, res) => {

    try{
        const { username, password } = req.body

        const user = await User.findOne({username: username})
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }

        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful',

            user: {
                id: user._id,
                username: user.username
            }
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Find all users
router.get('', async (req, res) => {
    try{
        const data = await User.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// Find user by it's id
router.get('/profile/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({user});
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Serson Error' })
    }
})

// Updating the user by id.
router.put('/:id', async (req, res) => {

    try{

        const userId         = req.params.id; 
        const updateUserData = req.body;      
        const updatedUser    = await User.findByIdAndUpdate(userId, updateUserData, {

            new: true,          
            runValidators: true

        })

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' })
        }

        console.log('User updated successfully');
        res.status(200).json(updatedUser); 
    }
    catch{

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// Delete user
router.delete('/:id', async (req, res) => {

    try{
        const userId   = req.params.id; 
        const response = await User.findByIdAndDelete(userId)

        if(!response) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log('user deleted');
        res.status(200).json({message: 'user deleted successfully'})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;