const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    console.log('get')
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ noUserFound: 'No user found' }));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ noUserFound: 'No user found' }));
});

router.post('/', (req, res) => {
    console.log('post')
    User.create(req.body)
    .then(users => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

router.put('/:id', (req, res) => {
    console.log('put',req.params.id)
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(users => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
    console.log('delete')
    User.findByIdAndRemove(req.params.id, req.body)
    .then(users => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }));
});

module.exports = router;