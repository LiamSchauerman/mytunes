// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  events: {
    'ended': function(){
      console.log('ended');
      this.model.ended();
    }
  },
  initialize: function() {
    // console.log("This is this.$el ",this.$el);
    // console.log("Ended",this.$el[0].ended);

    // this.$el.on('ended', function() {
    //   console.log("Ended",this.$el[0].ended);
    //   console.log('Song was ended');
    //   console.log(this.model);
    //   this.model.ended();
    // }, this);
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
