export default (req, res) => {
	const body = JSON.parse(req.body);
	console.log(body);
	res.status(200).json({ status: 'OK' });
};


TOKEN.setApiKey(process.env.TOKEN);
CHAT_ID.setApiKey(process.env.CHAT_ID);
URI_API.setApiKey(process.env.URI_API);

const message = `
  Name: ${body.name}\r\n
  Phone: ${body.phone}\r\n
  Message: ${body.message}
`;

const data = [message];