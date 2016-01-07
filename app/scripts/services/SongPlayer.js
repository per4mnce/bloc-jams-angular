(function () {
    function SongPlayer() {
         /**
        * @desc Song player object that is injected by the factory service 
        * @type {Object}
        */
        var SongPlayer = {};
        
        /**
        * @desc The currently playing song object
        * @type {Object}
        */
        var currentSong = null;
        
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops playing if playing, and instantiates currentbuzzObjectnew with new song object
        * @param {Object} song
        */
        var setSong = function (song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };

        /**
        * @function playSong
        * @desc Plays the currentBuzzObject and sets the song.playing to true
        * @param {Object} song
        */
        var playSong = function (song) {
            currentBuzzObject.play();
            song.playing = true;
        }
        
        /**
        * @function play
        * @desc Sets the song and calls playSong() 
        * @param {Object} song
        */
        SongPlayer.play = function (song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };

         /**
        * @function pause
        * @desc Pauzes the playing of the currentBuzzObject 
        * @param {Object} song
        */
        SongPlayer.pause = function (song) {
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
