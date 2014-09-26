// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

// implement queue data structure here
  // this.count: 0,
  // this.first:

  initialize: function(){

    this.on('dequeue', function(song){
      this.dequeue(song);
    }, this);
      //delete the song from SQ
    this.on('ended', function(song) {
      console.log('I heard you');
      this.dequeue(song);
      this.playFirst();
    }, this);

  },

  playFirst: function(){
    // play the first song, if there are any to play
    if(this.models.length > 0 ){
      this.models[0].play();
    }
  },

  // check:
  checkNext: function() {

    if (this.models.length > 0){
       this.playFirst();
    }
  },

  enqueue: function(song){
    this.add(song);
    //check if it's the only song -> play
    if(this.models.length === 1) {
      this.playFirst();
    }

    //put it in storage
    localStorage.setItem('queue', this.toJSON());
  },

  dequeue: function(song){
    this.remove(song);

    localStorage.setItem('queue', this.toJSON());
    console.log('toJSON', this.toJSON());
  }



});
