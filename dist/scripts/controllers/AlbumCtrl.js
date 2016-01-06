(function() {
   function AlbumCtrl(Fixtures) {
       console.log("AlbumCtrl")
       this.albumData = Fixtures.getAlbum();
   }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();