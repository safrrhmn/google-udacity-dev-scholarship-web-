/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var facebookProfile = {
  name: "Saifur",
  friends: 10,
  messages: ["First Message", "Second Message"],
  postMessage: function(msg) {
    facebookProfile.messages.push(msg);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(params) {
    facebookProfile.friends += 1;
  },
  removeFriend: function(params) {
    facebookProfile.friends -= 1;
  }
};
/*
console.log(facebookProfile.postMessage("Test"));

console.log(facebookProfile.messages);*/
