"use strict";
/*40_Album: Write a function called make_album() that builds a Object describing a music album. \
he function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artist_name, album_title, tracks) {
    let album_Obj = {
        artist: artist_name,
        album: album_title,
    };
    if (tracks !== undefined) {
        album_Obj.tracks = tracks;
    }
    return album_Obj;
}
//fuction one call
let album1 = make_album("Mac", "Hello");
//fuction Two call with option using Parameter
let album2 = make_album("Isabela", "Hellow Wprld", 2);
////fuction Three call
let album3 = make_album("Mical", "singing", 10);
console.log(album1);
console.log(album2);
console.log(album3);
