const _0x36add1=_0x4788;(function(_0x205f2f,_0x318401){const _0xcc684b=_0x4788,_0x50ed46=_0x205f2f();while(!![]){try{const _0x3960a5=-parseInt(_0xcc684b(0x11e))/0x1*(parseInt(_0xcc684b(0x148))/0x2)+parseInt(_0xcc684b(0x14c))/0x3+parseInt(_0xcc684b(0x120))/0x4+parseInt(_0xcc684b(0x14e))/0x5+parseInt(_0xcc684b(0x119))/0x6*(-parseInt(_0xcc684b(0x135))/0x7)+-parseInt(_0xcc684b(0x12a))/0x8+-parseInt(_0xcc684b(0x14d))/0x9*(parseInt(_0xcc684b(0x144))/0xa);if(_0x3960a5===_0x318401)break;else _0x50ed46['push'](_0x50ed46['shift']());}catch(_0x204bf0){_0x50ed46['push'](_0x50ed46['shift']());}}}(_0x597c,0x328fe));import _0x1bde24 from'form-data';import _0x2f559a from'jimp';async function processing(_0x4ca40c,_0x4806ed){return new Promise(async(_0xc2a72c,_0x353ff0)=>{const _0x37d3f4=_0x4788;let _0x2dfcba=['enhance',_0x37d3f4(0x138),'dehaze'];_0x2dfcba[_0x37d3f4(0x137)](_0x4806ed)?_0x4806ed=_0x4806ed:_0x4806ed=_0x2dfcba[0x0];let _0x2c85a4,_0x1b2aff=new _0x1bde24(),_0x46b749=_0x37d3f4(0x12b)+_0x37d3f4(0x12e)+_0x37d3f4(0x140)+_0x37d3f4(0x14a)+_0x37d3f4(0x14f)+_0x4806ed;_0x1b2aff[_0x37d3f4(0x133)](_0x37d3f4(0x13e),0x1,{'Content-Transfer-Encoding':_0x37d3f4(0x126),'contentType':_0x37d3f4(0x145)}),_0x1b2aff['append'](_0x37d3f4(0x13a),Buffer['from'](_0x4ca40c),{'filename':_0x37d3f4(0x149),'contentType':_0x37d3f4(0x11a)}),_0x1b2aff[_0x37d3f4(0x125)]({'url':_0x46b749,'host':'inferenceengine'+'.vyro'+_0x37d3f4(0x131),'path':'/'+_0x4806ed,'protocol':'https:','headers':{'User-Agent':_0x37d3f4(0x11c),'Connection':_0x37d3f4(0x13f),'Accept-Encoding':_0x37d3f4(0x14b)}},function(_0x3e64c3,_0x573151){const _0x7d4bb7=_0x37d3f4;if(_0x3e64c3)_0x353ff0();let _0x2648ce=[];_0x573151['on'](_0x7d4bb7(0x143),function(_0x2611b1,_0x5b377b){const _0x2330f0=_0x7d4bb7;_0x2648ce[_0x2330f0(0x130)](_0x2611b1);})['on'](_0x7d4bb7(0x139),()=>{const _0x5ddfb8=_0x7d4bb7;_0xc2a72c(Buffer[_0x5ddfb8(0x11f)](_0x2648ce));}),_0x573151['on'](_0x7d4bb7(0x11b),_0x17a3bf=>{_0x353ff0();});});});}function _0x4788(_0x2daf41,_0x4fae3b){const _0x597c05=_0x597c();return _0x4788=function(_0x478852,_0x3c4450){_0x478852=_0x478852-0x118;let _0x5482bd=_0x597c05[_0x478852];return _0x5482bd;},_0x4788(_0x2daf41,_0x4fae3b);}let handler=async(_0x335e52,{conn:_0x4eeccc,usedPrefix:_0x26db38,command:_0x376047})=>{const _0x50c755=_0x4788;switch(_0x376047){case _0x50c755(0x136):{_0x4eeccc[_0x50c755(0x121)]=_0x4eeccc['enhancer']?_0x4eeccc[_0x50c755(0x121)]:{};if(_0x335e52['sender']in _0x4eeccc[_0x50c755(0x121)])throw _0x50c755(0x128);let _0x3f38a7=_0x335e52[_0x50c755(0x13c)]?_0x335e52[_0x50c755(0x13c)]:_0x335e52,_0x5ebb58=(_0x3f38a7[_0x50c755(0x12c)]||_0x3f38a7)[_0x50c755(0x118)]||_0x3f38a7[_0x50c755(0x11d)]||'';if(!_0x5ebb58)throw _0x50c755(0x122);if(!/image\/(jpe?g|png)/['test'](_0x5ebb58))throw'Mime\x20'+_0x5ebb58+_0x50c755(0x132);else _0x4eeccc['enhancer'][_0x335e52[_0x50c755(0x123)]]=!![];_0x335e52['reply']('Proses\x20Kak...');let _0x54c681=await _0x3f38a7['download']?.(),_0x4399f3;try{const _0x56deae=await processing(_0x54c681,_0x50c755(0x134));_0x4eeccc[_0x50c755(0x150)](_0x335e52[_0x50c755(0x13d)],_0x56deae,'',_0x50c755(0x124),_0x335e52);}catch(_0x4c8854){_0x4399f3=!![];}finally{_0x4399f3&&_0x335e52[_0x50c755(0x141)](_0x50c755(0x12d)),delete _0x4eeccc[_0x50c755(0x121)][_0x335e52[_0x50c755(0x123)]];}}break;case'color':{_0x4eeccc[_0x50c755(0x138)]=_0x4eeccc[_0x50c755(0x138)]?_0x4eeccc[_0x50c755(0x138)]:{};if(_0x335e52[_0x50c755(0x123)]in _0x4eeccc[_0x50c755(0x138)])throw _0x50c755(0x128);let _0x632416=_0x335e52[_0x50c755(0x13c)]?_0x335e52[_0x50c755(0x13c)]:_0x335e52,_0x360812=(_0x632416[_0x50c755(0x12c)]||_0x632416)[_0x50c755(0x118)]||_0x632416[_0x50c755(0x11d)]||'';if(!_0x360812)throw _0x50c755(0x122);if(!/image\/(jpe?g|png)/[_0x50c755(0x142)](_0x360812))throw'Mime\x20'+_0x360812+_0x50c755(0x132);else _0x4eeccc[_0x50c755(0x138)][_0x335e52[_0x50c755(0x123)]]=!![];_0x335e52[_0x50c755(0x141)]('Proses\x20Kak...');let _0x21e89e=await _0x632416[_0x50c755(0x146)]?.(),_0x27b001;try{const _0x366f75=await processing(_0x21e89e,_0x50c755(0x134));_0x4eeccc[_0x50c755(0x150)](_0x335e52[_0x50c755(0x13d)],_0x366f75,'','Sudah\x20Jadi\x20Kak\x20>//<',_0x335e52);}catch(_0x18774a){_0x27b001=!![];}finally{_0x27b001&&_0x335e52[_0x50c755(0x141)](_0x50c755(0x12d)),delete _0x4eeccc[_0x50c755(0x138)][_0x335e52['chat']];}}break;case'hd':case _0x50c755(0x12f):{_0x4eeccc[_0x50c755(0x12f)]=_0x4eeccc[_0x50c755(0x12f)]?_0x4eeccc[_0x50c755(0x12f)]:{};if(_0x335e52['sender']in _0x4eeccc[_0x50c755(0x12f)])throw'Masih\x20Ada\x20Proses\x20Yang\x20Belum\x20Selesai\x20Kak,\x20Silahkan\x20Tunggu\x20Sampai\x20Selesai\x20Yah\x20>//<';let _0x4d2fde=_0x335e52['quoted']?_0x335e52['quoted']:_0x335e52,_0x1cb2d2=(_0x4d2fde['msg']||_0x4d2fde)[_0x50c755(0x118)]||_0x4d2fde[_0x50c755(0x11d)]||'';if(!_0x1cb2d2)throw _0x50c755(0x122);if(!/image\/(jpe?g|png)/[_0x50c755(0x142)](_0x1cb2d2))throw'Mime\x20'+_0x1cb2d2+_0x50c755(0x132);else _0x4eeccc[_0x50c755(0x12f)][_0x335e52[_0x50c755(0x123)]]=!![];_0x335e52[_0x50c755(0x141)]('Proses\x20Kak...');let _0x425239=await _0x4d2fde[_0x50c755(0x146)]?.(),_0x5c7bb6;try{const _0x4dc6ad=await processing(_0x425239,'enhance');_0x4eeccc[_0x50c755(0x150)](_0x335e52[_0x50c755(0x13d)],_0x4dc6ad,'',_0x50c755(0x124),_0x335e52);}catch(_0x36c5b2){_0x5c7bb6=!![];}finally{_0x5c7bb6&&_0x335e52[_0x50c755(0x141)](_0x50c755(0x12d)),delete _0x4eeccc[_0x50c755(0x12f)][_0x335e52[_0x50c755(0x123)]];}}break;}};function _0x597c(){const _0x3b6b4b=['enhance_image_body.jpg','.vyro','gzip','385272fjLtoG','45laCCXE','1861015qRTbfe','.ai/','sendFile','mimetype','277872XMtsCc','image/jpeg','error','okhttp/4.9.3','mediaType','149eAYfWM','concat','1069716XhrGaD','enhancer','Fotonya\x20Mana\x20Kak?','sender','Sudah\x20Jadi\x20Kak\x20>//<','submit','binary','tags','Masih\x20Ada\x20Proses\x20Yang\x20Belum\x20Selesai\x20Kak,\x20Silahkan\x20Tunggu\x20Sampai\x20Selesai\x20Yah\x20>//<','command','1244832LbVAei','https','msg','Proses\x20Gagal\x20:(','://','hdr','push','.ai','\x20tidak\x20support','append','enhance','7fLGpRE','remini','includes','recolor','end','image','premium','quoted','chat','model_version','Keep-Alive','inferenceengine','reply','test','data','599770yWdYsx','multipart/form-data;\x20charset=uttf-8','download','limit','794UueCVO'];_0x597c=function(){return _0x3b6b4b;};return _0x597c();}handler['help']=[_0x36add1(0x136),'hdr','hd'],handler[_0x36add1(0x127)]=['ai'],handler[_0x36add1(0x13b)]=![],handler[_0x36add1(0x147)]=!![],handler[_0x36add1(0x129)]=[_0x36add1(0x136),_0x36add1(0x12f),'hd'];export default handler;