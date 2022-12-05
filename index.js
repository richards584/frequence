const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'56c7b99b-4ca3-406c-b39b-b2127a87f673'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
