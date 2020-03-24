// loads up and stores the images
(()=>{
    let resourceCache = {};
    let readyCallbacks = [];

    const load = (urlOrArr)=>{
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach((url)=> {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    const _load = (imgUrl)=>{
        if (resourceCache[imgUrl]) {
            return resourceCache[imgUrl];
        }
        else {
            let img = new Image();
            img.onload = ()=>{
                resourceCache[imgUrl] = img;

                if (isReady()) {
                    readyCallbacks.forEach((func) =>{ func(); });
                }
            };
            resourceCache[imgUrl] = false;
            img.src = imgUrl;
        }
    }

    const get = (imgUrl)=>{
        return resourceCache[imgUrl];
    }

    const isReady = ()=>{
        let ready = true;
        for (let k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    const onReady = (currFunc)=>{
        readyCallbacks.push(currFunc);
    }

    window.resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();