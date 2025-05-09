const User = require('../Models/users'); // Import the User model

// Function to handle admin login
exports.loginAdmin = async (req, res) => {
    const { name, password } = req.body;  // Get credentials from request body

    try {
        // Find the user by name (we expect only one user with the name 'admin')
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the one stored in the database
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If credentials are correct, send a success message
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
