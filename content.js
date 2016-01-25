InboxSDK.load('1', 'sdk_WerewolfPost_92a6a5c025').then(function(sdk){

  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "Compose Werewolf Message",
      iconUrl: "http://icons.iconarchive.com/icons/icons8/halloween/128/werewolf-icon.png",
      onClick: function(event) {
        //store a copy with the werewolf postscript
        //for each recipient, generate a random number
        //and if hits threshold - ASSIGNED HOW? - make 
        //a copy and send it to that recipient.
        event.composeView.ACTION();
      },
    });
  });
});
