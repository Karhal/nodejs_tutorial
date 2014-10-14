/**
 * Created by pdeclemy on 01/10/14.
 */
function route(handle,pathname, response, request) {
    console.log("Début du traitement de l'URL " + pathname + ".");

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        //404
        console.log("Aucun gestionnaire associé à " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Non trouvé");
        response.end();
    }
}
exports.route = route;