const express = require('express');
const router = new express.Router();

const User = require('../../model/users');

router.get('/', (req, res) => {
    res.status(200).send('<h1>Hello wolrd Home page</h1>');
});


// *******************  Read Methods  *********************************************

//  Get all users Data

router.get('/users', async(req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(201).send(users);
    } catch (err) {
        res.status(400).send(err);
    }
});

//  Get single / particular user data 

router.get('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if (user) {
            res.status(201).send(user);
        } else {
            res.status(404).send('no user find plz check your id again');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


// *******************  POST, PUT, PATCH, DELETE Methods *********************************************

//  create a new user using promise method 

// router.post('/users', (req, res) => {
//     const user = new User(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//         console.log(user)
//     }).catch((err) => {
//         res.status(400).send(err);
//         console.log(err)
//     });
// });

//  create a new user using  async await method   

router.post('/users', async(req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
});


//  Update user Using PUT method

router.put('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const upuser = req.body;
        const result = await User.findByIdAndUpdate(_id, upuser, { new: true });
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
});

//  Update user Using PATCH method

router.patch('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const upuser = req.body;
        const result = await User.findByIdAndUpdate(_id, upuser, { new: true });
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
});

// delete user by id

router.delete('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const deluser = await User.findByIdAndDelete(_id);
        const users = await User.find();
        if (deluser) {
            res.status(201).send(users);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;