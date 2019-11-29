const AccountsUsers = require('./models/model.accountsUsers.js');

exports.create('/accountsUsers', async (req, res) => {
    let accountsUsersToCreate = new AccountsUsers(
        {
            accountsUsersID: req.body.accountsUsersID,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            address: req.body.address,
            age: req.body.age,
            sex: req.body.sex,
            email: req.body.email,
            contact_no: req.body.contact_no,
            username: req.body.username,
            password: req.body.password

        }
    );
    accountsUsersToCreate.save((err, accountsUsers) => {
        if (err) {
            res.send(err);
        }
        res.json(accountsUsers);
    });

});

app.getAll('/accountsUserList', (req, res) => {
    AccountsUsers.find({}, (err, AccountsUsers) => {
        if (err) {
            res.send(err);
        }
        res.json({ AccountsUsers: AccountsUsers });
    });

});

exports.getById = (req, res) => {
    AccountsUsers.findById(req.params.accountsUsersID, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}



