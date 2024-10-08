export function makeResponsive(isResp, respDim, isScale, scaleType, domContainers, lib, stage) {
	var lastW, lastH, lastS=1;

	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	function resizeCanvas() {
		const parentG = domContainers[0].parentElement

		var w = lib.properties.width, h = lib.properties.height;
		var iw = parentG.offsetWidth, ih=parentG.offsetHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}

		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});

		document.querySelector('.footer').style.width = domContainers[0].width + "px";

		lastW = iw; lastH = ih; lastS = sRatio;

		//footer
		if(!stage) {
			return;
		}

		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}