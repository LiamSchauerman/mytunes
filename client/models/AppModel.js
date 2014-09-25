// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    // console.log(this.get('currentSong'));
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    //adding song to queue
    params.library.on('enqueue', function(song){
      this.get('songQueue').enqueue(song);
      console.log(this.get('songQueue'));
      console.log(this.get('songQueue').models[0]);
      }, this);

    //removing song from the queue
/*    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
      console.log(this.get('songQueue'));
    }, this);*/


  },

});

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

