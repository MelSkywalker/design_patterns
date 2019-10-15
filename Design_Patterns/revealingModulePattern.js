const userModule = (function() {
    const users = [];
    const allowedUsers = [];
    function findUser(u, token) {
        return users.find( user => user[token] == u);
    };
    function addUser(tokens) {
        users.push(tokens);
    };
    function allowUser(u) {
        findUser(u, 'name').allowed = true;
    };
    function disallowUser(u) {
        findUser(u, 'name').allowed = false;
    };
    function countAllowedUsers() {
        allowedUsers.length = 0;
        users.forEach(user => {
            if(user.allowed === true)
                allowedUsers.push(user);
        });
        return allowedUsers.length;
    }
    return {
        addUser,
        allowUser,
        disallowUser
    };
})();

userModule.exports = userModule;