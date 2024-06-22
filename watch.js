// watch.js
const { exec } = require("child_process");

exec("npx tailwindcss -i ./theme/global.css -o ./theme/output.css --watch", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
