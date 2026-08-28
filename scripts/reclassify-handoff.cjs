const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const handoffDir = path.join(rootDir, 'TEMPLATE-REFERENCE-HANDOFF');

const oldDir = path.join(handoffDir, '01-SHARED-FOUNDATIONS');
const newDir = path.join(handoffDir, '01-TEMPLATE-DIRECTIONS');

if (fs.existsSync(oldDir)) {
  if (fs.existsSync(newDir)) {
    // Copy files over and remove old
    const files = fs.readdirSync(oldDir);
    files.forEach((f) => {
      fs.copyFileSync(path.join(oldDir, f), path.join(newDir, f));
      fs.unlinkSync(path.join(oldDir, f));
    });
    fs.rmdirSync(oldDir);
  } else {
    fs.renameSync(oldDir, newDir);
  }
  console.log('Renamed 01-SHARED-FOUNDATIONS -> 01-TEMPLATE-DIRECTIONS successfully.');
} else {
  console.log('01-SHARED-FOUNDATIONS does not exist or already renamed.');
}
