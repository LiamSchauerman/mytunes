// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    var storedValue = localStorage.getItem('playCount'+this.get('title'));
    this.set('count', storedValue || 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);

    //new method - increase the count
    this.set('count', parseInt(this.get('count')) + 1);

    //new method - saving playCount in localStorage
    localStorage.setItem('playCount'+this.get('title'), this.get('count'));
  }

});
