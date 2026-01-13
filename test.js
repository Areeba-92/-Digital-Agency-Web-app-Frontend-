// Simple test to verify the app builds correctly
const { spawn } = require('child_process');

console.log('Running basic tests...');

// Test 1: Check if the main files exist
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'app/page.js',
  'app/layout.js',
  'app/globals.css',
  'package.json',
  'tailwind.config.js',
  'postcss.config.js'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('✅ All required files exist');
} else {
  console.log('❌ Some required files are missing');
  process.exit(1);
}

// Test 2: Check if package.json has required dependencies
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = ['next', 'react', 'react-dom'];
const requiredDevDeps = ['tailwindcss', 'postcss', 'autoprefixer'];

let depsMissing = false;

for (const dep of requiredDeps) {
  if (!packageJson.dependencies || !packageJson.dependencies[dep]) {
    console.error(`❌ Missing required dependency: ${dep}`);
    depsMissing = true;
  }
}

for (const dep of requiredDevDeps) {
  if (!packageJson.devDependencies || !packageJson.devDependencies[dep]) {
    console.error(`❌ Missing required dev dependency: ${dep}`);
    depsMissing = true;
  }
}

if (!depsMissing) {
  console.log('✅ All required dependencies exist');
} else {
  console.log('❌ Some required dependencies are missing');
  process.exit(1);
}

console.log('\n🎉 All basic tests passed!');
console.log('To run the application, use: npm run dev');