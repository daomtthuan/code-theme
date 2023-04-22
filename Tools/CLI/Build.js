const Path = require('path');
const Process = require('child_process');

// Build VS ThemeConverter tool

Process.execSync('dotnet build', {
  cwd: Path.resolve(__dirname, '../../Tools/ThemeConverter'),
  stdio: 'inherit',
});

const darkSchemasDir = Path.resolve(__dirname, '../../Src/VS/CodeTheme/Schemas/Dark');
const darkPackagesDir = Path.resolve(__dirname, '../../Src/VS/CodeTheme/Packages/Dark');

// Build Theme Schemas to VS Packages

// Dark theme
Process.execSync(`ThemeConverter -i "${darkSchemasDir}" -o "${darkPackagesDir}"`, {
  cwd: Path.resolve(__dirname, '../../Tools/ThemeConverter/ThemeConverter/bin/Debug/net6.0'),
  stdio: 'inherit',
});
