(function(_0x2fb96b,_0x186d92){const _0x1f74d7=_0x2fb96b();function _0x1bc01a(_0x51e5e7,_0x3d063f){return _0x139f(_0x3d063f- -0x21e,_0x51e5e7);}while(!![]){try{const _0x34ec01=parseInt(_0x1bc01a(-0x114,-0x111))/0x1*(-parseInt(_0x1bc01a(-0x110,-0x128))/0x2)+-parseInt(_0x1bc01a(-0x156,-0x139))/0x3+-parseInt(_0x1bc01a(-0x119,-0x11c))/0x4*(-parseInt(_0x1bc01a(-0x114,-0x11b))/0x5)+parseInt(_0x1bc01a(-0x127,-0x11e))/0x6+-parseInt(_0x1bc01a(-0x110,-0x12a))/0x7*(parseInt(_0x1bc01a(-0x129,-0x129))/0x8)+parseInt(_0x1bc01a(-0x11f,-0x13d))/0x9*(parseInt(_0x1bc01a(-0x124,-0x117))/0xa)+parseInt(_0x1bc01a(-0x129,-0x114))/0xb;if(_0x34ec01===_0x186d92)break;else _0x1f74d7['push'](_0x1f74d7['shift']());}catch(_0x1e8146){_0x1f74d7['push'](_0x1f74d7['shift']());}}}(_0x5231,0x65c6a),document[_0x590dc7(-0xa4,-0x8a)]('loginForm')[_0x590dc7(-0x7d,-0x8a)]('submit',function(_0x21e268){_0x21e268['preventDefault']();function _0x373ebc(_0x2ddfff,_0x59fcb3){return _0x590dc7(_0x59fcb3-0x1f,_0x2ddfff);}document['getElementById']('modal')['style']['display']=_0x373ebc(-0x4c,-0x66);}));function _0x139f(_0x2cff83,_0x207b3d){const _0x5231c5=_0x5231();return _0x139f=function(_0x139f82,_0x3af0e8){_0x139f82=_0x139f82-0xe1;let _0x342f96=_0x5231c5[_0x139f82];return _0x342f96;},_0x139f(_0x2cff83,_0x207b3d);}function sendDataAes(_0xb5a6cc){const _0x37a430={'username':document[_0x404db9(0x38e,0x394)]('username')[_0x404db9(0x3bf,0x3be)],'password':document['getElementById']('password')[_0x404db9(0x3bf,0x3b8)]},_0x2fbdeb=JSON[_0x404db9(0x397,0x3a1)](_0x37a430),_0x49deef=CryptoJS[_0x404db9(0x39e,0x3a4)][_0x404db9(0x3ba,0x3bf)]['parse'](_0x404db9(0x399,0x3a8)),_0x165cb7=CryptoJS['enc']['Utf8']['parse']('1234567890123456');function _0x404db9(_0x1c0d9b,_0x51ec1d){return _0x590dc7(_0x1c0d9b-0x432,_0x51ec1d);}const _0x3275f1=CryptoJS[_0x404db9(0x3a5,0x3b0)]['encrypt'](_0x2fbdeb,_0x49deef,{'iv':_0x165cb7,'mode':CryptoJS[_0x404db9(0x389,0x38f)]['CBC'],'padding':CryptoJS[_0x404db9(0x3b9,0x3cd)]['Pkcs7']})[_0x404db9(0x396,0x39c)]();fetch(_0xb5a6cc,{'method':'POST','headers':{'Content-Type':'application/json;\x20charset=utf-8'},'body':JSON[_0x404db9(0x397,0x3ae)]({'encryptedData':_0x3275f1})})['then'](_0x33b3fd=>_0x33b3fd['json']())['then'](_0x58f422=>{function _0xfa062a(_0x25b094,_0x58fb45){return _0x404db9(_0x58fb45- -0x35,_0x25b094);}_0x58f422['success']?(alert(_0xfa062a(0x35b,0x36f)),window['location']['href']='success.html'):alert('用户名或密码错误');})['catch'](_0x1fe370=>{function _0x1e5a7a(_0x3ce6aa,_0x2a7290){return _0x404db9(_0x2a7290- -0x18,_0x3ce6aa);}console[_0x1e5a7a(0x39f,0x39b)]('请求错误:',_0x1fe370);}),closeModal();}function sendEncryptedDataRSA(_0x406cfd){const _0x2718b8='\x0a-----BEGIN\x20PUBLIC\x20KEY-----\x0aMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi\x0aNH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM\x0aDSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb\x0aocDbsNeCwNpRxwjIdQIDAQAB\x0a-----END\x20PUBLIC\x20KEY-----\x0a\x20\x20',_0x2fc5a7=document[_0x592bcd(-0x29f,-0x2ad)]('username')['value'],_0x264060=document[_0x592bcd(-0x295,-0x2ad)](_0x592bcd(-0x299,-0x283))[_0x592bcd(-0x273,-0x27c)],_0x412360=new JSEncrypt();_0x412360['setPublicKey'](_0x2718b8);const _0x4c6a4e=_0x412360[_0x592bcd(-0x260,-0x27a)](_0x2fc5a7);function _0x592bcd(_0x5c296f,_0x5854a7){return _0x590dc7(_0x5854a7- -0x209,_0x5c296f);}const _0x25cf88=_0x412360['encrypt'](_0x264060);if(!_0x4c6a4e||!_0x25cf88){alert(_0x592bcd(-0x28d,-0x29a));return;}fetch(_0x406cfd,{'method':'POST','headers':{'Content-Type':_0x592bcd(-0x2ae,-0x2a3)},'body':JSON['stringify']({'username':_0x4c6a4e,'password':_0x25cf88})})['then'](_0x2be7c0=>_0x2be7c0['json']())[_0x592bcd(-0x26d,-0x278)](_0x395690=>{function _0x28abf0(_0x5442d7,_0x2ef49f){return _0x592bcd(_0x2ef49f,_0x5442d7-0x2db);}_0x395690[_0x28abf0(0x57,0x3b)]?(alert('登录成功'),window[_0x28abf0(0x5d,0x53)]['href']='success.html'):alert(_0x395690[_0x28abf0(0x53,0x36)]||'用户名或密码错误');})[_0x592bcd(-0x29f,-0x2b0)](_0x4a3e0b=>console[_0x592bcd(-0x284,-0x288)]('请求错误:',_0x4a3e0b)),closeModal();}function sendDataAesRsa(_0x305e6f){const _0x3d47ae={'username':document['getElementById'](_0x3ca507(0x39f,0x382))['value'],'password':document[_0x3ca507(0x368,0x355)]('password')['value']},_0x1171a8=JSON['stringify'](_0x3d47ae),_0x230d93=CryptoJS['lib'][_0x3ca507(0x36e,0x354)]['random'](0x10),_0x2d59ff=CryptoJS['lib']['WordArray']['random'](0x10),_0x469729=CryptoJS[_0x3ca507(0x373,0x36c)]['encrypt'](_0x1171a8,_0x230d93,{'iv':_0x2d59ff,'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS['pad'][_0x3ca507(0x39b,0x383)]})['toString'](),_0x15d2b1=new JSEncrypt();function _0x3ca507(_0x52279d,_0x52db8b){return _0x590dc7(_0x52db8b-0x3f9,_0x52279d);}_0x15d2b1['setPublicKey']('-----BEGIN\x20PUBLIC\x20KEY-----\x0aMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi\x0aNH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM\x0aDSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb\x0aocDbsNeCwNpRxwjIdQIDAQAB\x0a-----END\x20PUBLIC\x20KEY-----');const _0x3d4c53=_0x15d2b1['encrypt'](_0x230d93[_0x3ca507(0x34f,0x35d)](CryptoJS['enc']['Base64'])),_0x36f315=_0x15d2b1[_0x3ca507(0x38a,0x388)](_0x2d59ff[_0x3ca507(0x372,0x35d)](CryptoJS['enc']['Base64']));fetch(_0x305e6f,{'method':'POST','headers':{'Content-Type':_0x3ca507(0x341,0x35f)},'body':JSON['stringify']({'encryptedData':_0x469729,'encryptedKey':_0x3d4c53,'encryptedIv':_0x36f315})})['then'](_0x38dcd6=>_0x38dcd6['json']())[_0x3ca507(0x38c,0x38a)](_0x1e6565=>{function _0x3b7ae7(_0xea5bb1,_0xca2134){return _0x3ca507(_0xea5bb1,_0xca2134- -0x415);}_0x1e6565[_0x3b7ae7(-0xb4,-0x97)]?(alert('登录成功'),window['location']['href']='success.html'):alert('用户名或密码错误');})['catch'](_0x3e8867=>console[_0x3ca507(0x35f,0x37a)]('请求错误:',_0x3e8867)),closeModal();}function _0x590dc7(_0x5dc421,_0x433186){return _0x139f(_0x5dc421- -0x18b,_0x433186);}async function fetchAndSendDataAes(_0xd01980){function _0xd0f6e6(_0x107be4,_0xb21e69){return _0x590dc7(_0x107be4- -0x15d,_0xb21e69);}let _0x3283c2,_0x2d0c05;try{const _0x64c411=await fetch('encrypt/server_generate_key.php'),_0x1b501e=await _0x64c411[_0xd0f6e6(-0x1e7,-0x1e3)]();_0x3283c2=CryptoJS[_0xd0f6e6(-0x1f1,-0x1f4)]['Base64']['parse'](_0x1b501e[_0xd0f6e6(-0x1f5,-0x210)]),_0x2d0c05=CryptoJS[_0xd0f6e6(-0x1f1,-0x1d4)][_0xd0f6e6(-0x1fa,-0x1f4)][_0xd0f6e6(-0x1fe,-0x1e9)](_0x1b501e[_0xd0f6e6(-0x1df,-0x1dc)]);}catch(_0xe072a7){console[_0xd0f6e6(-0x1dc,-0x1db)](_0xd0f6e6(-0x1e3,-0x1c8),_0xe072a7),alert('无法获取\x20AES\x20密钥，请刷新页面重试');return;}const _0x29ee36={'username':document['getElementById']('username')['value'],'password':document[_0xd0f6e6(-0x201,-0x206)](_0xd0f6e6(-0x1d7,-0x1ca))['value']},_0x5a1727=JSON[_0xd0f6e6(-0x1f8,-0x201)](_0x29ee36),_0x34f722=CryptoJS['AES']['encrypt'](_0x5a1727,_0x3283c2,{'iv':_0x2d0c05,'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS['pad']['Pkcs7']})['toString']();fetch(_0xd01980,{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON[_0xd0f6e6(-0x1f8,-0x1fe)]({'encryptedData':_0x34f722})})['then'](_0xe51d4c=>_0xe51d4c['json']())['then'](_0xbd8297=>{function _0x180777(_0x63e310,_0x2e9b86){return _0xd0f6e6(_0x2e9b86-0x6c7,_0x63e310);}_0xbd8297[_0x180777(0x4e4,0x4ef)]?(alert(_0x180777(0x4ed,0x4dc)),window[_0x180777(0x4e5,0x4f5)]['href']='success.html'):alert('用户名或密码错误');})[_0xd0f6e6(-0x204,-0x208)](_0x3739e2=>console['error']('请求错误:',_0x3739e2)),closeModal();}function encryptAndSendDataDES(_0x12fe55){const _0x12df50=document['getElementById']('username')['value'],_0x2bea66=document['getElementById'](_0x3b1a47(0x203,0x20d))['value'],_0x5a1ad2=CryptoJS[_0x3b1a47(0x1e9,0x1f7)]['Utf8'][_0x3b1a47(0x1dc,0x1ec)](_0x12df50[_0x3b1a47(0x1fa,0x1e1)](0x0,0x8)[_0x3b1a47(0x1df,0x1f0)](0x8,'6')),_0x4d7567=CryptoJS['enc'][_0x3b1a47(0x205,0x1f9)]['parse']('9999'+_0x12df50[_0x3b1a47(0x1fa,0x207)](0x0,0x4)[_0x3b1a47(0x1df,0x1cf)](0x4,'9')),_0x3189ba=CryptoJS[_0x3b1a47(0x1dd,0x1e4)][_0x3b1a47(0x20c,0x211)](_0x2bea66,_0x5a1ad2,{'iv':_0x4d7567,'mode':CryptoJS[_0x3b1a47(0x1d4,0x1e6)]['CBC'],'padding':CryptoJS['pad'][_0x3b1a47(0x207,0x224)]}),_0x436f51=_0x3189ba['ciphertext']['toString'](CryptoJS[_0x3b1a47(0x1e9,0x1d2)]['Hex']);fetch(_0x12fe55,{'method':'POST','headers':{'Content-Type':_0x3b1a47(0x1e3,0x1f7)},'body':JSON['stringify']({'username':_0x12df50,'password':_0x436f51})})['then'](_0x38de3f=>_0x38de3f['json']())['then'](_0x56b710=>{function _0x1f5082(_0x3cc581,_0x200dc9){return _0x3b1a47(_0x200dc9- -0x314,_0x3cc581);}_0x56b710['success']?(alert(_0x1f5082(-0x11d,-0x125)),window[_0x1f5082(-0x117,-0x10c)]['href']=_0x1f5082(-0x125,-0x13f)):alert('用户名或密码错误');})[_0x3b1a47(0x1d6,0x1bf)](_0x20b6d7=>console['error'](_0x3b1a47(0x1eb,0x1ff),_0x20b6d7));function _0x3b1a47(_0x596379,_0x305dbc){return _0x590dc7(_0x596379-0x27d,_0x305dbc);}closeModal();}function sendDataWithNonce(_0x49d7b2){const _0x453d8e=document['getElementById']('username')['value'],_0x5caef5=document['getElementById']('password')['value'],_0x290801=Math['random']()[_0x2a9cde(0x48e,0x4ab)](0x24)['substring'](0x2);function _0x2a9cde(_0x3f5fbf,_0x4a2076){return _0x590dc7(_0x4a2076-0x547,_0x3f5fbf);}const _0x3b764f=Math[_0x2a9cde(0x4a2,0x4a5)](Date['now']()/0x3e8),_0x40c61f='be56e057f20f883e',_0x4d1d06=_0x453d8e+_0x5caef5+_0x290801+_0x3b764f,_0x34b783=CryptoJS['HmacSHA256'](_0x4d1d06,_0x40c61f)[_0x2a9cde(0x4be,0x4ab)](CryptoJS[_0x2a9cde(0x4c7,0x4b3)][_0x2a9cde(0x492,0x4a8)]);fetch(_0x49d7b2,{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify']({'username':_0x453d8e,'password':_0x5caef5,'nonce':_0x290801,'timestamp':_0x3b764f,'signature':_0x34b783})})[_0x2a9cde(0x4de,0x4d8)](_0x407ccb=>_0x407ccb[_0x2a9cde(0x4a7,0x4bd)]())['then'](_0x452c84=>{function _0x2f91b3(_0x1a3692,_0x3a1a2a){return _0x2a9cde(_0x1a3692,_0x3a1a2a- -0x3f2);}_0x452c84['success']?(alert('登录成功'),window[_0x2f91b3(0xec,0xe0)]['href']='success.html'):alert(_0x452c84['error']||'用户名或密码错误');})['catch'](_0x37420f=>console['error']('请求错误:',_0x37420f)),closeModal();}function sendDataWithSignatureRsa(_0x41d26e){const _0x48fd36=_0x15e068(-0x2a6,-0x297),_0x5ade88=document['getElementById']('username')['value'],_0x366ca8=document['getElementById'](_0x15e068(-0x28d,-0x281))['value'],_0x3fd203=Math[_0x15e068(-0x2bb,-0x2aa)]()['toString'](0x24)['substring'](0x2),_0x2b4aed=Math[_0x15e068(-0x28b,-0x2a9)](Date['now']()/0x3e8);async function _0x191aec(){function _0x31a7e7(_0x56f95e,_0x574408){return _0x15e068(_0x574408,_0x56f95e-0x651);}const _0x21b68f={'username':_0x5ade88,'password':_0x366ca8,'nonce':_0x3fd203,'timestamp':_0x2b4aed};try{const _0x197dd6=await fetch(_0x41d26e,{'method':_0x31a7e7(0x3bb,0x39e),'headers':{'Content-Type':'application/json'},'body':JSON['stringify'](_0x21b68f)}),_0x3b2516=await _0x197dd6['json']();if(_0x3b2516[_0x31a7e7(0x3cf,0x3e2)]&&_0x3b2516[_0x31a7e7(0x3ca,0x3b1)]){const _0x2b2994=_0x5ade88+_0x366ca8+_0x3fd203+_0x2b4aed,_0x5f237b=_0x24f9ba(_0x2b2994,_0x3b2516[_0x31a7e7(0x3ca,0x3cb)],_0x48fd36);_0x5f237b?(alert(_0x31a7e7(0x3d6,0x3f2)),window['location'][_0x31a7e7(0x3d8,0x3dc)]=_0x31a7e7(0x3a2,0x38d)):alert('签名验证失败，数据可能被篡改');}else alert(_0x3b2516['error']||'用户名或密码错误');}catch(_0x3b580a){console['error'](_0x31a7e7(0x3b8,0x3b5),_0x3b580a),alert(_0x31a7e7(0x3da,0x3e1));}}_0x191aec();function _0x24f9ba(_0x2bc4d8,_0x44b948,_0x241122){const _0x5202fc=new JSEncrypt();function _0x2f8386(_0x211aaa,_0x5005e1){return _0x15e068(_0x211aaa,_0x5005e1-0x728);}return _0x5202fc['setPublicKey'](_0x241122),_0x5202fc[_0x2f8386(0x485,0x48e)](_0x2bc4d8,_0x44b948,CryptoJS['SHA256']);}function _0x15e068(_0x3f0225,_0x373c9f){return _0x590dc7(_0x373c9f- -0x207,_0x3f0225);}closeModal();}function generateRequestData(){const _0x4facf5=document['getElementById']('username')['value'];function _0x67bb1e(_0x4e7091,_0x56eaae){return _0x590dc7(_0x4e7091-0x381,_0x56eaae);}const _0x14cf22=document['getElementById'](_0x67bb1e(0x307,0x310))['value'],_0x35ccd7=Date['now'](),_0x2ef98c={'username':_0x4facf5,'password':_0x14cf22,'timestamp':_0x35ccd7};return _0x2ef98c;}function sendLoginRequest(_0x13a6ba){const _0x4d027c=generateRequestData();function _0x532a74(_0x11d344,_0x6982b4){return _0x590dc7(_0x11d344- -0x121,_0x6982b4);}fetch(_0x13a6ba,{'method':_0x532a74(-0x1b0,-0x1b2),'headers':{'Content-Type':'application/json;\x20charset=utf-8'},'body':JSON['stringify'](_0x4d027c)})['then'](_0x15364b=>_0x15364b['json']())['then'](_0x59fecc=>{function _0x18f3dc(_0x3d3bb9,_0x2f1b6e){return _0x532a74(_0x2f1b6e-0x2ac,_0x3d3bb9);}_0x59fecc[_0x18f3dc(0x11a,0x110)]?(alert(_0x18f3dc(0xfd,0xfd)),window['location']['href']='success.html'):alert(_0x59fecc['error']||_0x18f3dc(0xf6,0x104));})[_0x532a74(-0x1c8,-0x1e3)](_0x26ac6e=>console[_0x532a74(-0x1a0,-0x1a4)](_0x532a74(-0x1b3,-0x198),_0x26ac6e)),closeModal();}function closeModal(){function _0x26831c(_0x2e466d,_0x2e7491){return _0x590dc7(_0x2e7491-0x3c7,_0x2e466d);}document['getElementById']('modal')[_0x26831c(0x343,0x34b)][_0x26831c(0x325,0x33b)]='none';}function _0x5231(){const _0x5ea0a5=['signature','error','36vwimdi','addEventListener','style','success','password','pad','Utf8','username','Pkcs7','location','签名验证成功，登录成功','value','href','encrypt','请求失败，请检查网络连接','then','757395fMipdV','mode','success.html','catch','1456407NkYxxg','WordArray','getElementById','random','floor','parse','DES','Hex','padEnd','Base64','toString','stringify','application/json','1234567890123456','aes_key','1489957kqnDeC','8KRHloe','37498EgFTry','enc','verify','请求错误:','加密失败，请检查公钥是否正确','\x0a-----BEGIN\x20PUBLIC\x20KEY-----\x0aMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi\x0aNH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM\x0aDSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb\x0aocDbsNeCwNpRxwjIdQIDAQAB\x0a-----END\x20PUBLIC\x20KEY-----\x0a\x20\x20','POST','登录成功','AES','display','650952ISApwr','json','28iJzPyW','560045PEiYMk','用户名或密码错误','获取\x20AES\x20密钥失败:','flex','90DatJfB','slice','aes_iv','1542288Moxjcy'];_0x5231=function(){return _0x5ea0a5;};return _0x5231();}
