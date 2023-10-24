import crypto from 'crypto';

export function encrypt(text: string) {
	const algorithm = process.env.VITE_ALGORITHM || 'default';
	const pass = process.env.VITE_KEY || 'default';
  const length = parseInt(process.env.VITE_LENGTH || '0', 10);
	const key = crypto.scryptSync(pass, process.env.VITE_SALT || 'default', length);
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(algorithm, key, iv);

	let encrypted = cipher.update(text);

	encrypted = Buffer.concat([encrypted, cipher.final()]);

	return { iv: iv.toString('hex'), data: encrypted.toString('hex') };
}

export function decrypt(iv: string, encrypted: string) {
  const pass = process.env.VITE_KEY || 'default';
  const algorithm = process.env.VITE_ALGORITHM || 'default';
  const length = parseInt(process.env.VITE_LENGTH || '0', 10);
  const key = crypto.scryptSync(pass, process.env.VITE_SALT || 'default', length);		
  const ivBuffer = Buffer.from(iv, 'hex');
  const encryptedText = Buffer.from(encrypted, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}