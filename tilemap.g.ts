// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010102010101010101010101010101010201020101010101010101010101010102010201010101010101010202020202020102010101010101010101010202010101020202020201010101010102020101010101010101010101010101020201020202010101010101010101010202010101020101010101010101010102020101010201010101010101010101020201010102010101010101010101010202010101020101010101010101010102020101010201010101010101010101020201010102010101010101010101010202010101020101010101010101020202020202020201010101010101010201010101010101010101010101`, img`
. . . . . . . . . 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . 2 2 2 2 2 2 . 2 . . . . . . 
. . . . 2 2 . . . 2 2 2 2 2 . . 
. . . . 2 2 . . . . . . . . . . 
. . . . 2 2 . 2 2 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "cabin photo":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
