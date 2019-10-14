const userModule = (function () {
    const users = [];
    const allowedUsers = [];
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
            allowedUsers.length = 0;
            users.forEach(user => {
                if(user.allowed === true){
                    allowedUsers.push(user);
                }
            });
            return allowedUsers.length;
        }
    }
})();

module.exports = userModule;

// userModule.addUser({
// 	name: "someone",
// 	pass: "somePass",
// 	allowed: false
// });
// userModule.addUser({
// 	name: "someone2",
// 	pass: "somePass2",
// 	allowed: true
// });