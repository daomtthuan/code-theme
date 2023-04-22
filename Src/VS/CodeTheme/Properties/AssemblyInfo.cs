using System.Reflection;
using System.Resources;
using System.Runtime.InteropServices;

[assembly: AssemblyTitle("Code Theme")]
[assembly: AssemblyDescription("Amazing Theme for Visual Studio and Visual Studio Code")]

[assembly: AssemblyCompany("Daomtthuan")]
[assembly: AssemblyProduct("Code Theme")]
[assembly: AssemblyCopyright("MIT License, Copyright (c) 2023 - present Daomtthuan")]
[assembly: AssemblyTrademark("Code Theme")]
[assembly: AssemblyCulture("en")]

#if DEBUG
 [assembly: AssemblyConfiguration("Debug")]
#else
[assembly: AssemblyConfiguration("Release")]
#endif

[assembly: ComVisible(false)]

[assembly: AssemblyVersion("1.0.0.*")]
[assembly: AssemblyFileVersion("1.0.0.0")]

[assembly: NeutralResourcesLanguage("en")]
