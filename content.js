InboxSDK.load('1', 'sdk_WerewolfPost_92a6a5c025').then(function(sdk){

  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "Compose Werewolf Message",
      iconUrl: "https://icons.iconarchive.com/icons/icons8/halloween/128/werewolf-icon.png",
      hasDropdown: true,
      type: "SEND_ACTION",
      onClick: function(event) {
        //store a copy with the werewolf postscript
        //for each recipient, generate a random number
        //and if hits threshold - assigned in dropdown - make 
        //a copy and send it to that recipient.
        //Do Not Store Sent Copies In Sent Mail. Delete With Prejudice.
        var combinedRecipients = composeView.getToRecipients() + composeView.getCcRecipients() + composeView.getBccRecipients();

        var el = event.dropdown.el
        //apparently I don't have jQuery by default, but $('.selector') still
        //works in the Chrome Dev console 
        console.log(el);
      },
    });
  });
});
