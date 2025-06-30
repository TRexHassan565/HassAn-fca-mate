
const fs = require('fs');
const path = require('path');

// Try these locations for the config file
const configPaths = [
  path.join(__dirname, 'hassan-fca.json'),
  path.join(process.cwd(), 'hassan-fca.json'),
  require.resolve('josh-fca/josh-fca.json')
];

// Find the first existing config file
const configPath = configPaths.find(fs.existsSync);

if (configPath) {
  // Set environment variable if hassan-fca.json exists
  if (configPath.includes('hassan-fca.json')) {
    process.env.JOSH_FCA_CONFIG = configPath;
    console.log('ℹ️ Using hassan-fca.json configuration');
  } else {
    console.log('ℹ️ Using default josh-fca.json configuration');
  }
} else {
  console.warn('⚠️ No configuration file found');
}

// Export the josh-fca function directly
module.exports = require('josh-fca');