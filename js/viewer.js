var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    showNavigator: true,
    tileSources:   [{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/0/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/1/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/2/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/3/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/4/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/5/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/6/" + y + "_" + x + "_" + (6-level) + ".png"}
      },{
      height: 43123,
      width:  37301,
      tileSize: 1024,
      minLevel: 0,
      maxLevel: 6,
      getTileUrl: function( level, x, y ){
        return "https://raw.githubusercontent.com/lanery/iCAT-MAID-data/master/projects/20200507_RL012/EM/7/" + y + "_" + x + "_" + (6-level) + ".png"}
      }
    ],
    sequenceMode: true,
    showReferenceStrip: true,
});
