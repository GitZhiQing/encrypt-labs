document.getElementById("loginForm")
	.addEventListener("submit", function(event) {
		event.preventDefault();
		document.getElementById("modal")
			.style.display = "flex";
	});

function sendDataAes(url) {
	const formData = {
		username: document.getElementById("username")
			.value,
		password: document.getElementById("password")
			.value
	};
	const jsonData = JSON.stringify(formData);

	const key = CryptoJS.enc.Utf8.parse("1234567890123456");
	const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

	const encrypted = CryptoJS.AES.encrypt(jsonData, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		.toString();
    const params = `encryptedData=${encodeURIComponent(encrypted)}`;

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
			},
			body: params
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert("用户名或密码错误");
			}
		})
		.catch(error => {
			console.error("请求错误:", error);
		});

	closeModal();
}

function sendEncryptedDataRSA(url) {
	const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi
NH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM
DSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb
ocDbsNeCwNpRxwjIdQIDAQAB
-----END PUBLIC KEY-----
  `;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const dataPacket = {
		username: username,
		password: password
	};

	const dataString = JSON.stringify(dataPacket);

	const encryptor = new JSEncrypt();
	encryptor.setPublicKey(publicKey);

	const encryptedData = encryptor.encrypt(dataString);

	if (!encryptedData) {
		alert("加密失败，请检查公钥是否正确");
		return;
	}

	const formData = new URLSearchParams();
	formData.append('data', encryptedData);

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: formData.toString()
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			alert("登录成功");
			window.location.href = "success.html";
		} else {
			alert(data.error || "用户名或密码错误");
		}
	})
	.catch(error => console.error("请求错误:", error));

	closeModal();
}

function sendDataAesRsa(url) {
	const formData = {
		username: document.getElementById("username")
			.value,
		password: document.getElementById("password")
			.value
	};
	const jsonData = JSON.stringify(formData);

	const key = CryptoJS.lib.WordArray.random(16);
	const iv = CryptoJS.lib.WordArray.random(16);

	const encryptedData = CryptoJS.AES.encrypt(jsonData, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		.toString();

	const rsa = new JSEncrypt();
	rsa.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi
NH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM
DSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb
ocDbsNeCwNpRxwjIdQIDAQAB
-----END PUBLIC KEY-----`);

	const encryptedKey = rsa.encrypt(key.toString(CryptoJS.enc.Base64));
	const encryptedIv = rsa.encrypt(iv.toString(CryptoJS.enc.Base64));

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				encryptedData: encryptedData,
				encryptedKey: encryptedKey,
				encryptedIv: encryptedIv
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert("用户名或密码错误");
			}
		})
		.catch(error => console.error("请求错误:", error));

	closeModal();
}

async function fetchAndSendDataAes(url) {
	let aesKey, aesIv;

	try {
		const response = await fetch("encrypt/server_generate_key.php");
		const data = await response.json();
		aesKey = CryptoJS.enc.Base64.parse(data.aes_key);
		aesIv = CryptoJS.enc.Base64.parse(data.aes_iv);
	} catch (error) {
		console.error("获取 AES 密钥失败:", error);
		alert("无法获取 AES 密钥，请刷新页面重试");
		return;
	}

	const formData = {
		username: document.getElementById("username")
			.value,
		password: document.getElementById("password")
			.value
	};
	const jsonData = JSON.stringify(formData);

	const encryptedData = CryptoJS.AES.encrypt(jsonData, aesKey, {
			iv: aesIv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		.toString();

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				encryptedData: encryptedData
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert("用户名或密码错误");
			}
		})
		.catch(error => console.error("请求错误:", error));

	closeModal();
}

function encryptAndSendDataDES(url) {
	const username = document.getElementById("username")
		.value;
	const password = document.getElementById("password")
		.value;

	const key = CryptoJS.enc.Utf8.parse(username.slice(0, 8)
		.padEnd(8, '6'));

	const iv = CryptoJS.enc.Utf8.parse('9999' + username.slice(0, 4)
		.padEnd(4, '9'));

	const encryptedPassword = CryptoJS.DES.encrypt(password, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});

	const encryptedHex = encryptedPassword.ciphertext.toString(CryptoJS.enc.Hex);

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: username,
				password: encryptedHex
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert("用户名或密码错误");
			}
		})
		.catch(error => console.error("请求错误:", error));

	closeModal();
}

function sendDataWithNonce(url) {
	const username = document.getElementById("username")
		.value;
	const password = document.getElementById("password")
		.value;

	const nonce = Math.random()
		.toString(36)
		.substring(2);
	const timestamp = Math.floor(Date.now() / 1000);

	const secretKey = "be56e057f20f883e";

	const dataToSign = username + password + nonce + timestamp;
	const signature = CryptoJS.HmacSHA256(dataToSign, secretKey)
		.toString(CryptoJS.enc.Hex);

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: username,
				password: password,
				nonce: nonce,
				timestamp: timestamp,
				signature: signature
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert(data.error || "用户名或密码错误");
			}
		})
		.catch(error => console.error("请求错误:", error));

	closeModal();
}

function sendDataWithSignatureRsa(url) {
	const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRvA7giwinEkaTYllDYCkzujvi
NH+up0XAKXQot8RixKGpB7nr8AdidEvuo+wVCxZwDK3hlcRGrrqt0Gxqwc11btlM
DSj92Mr3xSaJcshZU8kfj325L8DRh9jpruphHBfh955ihvbednGAvOHOrz3Qy3Cb
ocDbsNeCwNpRxwjIdQIDAQAB
-----END PUBLIC KEY-----
  `;
	const username = document.getElementById("username")
		.value;
	const password = document.getElementById("password")
		.value;

	const nonce = Math.random()
		.toString(36)
		.substring(2);
	const timestamp = Math.floor(Date.now() / 1000);

	async function sendRequest() {
		const dataToSend = {
			username: username,
			password: password,
			nonce: nonce,
			timestamp: timestamp
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(dataToSend)
			});

			const responseData = await response.json();

			if (responseData.success && responseData.signature) {
				const dataToVerify = username + password + nonce + timestamp;

				const signatureValid = verifySignature(dataToVerify, responseData.signature, publicKey);

				if (signatureValid) {
					alert("签名验证成功，登录成功");
					window.location.href = "success.html";
				} else {
					alert("签名验证失败，数据可能被篡改");
				}
			} else {
				alert(responseData.error || "用户名或密码错误");
			}
		} catch (error) {
			console.error("请求错误:", error);
			alert("请求失败，请检查网络连接");
		}
	}

	sendRequest();

	function verifySignature(data, signature, publicKey) {
		const verifier = new JSEncrypt();
		verifier.setPublicKey(publicKey);
		return verifier.verify(data, signature, CryptoJS.SHA256);
	}

	closeModal();
}

function generateRequestData() {
	const username = document.getElementById("username")
		.value;
	const password = document.getElementById("password")
		.value;
	const timestamp = Date.now();

	const dataToSend = {
		username: username,
		password: password,
		timestamp: timestamp
	};

	return dataToSend;
}

function sendLoginRequest(url) {
	const dataToSend = generateRequestData();

	fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(dataToSend)
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert("登录成功");
				window.location.href = "success.html";
			} else {
				alert(data.error || "用户名或密码错误");
			}
		})
		.catch(error => console.error("请求错误:", error));

	closeModal();
}

function closeModal() {
	document.getElementById("modal")
		.style.display = "none";
}
