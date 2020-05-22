var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    tileSources:   {
        height: 43123,
        width:  37301,
        tileSize: 1024,
        minLevel: 0,
        maxLevel: 6,
        getTileUrl: function( level, x, y ){
          return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/20200507_RL012/EM/" + y + "_" + x + "_" + (6-level) + ".png"
        }
    }
});
