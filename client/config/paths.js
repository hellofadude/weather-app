var path = require('path');


function resolveOwn(relativePath) {
	  return path.resolve(__dirname, relativePath);
}

function resolveApp(relativePath) {
	  return path.resolve(relativePath);
}


module.exports = {
		 appSrc: resolveApp('src'),
		 appHtml: resolveApp('index.html'),
		 appFavicon: resolveApp('favicon.ico'),
		 appNodeModules: resolveOwn('node_modules'),
		 ownNodeModules: resolveOwn('../node_modules')
}