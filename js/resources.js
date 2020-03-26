// loads up and stores the images
(()=>{
    let resourceCache = {};
    let readyCallbacks = [];

    const curry = (urlOrArr)=>{
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach((url)=> {
                _curry(url);
            });
        }
        else {
            _curry(urlOrArr);
        }
    }

    const _curry = (imgUrl)=>{
        if (resourceCache[imgUrl]) {
            return resourceCache[imgUrl];
        }
        else {
            let img = new Image();
            img.onload = ()=>{
                resourceCache[imgUrl] = img;

                if (isReady()) {
                    readyCallbacks.forEach((func) =>{ 
                    func();
                    });
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
    
    const playAudio = () => {
        document.getElementById('play-music').play()
    }

    window.resources = {
        curry: curry,
        get: get,
        onReady: onReady,
        isReady: isReady,
        music: playAudio
    };
})();

