const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'1632e259-f11e-4a80-8a56-fc71bba31664'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
