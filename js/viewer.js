var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "//openseadragon.github.io/openseadragon/images/",
    tileSources:   {
        height: 43123,
        width:  37301,
        tileSize: 1024,
        minLevel: 0,
        maxLevel: 6,
        getTileUrl: function( level, x, y ){
          return "http://sonic/long_term_storage/rlane/CATMAID/projects/20200507_RL012/lil_EM_montaged/6/" + y + "_" + x + "_" + (6-level) + ".png"
        }
    }
});
