// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  queuedSongs: [],

  initialize: function() {
    this.collection.on('add', function(song) {
      this.queuedSongs.push(new SongQueueEntryView({model: song}))
      this.render()
    }, this)
    this.render();
  },

  render: function() {
    if (this.queuedSongs.length <= 0) {
      return this.$el.html('<th>Queue</th>');
    }
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.queuedSongs.map(function(entryView){
        return entryView.render();
      })
    );
  }

});
