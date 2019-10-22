const userModule = (function () {
    const users = [];
    // const allowedUsers = [];
    function findUser(u, token) {
        return users.find( user => user[token] == u );
    };
    return{
        addUser: function(tokens) {
            users.push(tokens);
        },
        allowUser: function(u) {
            findUser(u, "name").allowed = true;
        },
        disallowUser: function(u) {
            findUser(u, "name").allowed = false;
        },
        countAllowedUsers: function() {
            // allowedUsers = [];
            let allowedUsers = 0;
            users.forEach(user => {
                if(user.allowed === true)
                    allowedUsers++;
            }); 
            return allowedUsers;
            // return allowedUsers.length;
        }
    }
})();

module.exports = userModule;