const Path = require('path');
const Process = require('child_process');

const darkSchemasDir = Path.resolve(__dirname, '../../Src/VS/CodeTheme/Schemas/Dark');
const darkPackagesDir = Path.resolve(__dirname, '../../Src/VS/CodeTheme/Packages/Dark');

// Covert Theme Schemas to VS Packages use ThemeConverter tool
Process.execSync(`ThemeConverter -i "${darkSchemasDir}" -o "${darkPackagesDir}"`, {
  cwd: Path.resolve(__dirname, '../../Tools/ThemeConverter/ThemeConverter/bin/Debug/net6.0'),
  stdio: 'inherit',
});
