const logs = `[2acc:0001][2019-05-10T16:27:41] UserActivityMonitor started.
[2acc:0001][2019-05-10T16:27:41] Telemetry property VS.SetupEngine.ActivityId : 761c4e41-4745-43dc-8eb5-e32ed4591e9c
[2acc:0001][2019-05-10T16:27:41] Telemetry property VS.SetupEngine.IsChildProcess : False
[2acc:0001][2019-05-10T16:27:41] Telemetry property VS.SetupEngine.IsNoCancel : True
[2acc:0001][2019-05-10T16:27:41] BEGIN: Background Download
[2acc:0001][2019-05-10T16:27:43] Running pre-check verification.
[2acc:0001][2019-05-10T16:27:45] BEGIN: Check for updates
[2acc:0009][2019-05-10T16:27:45] Telemetry property VS.SetupEngine.ChannelUpdateDisabled : False
[2acc:0007][2019-05-10T16:27:45] Download requested: https://aka.ms/vs/16/release/channel
[2acc:0016][2019-05-10T16:27:45] Attempting download 'https://aka.ms/vs/16/release/channel' using engine 'WebClient'
[2acc:0016][2019-05-10T16:27:46] Uri 'https://aka.ms/vs/16/release/channel' redirected to 'https://download.visualstudio.microsoft.com/download/pr/bbd9341f-3eea-459e-aa9f-a1d4903746be/5d4cdf4914cc00224dca8140be80a352/visualstudio.16.release.chman'
[2acc:0016][2019-05-10T16:27:46] Download of 'https://aka.ms/vs/16/release/channel' succeeded using engine 'WebClient'
[2acc:0009][2019-05-10T16:27:46] Channel manifest for https://aka.ms/vs/16/release/channel is already up to date.
[2acc:0009][2019-05-10T16:27:46] Checking if catalog is in sync with channel manifest for https://aka.ms/vs/16/release/channel.
[2acc:0001][2019-05-10T16:27:47] The cache manifest and downloaded manifest had the same version for instance: a4eec2e7. Did not compute update information.
[2acc:0001][2019-05-10T16:27:47] No restart manager available. Assuming no reboot required for instance state.
[2acc:0001][2019-05-10T16:27:47] END: Check for updates
[2acc:0001][2019-05-10T16:27:47] BEGIN: Perform background downloads
[2acc:0001][2019-05-10T16:27:47] Downloading updates for 'VisualStudio/16.0.2+28803.202 (Microsoft.VisualStudio.Product.Enterprise,version=16.0.28803.202,type=Product)'
[2acc:0001][2019-05-10T16:27:47] Setup Engine v2.0.3297, Microsoft Windows NT 6.2.9200.0
[2acc:0001][2019-05-10T16:27:47] Command line: "C:\\program files (x86)\\microsoft visual studio\\installer\\resources\\app\\ServiceHub\\Services\\Microsoft.VisualStudio.Setup.Service\\BackgroundDownload.exe"
[2acc:0001][2019-05-10T16:27:47] Loading packages for instance 'a4eec2e7'
[2acc:0001][2019-05-10T16:27:50] Loaded existing instance for product 'Microsoft.VisualStudio.Product.Enterprise,version=16.0.28803.202'
[2acc:0001][2019-05-10T16:27:50] Telemetry property VS.SetupEngine.Id : VisualStudio/16.0.2+28803.202
[2acc:0001][2019-05-10T16:27:50] Telemetry property VS.SetupEngine.Branch : d16.0
[2acc:0001][2019-05-10T16:27:50] Telemetry property VS.SetupEngine.BuildNumber : 16.0.28803.202
[2acc:0001][2019-05-10T16:27:50] Telemetry property VS.SetupEngine.InstanceId : a4eec2e7
[2acc:0001][2019-05-10T16:27:50] Telemetry property VS.SetupEngine.EngineVersion : 2.0.3297.47373
[2acc:0001][2019-05-10T16:27:51] ManifestVerifier Result: Success
[2acc:0001][2019-05-10T16:27:51] Catalog load operation correlation: {"id":"eb197af1-87d5-4a14-9612-835175552341"}
[2acc:0001][2019-05-10T16:27:51] Resetting dependency graph
[2acc:0001][2019-05-10T16:27:51] Loading catalog 'VisualStudio/16.0.3+28803.352' into engine session 'a4eec2e7'.
[2acc:0001][2019-05-10T16:27:51] Telemetry property VS.SetupEngine.Id : VisualStudio/16.0.3+28803.352
[2acc:0001][2019-05-10T16:27:51] Telemetry property VS.SetupEngine.Branch : d16.0
[2acc:0001][2019-05-10T16:27:51] Telemetry property VS.SetupEngine.BuildNumber : 16.0.28803.352
[2acc:0001][2019-05-10T16:27:51] Telemetry property VS.SetupEngine.EngineVersion : 2.0.3297.47373
[2acc:0001][2019-05-10T16:27:51] Telemetry property VS.SetupEngine.InstanceId : a4eec2e7
[2acc:0001][2019-05-10T16:27:51] Install operation correlation: {"id":"ad10a339-3cc4-4269-969c-7ac22c4c5cbd"}
[2acc:0001][2019-05-10T16:27:51] System Measurement for 'InstallOperation': 'Physical Memory': 17015447552
[2acc:0001][2019-05-10T16:27:51] System Measurement for 'InstallOperation': 'System Drive Space (Before)': 408479899648
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Windows.UniversalCRT.Msu.81 is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.3,6.4)'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.VisualStudio.NuGet.PowershellBindingRedirect is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Windows.UniversalCRT.Msu.7 is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.DiagnosticsHub.KB2882822.Win7 is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Windows.D3DCompiler.Msu.Win7 is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.4.6.2.SDK is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.4.6.2.SDK.Resources is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.Component.4.6.2.SDK is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.4.6.2.TargetingPack.Resources is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.4.6.2.TargetingPack.Resources is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.4.6.2.TargetingPack is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.Component.4.6.2.TargetingPack is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Net.ComponentGroup.4.6.2.DeveloperTools is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.Azure.PowerShell is not applicable: Les conditions nécessaires ne sont pas satisfaites : Not Powershell5
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.VisualStudio.Graphics.EnableTools is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.10240'.
[2acc:0001][2019-05-10T16:27:52] Package Component.UnityEngine.x86 is not applicable: Un système d'exploitation 32 bits est obligatoire, mais vous exécutez un système d'exploitation 64 bits.
[2acc:0001][2019-05-10T16:27:52] Package Component.Unreal is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Component.Unreal.Android is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:52] Package Microsoft.VisualStudio.OfficeDeveloperTools.WindowsIdentityFoundation.Msu is not applicable: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '(,6.2)'.
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.CurrentOperation : Modify
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.ComponentId : Microsoft.VisualStudio.Product.Enterprise
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.ProductVersion : 16.0.28803.352
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.Workloads : Microsoft.VisualStudio.Workload.CoreEditor,Microsoft.VisualStudio.Workload.NetWeb,Microsoft.VisualStudio.Workload.Azure,Microsoft.VisualStudio.Workload.ManagedDesktop,Microsoft.VisualStudio.Workload.NativeDesktop,Microsoft.VisualStudio.Workload.Universal,Microsoft.VisualStudio.Workload.Data,Microsoft.VisualStudio.Workload.NetCoreTools
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.ChannelsUri : https://aka.ms/vs/16/release/channel
[2acc:0001][2019-05-10T16:27:52] Telemetry property VS.SetupEngine.ChannelsId : VisualStudio.16.Release
[2acc:0001][2019-05-10T16:27:53] Property: AlphaPacksCount, value: 0
[2acc:0001][2019-05-10T16:27:53] Property: campaignId, value: 523884935.1555083491
[2acc:0001][2019-05-10T16:27:53] Property: CEIPConsent, value: /CEIPconsent
[2acc:0001][2019-05-10T16:27:53] Property: CEIPConsentOnOff, value: on
[2acc:0001][2019-05-10T16:27:53] Property: channelId, value: VisualStudio.16.Release
[2acc:0001][2019-05-10T16:27:53] Property: channelManifestId, value: VisualStudio.16.Release/16.0.3+28803.352
[2acc:0001][2019-05-10T16:27:53] Property: ChannelsPath, value: https://aka.ms/vs/16/release/channel
[2acc:0001][2019-05-10T16:27:53] Property: ChannelSuffix, value: 
[2acc:0001][2019-05-10T16:27:53] Property: ChannelTitle, value: Release
[2acc:0001][2019-05-10T16:27:53] Property: channelUri, value: https://aka.ms/vs/16/release/channel
[2acc:0001][2019-05-10T16:27:53] Property: CompatInstallDir, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\Compatibility
[2acc:0001][2019-05-10T16:27:53] Property: ComponentId, value: Microsoft.VisualStudio.Product.Enterprise
[2acc:0001][2019-05-10T16:27:53] Property: CurrentOperation, value: Modify
[2acc:0001][2019-05-10T16:27:53] Property: EnginePath, value: C:\\program files (x86)\\microsoft visual studio\\installer\\resources\\app\\ServiceHub\\Services\\Microsoft.VisualStudio.Setup.Service
[2acc:0001][2019-05-10T16:27:53] Property: InstallationName, value: VisualStudio/16.0.3+28803.352
[2acc:0001][2019-05-10T16:27:53] Property: InstallationPackages, value: Microsoft.VisualStudio.Component.CoreEditor,Microsoft.VisualStudio.Component.NuGet,Microsoft.Net.Component.4.6.1.TargetingPack,Microsoft.VisualStudio.Component.Roslyn.Compiler,Microsoft.VisualStudio.Component.Roslyn.LanguageServices,Microsoft.VisualStudio.Component.FSharp,Microsoft.Net.Core.Component.SDK.2.1,Microsoft.NetCore.ComponentGroup.DevelopmentTools.2.1,Microsoft.VisualStudio.Component.FSharp.WebTemplates,Microsoft.VisualStudio.ComponentGroup.WebToolsExtensions,Microsoft.VisualStudio.Component.DockerTools,Microsoft.NetCore.ComponentGroup.Web.2.1,Microsoft.Net.Component.4.7.2.SDK,Microsoft.Net.Component.4.7.2.TargetingPack,Microsoft.Net.ComponentGroup.DevelopmentPrerequisites,Microsoft.VisualStudio.Component.TypeScript.3.3,Microsoft.VisualStudio.Component.JavaScript.TypeScript,Microsoft.VisualStudio.Component.JavaScript.Diagnostics,Microsoft.Component.MSBuild,Microsoft.VisualStudio.Component.TextTemplating,Component.Microsoft.VisualStudio.RazorExtension,Microsoft.VisualStudio.Component.IISExpress,Microsoft.VisualStudio.Component.SQL.ADAL,Microsoft.VisualStudio.Component.SQL.LocalDB.Runtime,Microsoft.VisualStudio.Component.Common.Azure.Tools,Microsoft.VisualStudio.Component.SQL.CLR,Microsoft.VisualStudio.Component.MSODBC.SQL,Microsoft.VisualStudio.Component.MSSQL.CMDLnUtils,Microsoft.VisualStudio.Component.ManagedDesktop.Core,Microsoft.Net.Component.4.5.2.TargetingPack,Microsoft.Net.Component.4.5.TargetingPack,Microsoft.VisualStudio.Component.SQL.SSDT,Microsoft.VisualStudio.Component.SQL.DataSources,Component.Microsoft.Web.LibraryManager,Microsoft.VisualStudio.ComponentGroup.Web,Microsoft.VisualStudio.Component.Web,Microsoft.Net.Component.4.TargetingPack,Microsoft.Net.Component.4.5.1.TargetingPack,Microsoft.Net.Component.4.6.TargetingPack,Microsoft.Net.ComponentGroup.TargetingPacks.Common,Component.Microsoft.VisualStudio.Web.AzureFunctions,Microsoft.VisualStudio.ComponentGroup.AzureFunctions,Microsoft.VisualStudio.Component.Azure.Compute.Emulator,Microsoft.VisualStudio.Component.Azure.Storage.Emulator,Microsoft.VisualStudio.Component.Azure.ClientLibs,Microsoft.VisualStudio.Component.Azure.AuthoringTools,Microsoft.VisualStudio.Component.CloudExplorer,Microsoft.VisualStudio.Component.Debugger.TimeTravel,Microsoft.VisualStudio.Component.Debugger.Snapshot,Microsoft.VisualStudio.ComponentGroup.Web.CloudTools,Microsoft.VisualStudio.Component.IntelliTrace.FrontEnd,Microsoft.VisualStudio.Component.DiagnosticTools,Microsoft.VisualStudio.Component.EntityFramework,Microsoft.VisualStudio.Component.LiveUnitTesting,Microsoft.VisualStudio.Component.AspNet45,Microsoft.VisualStudio.Component.AppInsights.Tools,Microsoft.VisualStudio.Component.WebDeploy,Component.Microsoft.VisualStudio.LiveShare,Microsoft.Net.Component.4.6.1.SDK,Microsoft.Net.Component.4.6.2.TargetingPack,Microsoft.Net.Component.4.7.SDK,Microsoft.VisualStudio.Component.GraphDocument,Microsoft.VisualStudio.Component.CodeMap,Microsoft.VisualStudio.ComponentGroup.Azure.Prerequisites,Microsoft.VisualStudio.Component.Azure.Waverton.BuildTools,Microsoft.VisualStudio.Component.Azure.Waverton,Microsoft.Component.Azure.DataLake.Tools,Microsoft.VisualStudio.Component.Azure.Kubernetes.Tools,Microsoft.VisualStudio.Component.Azure.ResourceManager.Tools,Microsoft.VisualStudio.ComponentGroup.Azure.ResourceManager.Tools,Microsoft.VisualStudio.ComponentGroup.Azure.CloudServices,Microsoft.VisualStudio.Component.Azure.ServiceFabric.Tools,Microsoft.VisualStudio.Component.VC.CoreIde,Microsoft.VisualStudio.Component.VC.Tools.x86.x64,Microsoft.VisualStudio.Component.Graphics.Tools,Microsoft.VisualStudio.Component.VC.DiagnosticTools,Microsoft.VisualStudio.Component.Windows10SDK.17763,Microsoft.VisualStudio.Component.ManagedDesktop.Prerequisites,Microsoft.ComponentGroup.Blend,Microsoft.VisualStudio.Component.Debugger.JustInTime,Microsoft.VisualStudio.Component.VC.Redist.14.Latest,Microsoft.VisualStudio.Component.ClassDesigner,Microsoft.VisualStudio.ComponentGroup.ArchitectureTools.Native,Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Core,Microsoft.VisualStudio.Component.VC.CMake.Project,Microsoft.VisualStudio.Component.VC.ATL,Microsoft.VisualStudio.Component.VC.TestAdapterForBoostTest,Microsoft.VisualStudio.Component.VC.TestAdapterForGoogleTest,Microsoft.Component.NetFX.Native,Microsoft.VisualStudio.ComponentGroup.UWP.NetCoreAndStandard,Microsoft.VisualStudio.Component.Graphics,Microsoft.VisualStudio.ComponentGroup.UWP.Xamarin,Microsoft.VisualStudio.ComponentGroup.UWP.Support
[2acc:0001][2019-05-10T16:27:53] Property: InstallationVersion, value: 16.0.28803.352
[2acc:0001][2019-05-10T16:27:53] Property: InstallationWorkloads, value: Microsoft.VisualStudio.Workload.CoreEditor,Microsoft.VisualStudio.Workload.NetWeb,Microsoft.VisualStudio.Workload.Azure,Microsoft.VisualStudio.Workload.ManagedDesktop,Microsoft.VisualStudio.Workload.NativeDesktop,Microsoft.VisualStudio.Workload.Universal,Microsoft.VisualStudio.Workload.Data,Microsoft.VisualStudio.Workload.NetCoreTools
[2acc:0001][2019-05-10T16:27:53] Property: installChannelUri, value: 
[2acc:0001][2019-05-10T16:27:53] Property: InstallDir, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise
[2acc:0001][2019-05-10T16:27:53] Property: InstanceId, value: a4eec2e7
[2acc:0001][2019-05-10T16:27:53] Property: LogPath, value: C:\\Users\\s641376\\AppData\\Local\\Temp
[2acc:0001][2019-05-10T16:27:53] Property: nickname, value: 
[2acc:0001][2019-05-10T16:27:53] Property: OperationMode, value: 2
[2acc:0001][2019-05-10T16:27:53] Property: ProductDisplayVersion, value: 16.0.3
[2acc:0001][2019-05-10T16:27:53] Property: ProductSemanticVersion, value: 16.0.3+28803.352
[2acc:0001][2019-05-10T16:27:53] Property: ProgramFilesOrSharedDrive, value: C:\\Program Files (x86)
[2acc:0001][2019-05-10T16:27:53] Property: setupEngineFilePath, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\vs_installershell.exe
[2acc:0001][2019-05-10T16:27:53] Property: SharedInstallDir, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared
[2acc:0001][2019-05-10T16:27:53] Property: SharedInstallDrive, value: C:\\
[2acc:0001][2019-05-10T16:27:53] Property: VS.SetupEngine.CatalogBuildVersion, value: 16.0.28803.352
[2acc:0001][2019-05-10T16:27:53] Property: VS.SetupEngine.CatalogManifestVersion, value: 1.1
[2acc:0001][2019-05-10T16:27:53] Property: VS.SetupEngine.EngineAssemblyName, value: Microsoft.VisualStudio.Setup
[2acc:0001][2019-05-10T16:27:53] Property: VS.SetupEngine.EngineVersion, value: 2.0.3297.47373
[2acc:0001][2019-05-10T16:27:53] Property: VS.SetupEngine.ProductUniqueId, value: Microsoft.VisualStudio.Product.Enterprise
[2acc:0001][2019-05-10T16:27:53] Property: TelemetrySessionID, value: b9e7fb80-14c6-4553-a84f-4399f8a600ab
[2acc:0001][2019-05-10T16:27:53] Packages with declared 'chip' value different than the current system architecture 'x64' will be excluded unless explicitly referenced in another package's dependencies.
[2acc:0001][2019-05-10T16:27:54] Warning: Skipping non-applicable package Microsoft.Windows.UniversalCRT.Msu.81: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.3,6.4)'.
[2acc:0001][2019-05-10T16:27:55] Warning: Skipping non-applicable package Microsoft.VisualStudio.NuGet.PowershellBindingRedirect: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:56] Warning: Skipping non-applicable package Microsoft.Windows.UniversalCRT.Msu.7: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{725CC962-98BD-42C7-87D8-51C680FB1779}' found for package 'sqlsysclrtypes,version=16.0.61903.25110,chip=x86,language=en-US'
[2acc:0001][2019-05-10T16:27:56] Compatible package is not installed. Code '{725CC962-98BD-42C7-87D8-51C680FB1779}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{8D7CE3B0-5379-46FE-9F4B-A65D9F4CC1F1}' found for package 'sqlsysclrtypes,version=16.0.61903.25110,chip=x64,language=en-US'
[2acc:0001][2019-05-10T16:27:56] Compatible package is not installed. Code '{8D7CE3B0-5379-46FE-9F4B-A65D9F4CC1F1}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:56] Warning: Skipping non-applicable package Microsoft.DiagnosticsHub.KB2882822.Win7: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{5D9D2BC3-EEA9-3901-A8B8-00B5B4235EDD}' found for package 'Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12313.64372'
[2acc:0001][2019-05-10T16:27:56] Compatible package version is less than or equal to the package version. Code '{5D9D2BC3-EEA9-3901-A8B8-00B5B4235EDD}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{5EF42ABB-4794-44B4-8B5A-E856DF34AC90}' found for package 'sql_adalsql,version=16.0.61903.25110,chip=x64,language=fr-FR'
[2acc:0001][2019-05-10T16:27:56] Compatible package is not installed. Code '{5EF42ABB-4794-44B4-8B5A-E856DF34AC90}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{A0E302B3-4967-4DE8-AC73-A600CB43DF18}' found for package 'sqllocaldb,version=16.0.61903.25110,chip=x64,language=fr-FR'
[2acc:0001][2019-05-10T16:27:56] Compatible package is not installed. Code '{A0E302B3-4967-4DE8-AC73-A600CB43DF18}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:56] Compatible ProductCode '{8D98AC2C-FC5C-440D-A2D3-6C9655F957D8}' found for package 'msodbcsql,version=16.0.61903.25110,chip=x64,language=fr-FR'
[2acc:0001][2019-05-10T16:27:56] Compatible package version is less than or equal to the package version. Code '{8D98AC2C-FC5C-440D-A2D3-6C9655F957D8}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Windows.D3DCompiler.Msu.Win7: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '[6.1,6.2)'.
[2acc:0001][2019-05-10T16:27:59] Compatible ProductCode '{CA83B2A1-A2C7-4102-9B9E-0D066730C433}' found for package 'Microsoft.Ancm.IIS.Msi,version=12.2.18292,chip=x64'
[2acc:0001][2019-05-10T16:27:59] Package 'Microsoft.Ancm.IIS.Msi' is found present on deeper detection but manifest is not present so it will not be uninstalled.
[2acc:0001][2019-05-10T16:27:59] Compatible ProductCode '{D4311C11-B252-4C0C-B007-0BAA47F5D285}' found for package 'Microsoft.Ancmv2.IIS.Msi,version=12.2.18292,chip=x64'
[2acc:0001][2019-05-10T16:27:59] Package 'Microsoft.Ancmv2.IIS.Msi' is found present on deeper detection but manifest is not present so it will not be uninstalled.
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Net.4.6.2.SDK: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Net.4.6.2.SDK.Resources: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Net.4.6.2.TargetingPack.Resources: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:59] Dependency action plan: Could not determine whether to add/remove ref-count. Package: Microsoft.Net.4.6.2.TargetingPack.Resources,version=4.6.1590.3,language=en-US, PackageExecuteAction: None, CurrentState: Absent, RequestedState: Present
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Net.4.6.2.TargetingPack.Resources: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:59] Dependency action plan: Could not determine whether to add/remove ref-count. Package: Microsoft.Net.4.6.2.TargetingPack.Resources,version=4.6.1590.3,language=fr-FR, PackageExecuteAction: None, CurrentState: Absent, RequestedState: Present
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Net.4.6.2.TargetingPack: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.14393'.
[2acc:0001][2019-05-10T16:27:59] Dependency action plan: Could not determine whether to add/remove ref-count. Package: Microsoft.Net.4.6.2.TargetingPack,version=4.6.1590.3, PackageExecuteAction: None, CurrentState: Absent, RequestedState: Present
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.Azure.PowerShell: Les conditions nécessaires ne sont pas satisfaites : Not Powershell5
[2acc:0001][2019-05-10T16:27:59] Dependency action plan: Could not determine whether to add/remove ref-count. Package: Microsoft.Azure.PowerShell,version=16.0.28315.86, PackageExecuteAction: None, CurrentState: Absent, RequestedState: Present
[2acc:0001][2019-05-10T16:27:59] Compatible ProductCode '{D2DC1EDF-EE04-9B5F-BDD7-06645D859EC3}' found for package 'Microsoft.Windows.UniversalCRT.Tools.Msi,version=10.0.26624,chip=x86'
[2acc:0001][2019-05-10T16:27:59] Package 'Microsoft.Windows.UniversalCRT.Tools.Msi' is found present on deeper detection but manifest is not present so it will not be uninstalled.
[2acc:0001][2019-05-10T16:27:59] Compatible ProductCode '{3B588BBE-EB02-D1B2-5CD5-7DB85AD8A3E7}' found for package 'Microsoft.Windows.UniversalCRT.Tools.Msi,version=10.0.26624,chip=x64'
[2acc:0001][2019-05-10T16:27:59] Package 'Microsoft.Windows.UniversalCRT.Tools.Msi' is found present on deeper detection but manifest is not present so it will not be uninstalled.
[2acc:0001][2019-05-10T16:27:59] Warning: Skipping non-applicable package Microsoft.VisualStudio.Graphics.EnableTools: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '10.0.10240'.
[2acc:0001][2019-05-10T16:27:59] Package 'CPython3.Exe.x64' is found present on deeper detection but manifest is not present so it will not be uninstalled.
[2acc:0001][2019-05-10T16:28:00] Warning: Skipping non-applicable package Microsoft.VisualStudio.OfficeDeveloperTools.WindowsIdentityFoundation.Msu: La version de système d'exploitation actuelle '6.2.9200.0' n'est pas comprise dans la plage des versions prises en charge '(,6.2)'.
[2acc:0001][2019-05-10T16:28:00] Compatible ProductCode '{5D9D2BC3-EEA9-3901-A8B8-00B5B4235EDD}' found for package 'Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12313.64372'
[2acc:0001][2019-05-10T16:28:00] Compatible package version is less than or equal to the package version. Code '{5D9D2BC3-EEA9-3901-A8B8-00B5B4235EDD}' will not be used for repair/uninstall attempts.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Product.Enterprise,version=16.0.28803.202, SelectionState: IndividuallySelected, CurrentState: Superseded, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Executables,version=16.0.28803.202, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.CMake.Project,version=16.0.28711.60, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.CMake.Project.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Blend,version=16.0.28803.202, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService,version=16.0.28729.10, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ProjectSystem,version=16.0.28711.60, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28721.110,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28721.110,language=en-US, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Kubernetes.Tools.16.0,version=1.0.1903.1901, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ApplicationInsights.Interfaces,version=16.0.20307.1, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ApplicationInsights,version=9.0.20307.1, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Azure.Templates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Azure.Templates.Resources,version=16.0.1050.141,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.AzureFunctions,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ProjectTemplates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ProjectTemplates.Resources,version=16.0.1050.141,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ItemTemplates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ItemTemplates.Resources,version=16.0.1050.141,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc,version=16.0.61313.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc.Resources,version=16.0.61313.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc.Common,version=16.0.61313.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDesigner.Executables,version=16.0.28803.202, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core,version=16.0.28803.156, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.156,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.156,language=en-US, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DataCollectors,version=16.0.28803.156, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DataCollectors.Resources,version=16.0.28803.156,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.MSBuild,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Common,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Common.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: Uninstall, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.MSBuild,version=16.0.28727.123, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.MSBuild.Resources,version=16.0.28727.123,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration,version=16.0.28729.10, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Core,version=16.0.28727.123, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Core.Resources,version=16.0.28727.123,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28729.10,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28729.10,language=en-US, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ProjectTemplates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ProjectTemplates.Resources,version=16.0.1050.141,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ItemTemplates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TemplateEngine,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TemplateEngine.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Publish.Framework,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Publish.Framework.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Shared,version=16.0.12311.10635, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Shared.Resources,version=16.0.12311.10635,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.Core.ItemTemplates,version=16.0.1050.141, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources,version=16.0.1050.141,chip=neutral,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.Compilers,version=3.0.0.1917001, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents,version=3.0.0.1917001, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeSense,version=16.0.28803.156, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TeamFoundationClient,version=16.0.28803.148, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources,version=16.0.28803.148,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.VisualStudio.Setup,version=3.0.0.1917001, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.ExpressionEvaluator,version=3.0.0.1917001, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TeamExplorer.Common,version=16.0.28803.197, CurrentState: Superseded, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TeamExplorer,version=16.0.28804, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv,version=16.0.28803.202, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected,version=16.0.28803.156, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.156,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.156,language=en-US, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NativeImageSupport,version=16.0.28728.38, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv.Config,version=16.0.28729.10, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.197,language=fr-FR, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.197,language=en-US, CurrentState: Superseded, RequestedState: Absent, DetectionState: Present, PlannedAction: Uninstall.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.X64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.X86,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.X64,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.X64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.ARM64,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.arm64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.ARM64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Source,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.ARM,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.arm,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Headers,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.ARM,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CLI.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CLI.X64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CLI.Source,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.X64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.ARM64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.Source,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.Headers,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.ARM,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.X86.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.X64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.X86.Spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.X64.Spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.X64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x86.OneCore.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x86.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x64.OneCore.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x64.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.x86.OneCore.Desktop.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.X86.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.x64.OneCore.Desktop.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.X64.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.X86.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.X64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.ARM64.Spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.arm64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.ARM64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM64.OneCore.Desktop.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM64.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.ARM64.OneCore.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.ARM64.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CLI.ARM64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.ARM64.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.Redist.ARM.Spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.MBCS.arm.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.MFC.ARM.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.arm.OneCore.Desktop.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM.spectre,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.arm.OneCore.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.arm.Desktop.spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CLI.ARM,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.ATL.ARM.Spectre,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x64.v141_xp,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x86.v141_xp,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.XPSupport.Msi,version=11.0.51106.1,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.XPSupport.Msi,version=11.0.51106.2,chip=x86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetCoreLocalFeed.1.1.Msi,version=15.0.13731.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetCoreLocalFeed.Msi,version=15.0.13731.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Core.SDK.1x,version=16.0.28714.129,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Mvc4.Templates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Mvc4.Templates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc4,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc4.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetPackagesMvc4.Msi,version=16.0.20305.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetPackagesMvc4.Msi.Resources,version=16.0.20305.0,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.Workbooks,version=1.4.3.9001, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.Profiler,version=1.6.9.468, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.Inspector,version=16.0.0.521, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.MSM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.arm64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.ARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.arm,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.ARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x86.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x86.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x64.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x64.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.x86.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.X86.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.x64.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.X64.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ARM64.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ARM64.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.ARM64.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.arm.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.arm.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.arm.OneCore.Desktop.spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.ARM64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.arm64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.ARM64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.ARM.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.arm.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.ARM.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.X86.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.X64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.X86.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.X64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.X64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.ARM64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.ARM.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.X86.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.X64.Spectre,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.ARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Templates.CodedUITest,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Templates.CodedUITest,version=16.0.28720.110,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Templates.CodedUITest,version=16.0.28720.110,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LinqToSql,version=16.0.28320.55, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LinqToSql.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.TeamFoundation.OfficeIntegration,version=16.133.28815.1,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.TeamFoundation.OfficeIntegration.Resources,version=16.133.28815.1,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.TeamFoundation.OfficeIntegration.Resources,version=16.133.28815.1,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: GitV2,version=2.17.1.2,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: GitHub.VisualStudio,version=2.8.0.6762, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.HelpViewer,version=2.3.0.40, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.HelpViewer.Resources,version=2.3.0.40,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Help.Configuration.Msi,version=16.0.28329.73,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Help.Configuration.Msi,version=16.0.28329.73,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Linux.GNU_MCU_Eclipse,version=2.9, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Linux.GCC.arm_none_eabi,version=6.3.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.CMake,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.CMake.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.CMake.Resources,version=16.0.28625.91,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux,version=16.0.28711.60, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Sharepoint.Runtime,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.WindowsIdentityFoundation.Msu,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.WIF.WindowsFeature,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.MicrosoftIdentityExtensions.Msi,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Vsto.Runtime,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Runtime.Resources,version=16.0.28315.86,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Runtime,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.BuildTools,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.BuildTools.Resources,version=16.0.28516.191,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Vsto,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Msi,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Msi.x64,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Msi.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Msi.Resources,version=16.0.28315.86,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto,version=16.0.28707.177, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Resources,version=16.0.28707.177,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsto.Resources,version=16.0.28707.177,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Workflow.ManagerTools,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerTools,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerTools.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerTools.Msi,version=16.0.28707.177,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerTools.Msi,version=16.0.28707.177,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerClient.Msi,version=16.0.28315.86,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowManagerClient.Msi,version=16.0.28315.86,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WorkflowV1,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV1.Debugger.Msi,version=16.0.28329.73,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV1.Debugger.Msi,version=16.0.28329.73,chip=x86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV1.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV1.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV1,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WorkflowV2,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV2.Debugger.Msi,version=16.0.28329.73,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WorkflowV2.BuildTools,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV2.Resources,version=16.0.28721.110,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV2.Resources,version=16.0.28721.110,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WorkflowV2,version=16.0.28711.60, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.ExchangeWebServices.Msi,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.OpenXMLSDK.Msi,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.BuildTools,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.BuildTools.Resources,version=16.0.28621.142,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.BuildTools.Resources,version=16.0.28621.142,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.OfficeDeveloperTools,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools,version=16.0.28707.177, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.Resources,version=16.0.28707.177,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.Resources,version=16.0.28707.177,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.OfficeDeveloperTools.Msi,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Roslyn.SDK.VS2017,version=3.0.0.1915502, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Sdk,version=16.0.28711.60, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Sdk.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Sdk.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.SDK.Design,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vsix.TemplatesPackage,version=16.0.2268.41551, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK.Templates,version=16.0.2268.41551, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK.Design,version=16.0.2268.41551, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.SDK.BuildTools,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK.Tools,version=16.0.2268.41551, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK.Build,version=16.0.2268.41551, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VS.SDK.Resources,version=16.0.28803.148,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VS.SDK.Resources,version=16.0.28803.148,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK,version=16.0.28729.10, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SDK.Concord,version=16.0.28721.27, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: UnrealEngineV1,version=1.0.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Cocos2dv1,version=1.5.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.iOS.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.iOS.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.iOS,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Android,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Android.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Android.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: AntV1,version=1.9.3.16, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidNDK_R16B,version=16.0,chip=x86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidNDK_R16B,version=16.0,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidImage_ARM_API25,version=21.0.0.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidImage_x86_API25_Private,version=10.0.0.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidEmulator,version=26.0.0.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidHaxm,version=6.2.0.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidPlatform25.Private,version=3.0.0.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.AndroidCommon.Private,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidBuildTools,version=25.0.3.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidM2Repo,version=47.0.0.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidPlatformTools,version=25.0.5.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidTools,version=25.2.5.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Unity3d.x64,version=5.1,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.3.5.TargetingPack.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.3.5.TargetingPack.Resources,version=16.0.28329.73,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.3.5.SDK,version=3.11.50727.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.3.5.SDK.Resources,version=3.11.50727.2,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: SyntaxTree.VisualStudio.Unity.Vsix,version=4.0.0.5, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SyntaxTree.VisualStudio.Unity.Vsix.Resources,version=4.0.0.5,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SyntaxTree.VisualStudio.Unity.Msi,version=4.0.0.5, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.GettingStarted.Mobile.Package,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Mobile.Wizard.Setup,version=15.8.0.6311901, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Mobile.Setup,version=15.8.0.6311901, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidPlatform27,version=1.0.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.AndroidCommon.Xamarin,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidBuildTools_Xamarin,version=25.0.3.4, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidPlatformTools_Xamarin,version=25.0.5.5, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: AndroidTools_Xamarin,version=26.1.1.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: OpenJDKV1.RegKey,version=1.8.0.25,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: OpenJDKV1,version=1.8.0.25,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.RemotedSimulator,version=1.3.0.18, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.IOS.Designer,version=4.17.4.419, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.Forms.Previewer,version=4.17.4.419, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.Designer,version=4.17.4.419, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.Android.Designer,version=4.17.4.419, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio,version=16.0.0.521, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.Android.Sdk,version=9.2.3.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Xamarin.VisualStudio.Apple.Sdk,version=16.0.0.521, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Clide,version=3.2.65, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.Merq,version=1.1.77, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.MonoDebugging,version=16.0.300, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.Forms,version=16.1.47, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.PclProfiles,version=1.0.9.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Xamarin.NuGetCache,version=16.1.47, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Android.SdkManager,version=1.3.217.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Android.DeviceManager,version=1.2.0.11, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Win10SDK_10.0.18362,version=10.0.18362.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM64,version=14.16.27027,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM64.Resources,version=14.16.27027,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM64.Resources,version=14.16.27027,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM64,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM64.Resources,version=14.16.27024,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM64.Resources,version=14.16.27024,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.Hostx86.Targetarm64,version=14.16.27027, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetARM64.Resources,version=14.16.27027,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetARM64.Resources,version=14.16.27027,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.ARM64.Base,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.PGO.ARM64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM64.OneCore.Desktop,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM64,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.ARM64.Store,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.ARM64.OneCore.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.ARM64.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.ARM64.v141,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.Arm64,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM,version=14.16.27027,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM.Resources,version=14.16.27027,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetARM.Resources,version=14.16.27027,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM.Resources,version=14.16.27024,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetARM.Resources,version=14.16.27024,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.Hostx86.Targetarm,version=14.16.27027, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetARM.Resources,version=14.16.27027,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetARM.Resources,version=14.16.27027,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.Hostx86.Targetarm64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetARM64.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetARM64.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.Hostx86.Targetarm,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetARM.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetARM.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.ARM.Base,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.ARM.Base.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.ARM.Base.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.PGO.ARM,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.arm.OneCore.Desktop,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.ARM,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.arm.Store,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.arm.OneCore.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.arm.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.ARM.v141,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.ARM,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.UWP,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.UAP,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.81,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.81.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.81.Resources,version=16.0.28714.129,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.UAP.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Windows.UAP.Resources,version=16.0.28714.129,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.Runtime.OSSupport.Downlevel,version=16.0.28803.265, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Hostx86.Targetarm,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX86.targetARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetARM.Resources,version=14.20.27508,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetARM.Resources,version=14.20.27508,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.arm.OneCore.Desktop,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.arm.Store,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.arm.Desktop,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.Tools.x64.ARM,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.Hostx86.Targetarm,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetARM.Resources,version=14.20.27508,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetARM.Resources,version=14.20.27508,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.ARM.Base,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.ARM.Base.Resources,version=14.20.27508,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.ARM.Base.Resources,version=14.20.27508,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.PGO.ARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX64.targetARM,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.Arm64.UWP,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.ARM64.v142,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.ARM64,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.ARM64.OneCore.Desktop,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ARM64.OneCore.Desktop,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ARM64.Store,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ARM64.Desktop,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Hostx86.Targetarm64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX86.targetARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetARM64.Resources,version=14.20.27508,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetARM64.Resources,version=14.20.27508,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.Tools.x64.ARM64,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Core,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.PGO.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.Hostx86.Targetarm64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetARM64.Resources,version=14.20.27508,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetARM64.Resources,version=14.20.27508,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM64,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM64.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetARM64.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.ARM64.Base,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM64,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX64.targetARM64,version=14.20.27508,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM64.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetARM64.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Win10SDK_IpOverUsb,version=10.0.0.4, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX86,version=14.16.27027,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX86.Resources,version=14.16.27027,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX86.Resources,version=14.16.27027,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX64,version=14.16.27027,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX64.Resources,version=14.16.27027,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX64.TargetX64.Resources,version=14.16.27027,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX86,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX86.Resources,version=14.16.27024,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX86.Resources,version=14.16.27024,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX64,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX64.Resources,version=14.16.27024,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX64.TargetX64.Resources,version=14.16.27024,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetX86,version=14.16.27027, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetX86.Resources,version=14.16.27027,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetX86.Resources,version=14.16.27027,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.HostX86.TargetX64,version=14.16.27027, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.Hostx86.Targetx64.Resources,version=14.16.27027,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.Hostx86.Targetx64.Resources,version=14.16.27027,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Tools.Core.x86,version=14.16.27027, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetX86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetX86.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetX86.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.HostX86.TargetX64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.Hostx86.Targetx64.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.Prem.Tools.Hostx86.Targetx64.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.PGO.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.PGO.X64,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.PGO.Headers,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x86.Store,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x86.OneCore.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x86.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x64.Store,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x64.OneCore.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.x64.Desktop,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Source,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.x86.OneCore.Desktop,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.X86,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.x64.OneCore.Desktop,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Redist.X64,version=14.16.27012, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CRT.Headers,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.Extensions.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.Extensions.X64,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X86,version=14.16.27024, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X86.Resources,version=14.16.27024,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X86.Resources,version=14.16.27024,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X64,version=14.16.27024,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X64.Resources,version=14.16.27024,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.14.16.CodeAnalysis.ConcCheck.X64.Resources,version=14.16.27024,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x86.v141,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x86,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x64.v141,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.x64,version=16.0.28516.191, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.Base,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.Base.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.v150.Base.Resources,version=16.0.28714.129,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Win10SDK_10.0.16299,version=10.0.16299.4, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Win10SDK_10.0.17134,version=10.0.17134.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: IncredibuildMenu,version=1.5.0.9, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Incredibuild,version=9.3.9.2770, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.IFC.X86,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.IFC.X64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CLI.X86,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CLI.X64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CLI.Source,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CLI.ARM64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CLI.ARM,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.CLR,version=16.0.28522.59, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.CLR.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.CLR.Resources,version=16.0.28714.129,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.MFC,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.MFC.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.MFC.Resources,version=16.0.28714.129,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.X86,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.X64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Source,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.X86,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Redist.X64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.MBCS.X64,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.MFC.Headers,version=14.20.27508, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PortableLibrary.TargetingPack.Msi.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PortableLibrary.TargetingPack.Msi.Resources,version=16.0.28329.73,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PortableLibrary.TargetingPack.Msi,version=16.0.28329.73, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PortableLibrary.TargetingPack,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: PreEmptive.Solutions.Dotfuscator.CE,version=5.36.0.7050, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.VSIX.Templates,version=16.0.20190320.5, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.JavaScript.NodeAdapterHost,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.NodeAdapterHost,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.NodeAdapter,version=16.0.28621.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NodejsTools.TestAdapter,version=1.5.10301.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NodejsTools.NodejsTools,version=1.5.10301.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NodejsTools.Targets,version=1.5.10301.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: CPython2.Msi.x86,version=2.7.15, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: CPython3.Exe.x86,version=3.7.2, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: CPython2.Msi.x64,version=2.7.15,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: CPython3.Exe.x64,version=3.7.2,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Debugger.VCLauncher.Vsix,version=16.0.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.NativeDevelopment.Templates.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.HTMLHelpWorkshop.Msi,version=4.74.8702.0, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetX64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Hostx86.Targetx64.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Hostx86.Targetx64.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetX86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetX86.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetX86.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetARM.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX86.TargetARM.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX86.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX86.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX86.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX64.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX64.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetX64.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetARM.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetARM.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.HostX64.TargetARM.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Core.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X86.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X86.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X64.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X64.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Tools.Base.X64.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetX86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetX86.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetX86.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetX64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.Hostx86.Targetx64.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.Hostx86.Targetx64.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.Hostx86.TargetARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetARM.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX86.TargetARM.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX86.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX86.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX86.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX64.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX64.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetX64.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetARM.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetARM.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.HostX64.TargetARM.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x86.Base.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x86.Base.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x86.Base.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x64.Base.Msi,version=14.0.24245,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x64.Base.Msi.Resources,version=14.0.24245,chip=x64,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.x64.Base.Msi.Resources,version=14.0.24245,chip=x64,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.ARM.Base.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.ARM.Base.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Premium.Tools.ARM.Base.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.PGO.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.PGO.X64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.PGO.Headers.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.PGO.ARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MFC.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MFC.X64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MFC.Source.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MFC.MBCS.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MFC.Headers.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.X64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.ARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.Base.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.Base.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.MSBuild.Base.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Extra.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Extra.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Extra.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.EspC.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.EspC.Msi.Resources,version=14.0.24245,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.EspC.Msi.Resources,version=14.0.24245,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.Dia.SDK.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x86.Store.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x86.OneCore.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x86.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x64.Store.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x64.OneCore.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.x64.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Source.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Redist.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Redist.X64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Redist.ARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Redist.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.Headers.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.ARM.Store.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.ARM.OneCore.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.CRT.ARM.Desktop.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.ATL.X86.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.ATL.X64.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.ATL.Source.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.ATL.Headers.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.140.ATL.ARM.Msi,version=14.0.24245, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Tools.Msi,version=10.0.26624,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Tools.Msi,version=10.0.26624,chip=x86, CurrentState: Absent, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.ExtensionSDK.Msi,version=10.0.26624.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.HeadersLibsSources.Msi,version=10.0.26624.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Redistributable.Msi,version=10.0.26624, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Web.Templates.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Django.Templates.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Django.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Django.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Django.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Miniconda.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Miniconda.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Miniconda.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CookiecutterTools.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CookiecutterTools.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CookiecutterTools.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Profiling.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Profiling.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Profiling.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.IronPython.Templates.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.LiveShare.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.LiveShare.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.LiveShare.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.IronPython.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.IronPython.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.IronPython.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Core.Templates.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Core.Vsix,version=16.0.19074.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Core.Vsix.Resources,version=16.0.19074.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.PythonTools.Core.Vsix.Resources,version=16.0.19074.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.Storage.AzCopy.Msi,version=6.2.0.35, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.WebSiteProjectTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.WebSiteProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Templates,version=16.0.28720.110,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Templates,version=16.0.28720.110,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.ExcelAddin.Msi,version=16.0.28329.73, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: MS.VS.TestTools.WebLoadTest.ExcelAddin.Msi.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.WebTestRecorder.Msi,version=16.0.28329.73, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.WebTestRecorder.Msi.Targeted,version=16.0.28329.73,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: MS.VS.TestTools.WebLoadTest.WebTestRecorder.Msi.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Controller,version=16.0.28320.55, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Common,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WL.Common.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WL.Common.Resources,version=16.0.28701.123,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Agent,version=16.0.28320.55, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Agent.Resources,version=16.0.28320.55,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.WebLoadTest.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DependencyValidation,version=0.9.1806.601, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DependencyValidation.Resources,version=0.9.1806.601,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Layer,version=16.0.28320.55, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Layer.Enterprise,version=16.0.28320.51, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Layer.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Layer.Resources,version=16.0.28714.193,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeClone,version=16.0.28625.91, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeClone.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.1.TargetingPack,version=4.7.2558.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.1.TargetingPack.Resources,version=4.7.2558.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.1.TargetingPack.Resources,version=4.7.2558.1,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.1.SDK,version=4.7.2558.1, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.1.SDK.Resources,version=4.7.2558.1,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.TargetingPack,version=4.7.2046.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.TargetingPack.Resources,version=4.7.2046.3,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.TargetingPack.Resources,version=4.7.2046.3,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.2.SDK.Resources,version=4.6.1590.3,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.2.SDK,version=4.6.1590.3, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Core.SDK.2.2,version=16.0.28714.129,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Ancmv2.IIS.Msi,version=12.2.18292,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Ancm.IIS.Msi,version=12.2.18292,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Superseded, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Debugger.Wcf,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Wcf.Msi,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Wcf,version=16.0.28315.86, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Wcf.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WCF.DiagnosticPack.Msi,version=16.0.28329.73, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Remove.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WCF.Resources,version=16.0.28721.110,language=fr-FR, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WCF.Resources,version=16.0.28721.110,language=en-US, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Wcf.MSBuild,version=16.0.28522.59, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WCF,version=16.0.28522.59, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.StartPageExperiment.Cpp,version=16.0.473.56576, CurrentState: Absent, RequestedState: Absent, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Branding.Enterprise,version=16.0.28803.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Branding.Enterprise,version=16.0.28803.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Msu.8,version=10.0.26624,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Msu.81,version=10.0.26624,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.FullRedist,version=4.7.3062.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.FullRedist.Resources,version=4.7.3062.2,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.PackageGroup.4.7.2.Redist,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=en-US, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv.Config,version=16.0.28803.352, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LanguageServer.Resources,version=16.0.2268.41551,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LanguageServer,version=16.0.2268.41551, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Msi.Resources,version=16.0.28329.73,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Msi.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Msi,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NativeImageSupport,version=16.0.28803.298, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.x86,version=16.0.28803.202, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Platform.Editor,version=16.0.477.54723, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ExtensionManager.Resources,version=16.0.2268.41551,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ExtensionManager,version=16.0.2268.41551, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Initializer,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MefHosting.Resources,version=16.0.478.22449,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MefHosting.Resources,version=16.0.478.22449,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MefHosting,version=16.0.478.22449, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Platform.Resources,version=16.0.473.56576,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Platform.Resources,version=16.0.473.56576,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Platform,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Platform.Search,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Setup.Configuration,version=2.0.2250.60958, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell,version=16.0.28803.202, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=en-US, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Connected,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CoreEditor.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Platform.NavigateTo,version=16.0.477.54723, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CoreEditor,version=16.0.28803.197, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv.Resources,version=16.0.28803.156,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv.Resources,version=16.0.28803.156,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv,version=16.0.28803.352, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Finalizer,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Log.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Log.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Log.Targeted,version=16.0.28315.86,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Log,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Interop,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.MinShell,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.FileHandler.Msi,version=16.0.28707.177,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.FileHandler.Msi,version=16.0.28707.177,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.SLNX.VSIX,version=16.0.58.48069, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProjectServices,version=15.8.164.40859, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.ServiceHub,version=1.3.142.2371, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TeamExplorer,version=16.0.28815, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TeamExplorer.Common,version=16.0.28803.265, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextMateGrammars,version=16.0.4.51350, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NuGet.BuildTools,version=16.0.50000.5917, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Build,version=16.0.461.62831,chip=neutral,language=neutral, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Build.FileTracker.Msi,version=16.0.28518.55, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Build.Dependencies,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiaSymReader,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphProvider.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphProvider,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphModel.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphModel,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.PerformanceProvider,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Progression,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VirtualTree.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VirtualTree,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.DevCmd.Resources,version=16.0.28803.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.DevCmd.Resources,version=16.0.28803.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.DevCmd,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VsDevCmd.Core.DotNet,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VsDevCmd.Core.WinSdk,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VsDevCmd.Ext.NetFxSdk,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VsDevCmd,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Common.Utils.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Common.Utils.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Common.Utils,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Common.UtilsPrereq,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.CoreEditor,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.CoreEditor,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Workload.CoreEditor,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.SDK,version=16.0.20190320.5, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.Dependencies,version=16.0.20190320.5, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.VSIX.Full.Core,version=16.0.20190320.5, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.VSIX.Full.Resources,version=16.0.20190320.5,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.VSIX.Full.Resources,version=16.0.20190320.5,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.FSharp.IDE,version=16.0.20190320.5, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Editors,version=16.0.0.6382007, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.MinShell.Interop.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Devenv.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Msi,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Msi.Resources,version=16.0.28329.73,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Msi.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Platform.CallHierarchy,version=16.0.477.54723, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.MSHtml,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebSiteProject.DTE.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebSiteProject.DTE,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Net.Eula.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Net.Eula.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Resources,version=16.0.28803.197,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Resources,version=16.0.28803.197,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.CollectorCab,version=16.0.28701.123, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community,version=16.0.28803.197, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.x64,version=16.0.28621.142,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.x86,version=16.0.28621.142,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProjectSystem,version=16.0.663.296, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProjectSystem.Full,version=16.0.663.296, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.CommunityCore,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.ShDocVw,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Enterprise.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Enterprise,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Enterprise.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.EnterpriseCore,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Professional.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Professional.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Professional,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.ProfessionalCore,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClientDiagnostics.Resources,version=16.0.28711.60,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClientDiagnostics.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClientDiagnostics.Targeted,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClientDiagnostics,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppResponsiveness.Resources,version=16.0.28711.60,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppResponsiveness.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppResponsiveness.Targeted,version=16.0.28707.177,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppResponsiveness,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.PackageGroup.ClientDiagnostics,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Resources,version=16.0.28721.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Resources,version=16.0.28721.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.DiagnosticsHub.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.DiagnosticsHub,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ScriptedHost.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ScriptedHost.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ScriptedHost.Targeted,version=16.0.28714.129,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ScriptedHost,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSVCDis,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.DbgHelp.Win8,version=16.0.28315.86, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.DiagHub.Client,version=16.0.28714.193,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.DiagHub.Client,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Package.DiagHub.Client.VSx86,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger,version=16.0.28721.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.Resources,version=16.0.28625.133,chip=x86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.Resources,version=16.0.28625.133,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.Resources,version=16.0.28625.133,chip=x86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.Resources,version=16.0.28625.133,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote.Resources,version=16.0.28720.110,chip=x86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote.Resources,version=16.0.28720.110,chip=x86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote,version=16.0.28720.110,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x86, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote,version=16.0.28714.193,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote.Resources,version=16.0.28720.110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote.Resources,version=16.0.28720.110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Remote,version=16.0.28720.110,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Remote,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Managed.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Managed.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Managed.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Managed.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.Managed,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.ExpressionEvaluator,version=3.0.0.1921801, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.VisualStudio.Setup,version=3.0.0.1921801, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Managed,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.CollectionAgents,version=16.0.28720.110,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Parallel.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Parallel.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Parallel,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Common.Resources,version=16.0.28516.191,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Common.Resources,version=16.0.28516.191,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Common,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger.Concord.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger.Concord.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger.Concord,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Debugger,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.VSCodeDebuggerHost,version=16.0.30220.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Record,version=1.0.6818.0,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Agent,version=1.1.1570.0,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Runtime,version=1.1.1570.0,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Runtime,version=1.1.1570.0,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Debugger.TimeTravel.Record,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Debugger.Core,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources,version=16.0.28803.265,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TeamFoundationClient,version=16.0.28803.265, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeSense.Community.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeSense.Community,version=16.0.28701.123, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeSense,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Core,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Extra,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Extra.Resources,version=16.0.28729.10,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Community.Extra.Resources,version=16.0.28729.10,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Community,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NuGet.Core,version=16.0.50000.5917, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NuGet.Licenses,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NuGet.PowershellBindingRedirect,version=16.0.28315.86, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CredentialProvider,version=0.1.11, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.NuGet,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.1.TargetingPack,version=4.6.1055.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.6.1.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents,version=3.0.0.1921801, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.Compilers,version=3.0.0.1921801, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Roslyn.Compiler,version=16.0.28714.129, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.StaticAnalysis.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.StaticAnalysis.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.StaticAnalysis,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.UniversalCRT.Msu.7,version=10.0.26624.1,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Redist.14,version=14.20.27508,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Redist.14,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiaSymReader.Native,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.InteractiveWindow,version=2.8.0.6281002, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Roslyn.LanguageServices,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.FSharp,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Core.SDK.2.1,version=16.0.28714.129,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Core.SDK.MSBuildExtensions,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Core.Component.SDK.2.1,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.FSharp.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.FSharp.ProjectTemplates.Test,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetStandard.FSharp.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.Core.ItemTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Shared.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Shared,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Publish.Framework.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Publish.Framework,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.CSharp.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.CSharp.ProjectTemplates.Test,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.CSharp.ProjectTemplates.Desktop,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.VB.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.VB.ProjectTemplates.Test,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.NetCore.ProjectTemplates.1.x,version=3.0.0.6350703, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TemplateEngine.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TemplateEngine,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.DotNetCoreTemplates.CSharpVB,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.ConnectionManager.Resources,version=16.0.28711.60,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.ConnectionManager.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Linux.ConnectionManager,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.MDD.Resources,version=16.0.28621.142,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.MDD,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.VsDbg.Integration,version=16.0.20228.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.DotNetCoreDebugging,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.LocalFeed.msi,version=16.0.0.2465120, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.NetCore.ComponentGroup.DevelopmentTools.2.1,version=16.0.28516.191, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedWeb.Shared,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetStandard.CSharp.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetStandard.VB.ProjectTemplates,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Web.Setup,version=15.8.0.6311901, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Common.Setup,version=15.8.0.6311901, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Resources,version=15.8.0.6311901, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.GettingStarted.Web.Package,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ItemTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.DotNet.ProjectTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NetCore.FSharp.ProjectTemplates.Web,version=3.0.0.6380601, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.FSharp.WebTemplates,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Package.DockerTools,version=1.1.20190314.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Package.DockerTools.BuildTools,version=1.1.20190314.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Package.ContainersTools,version=1.6.1903.1402, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.WSP.FSA.Resources,version=16.0.28701.123,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.WSP.FSA.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.WSP.FSA,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.MSBuild.Resources,version=16.0.28516.191,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.MSBuild,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebTools,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProTools.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProTools.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SQLCommon.Resources,version=16.0.61903.25110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SQLCommon,version=16.0.61903.25110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: sqlsysclrtypes,version=16.0.61903.25110,chip=x86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: Install, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sqlsysclrtypes,version=16.0.61903.25110,chip=x86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sqlsysclrtypes,version=16.0.61903.25110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: Install, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sqlsysclrtypes,version=16.0.61903.25110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProTools,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.WebToolsExtensions,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x64.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x64.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.ManagedSupport,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.ManagedSupport,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x64.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x64.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x64,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.CoreClr.x64,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x64,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.DockerTools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.NetCore.ComponentGroup.Web.2.1,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.SDK.Resources,version=4.7.3062.2,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.SDK,version=4.7.3062.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.7.2.SDK,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Cumulative.TargetingPack.Resources,version=4.7.2558.2,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.Cumulative.TargetingPack.Resources,version=4.7.2558.2,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.TargetingPack.Resources,version=4.7.3062.1,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.TargetingPack.Resources,version=4.7.3062.1,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.2.TargetingPack,version=4.7.3062.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.7.2.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.ComponentGroup.DevelopmentPrerequisites,version=16.0.28516.191, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: TypeScript.Tools,version=16.0.10306.2001, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: TypeScript.LanguageService,version=16.0.10306.2001, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Package.NodeJs,version=1.7, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.JavaScript.Language,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TypeScript.Sdk.3.3,version=3.3.90207.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: TypeScript.Build,version=16.0.10306.2001, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.TypeScript.3.3,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script.Resources,version=16.0.28516.191,chip=x86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script.Resources,version=16.0.28516.191,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script.Resources,version=16.0.28516.191,chip=x86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script.Resources,version=16.0.28516.191,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script,version=16.0.28522.59,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script,version=16.0.28522.59,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Script.Msi,version=16.0.28315.86,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Debugger.Script,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.JavaScript.TypeScript,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.PerformanceTools.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.PerformanceTools.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.SmartDevice.Connectivity,version=16.0.28622.31, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.PerformanceTools,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.KB2882822.Win7,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.ChromeAdapter,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.ChromeAdapterHost,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.JavaScript.ChromeAdapterHost,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.EdgeAdapter,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.JavaScript.EdgeAdapterHost,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.JavaScript.EdgeAdapterHost,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.JavaScript.Diagnostics,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NuGet.Build.Tasks,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Component.MSBuild,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProjectSystem.Managed,version=3.0.0.6382007, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ProjectSystem.Managed.CommonFiles,version=3.0.0.6382007, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClickOnce,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClickOnce.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClickOnce.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.ClickOnce.BootStrapper.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.ClickOnce.BootStrapper.Msi.Resources,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.ClickOnceBootstrapper,version=4.7.3063.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.SQL.ClickOnceBootstrapper.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.ClickOnce.SignTool.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ClickOnce.Msi,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.ClickOnce.Msi,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.ClickOnce.MSBuild,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.ClickOnce,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=en-US, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Core.Resources,version=16.0.28803.265,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Core,version=16.0.28803.265, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.Integration,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.MSBuild.Resources,version=16.0.28803.265,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TextTemplating.MSBuild,version=16.0.28803.265, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.TextTemplating,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.Redist.12,version=12.0.30501,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualC.Redist.12,version=12.0.30501.1,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: Install, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.RazorExtension,version=16.0.20190311.4, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LiveShareApi,version=16.0.28728.38, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Component.Microsoft.VisualStudio.RazorExtension,version=16.0.28714.129, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetPackages.Msi.Resources,version=1.0.20305.0,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNetPackages.Msi,version=1.0.20305.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.AspNet,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.CommonAzureTools,version=1.10.190309.7, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.CommonAzureTools.Resources,version=1.10.190309.7,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Common.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Common,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Azure,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WebToolsAzure,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebToolsExtensions.MSBuild,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WebToolsExtensions.MSBuild,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.IISExpress.Msi,version=16.0.28621.142,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.IISExpress,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Ancm.IISExpress.Msi,version=12.2.18292,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Ancmv2.IISExpress.Msi,version=12.2.18292,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sql_adalsql,version=16.0.61903.25110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sql_adalsql,version=16.0.61903.25110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.SQL.ADAL,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: sqllocaldb,version=16.0.61903.25110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: sqllocaldb,version=16.0.61903.25110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.SQL.LocalDB.Runtime,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SSDT.Resources,version=16.0.61903.25110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: SSDT,version=16.0.61903.25110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Common.Azure.Tools,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.SQL.CLR,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: msodbcsql,version=16.0.61903.25110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: MsSqlCmdLnUtils,version=16.0.61903.25110,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: msodbcsql,version=16.0.61903.25110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: MsSqlCmdLnUtils,version=16.0.61903.25110,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.MSODBC.SQL,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.MSSQL.CMDLnUtils,version=16.0.28707.177, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DataCollectors.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DataCollectors,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.NetworkEmulation.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.NetworkEmulation,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.NE.Msi.Targeted,version=16.0.28329.73,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.DataCollectors,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.IDE,version=16.1.0.1911504, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestWIExtension.Res,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestWIExtension,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.TestPlatform.IDE,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Agent,version=16.0.28326.58, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=en-US, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.Legacy.Common.Res,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.Legacy.Common.Res,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Common,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Premium,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Professional,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: MS.VS.TestTools.TestPlatform.Legacy.Remote.Resources,version=16.0.28522.59,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Remote,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: MS.VS.TestTools.TestPlatform.Legacy.TestTools.Resources,version=16.0.28522.59,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.TestTools,version=16.0.28320.51, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Tips.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Tips.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Tips,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.Legacy.Tips.Common,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.Legacy.Tips.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.MinShell.Interop,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.TestPlatform.Legacy,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Pex.Common.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Pex.Common,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.V1.CLI.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.V1.CLI,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.TestPlatform.V1.CLI,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.V2.CLI,version=16.0.1.2019030405, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.TestPlatform.V2.CLI,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Core,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.MSTestV2.WizardExtension.UnitTest,version=16.0.28113.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.MSTestV2.Managed,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Fakes.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Fakes,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Pex.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Pex,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Profiler,version=16.1.0.1911504, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.MSTestV2.WizardExtension.IntelliTest,version=16.0.28113.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi.Resources.Targeted,version=16.0.28622.31,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi.Resources.Targeted,version=16.0.28622.31,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi.Resources,version=16.0.28622.31,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi.Resources,version=16.0.28622.31,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi.Targeted,version=16.0.28622.31,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Collection.Msi,version=16.0.28622.31, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis.Resources.Targeted,version=16.0.28528.71,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis.Resources.Targeted,version=16.0.28528.71,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis.Targeted,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Icecap.Analysis,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Enterprise,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodeCoverage.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodeCoverage,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodeCoverage.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DCC.Resources,version=16.0.28516.191,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.DynamicCodeCoverage,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.ProfilerProxy.Msi,version=15.0.18198.1,chip=neutral, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.ProfilerProxy.Msi.x64,version=15.0.18198.1,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Core.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Core.Targeted.Resources,version=16.0.28701.123,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Core.Targeted,version=16.0.28701.123,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Core.Concord,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Core,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.IntelliTrace.Core,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.CodeCoverage,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestGeneration.Resources,version=16.0.28329.73,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestGeneration,version=16.0.28320.51, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestWindow.Dotnet,version=16.0.0.4, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestWindow.SourceBasedTestDiscovery,version=2.0.0.6382102, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Managed,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlShared.Resources,version=16.0.28720.180,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlShared.Resources,version=16.0.28720.180,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlShared,version=16.0.28720.180, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDesigner.Executables,version=16.0.28803.352, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDesigner.Resources,version=16.0.28721.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDesigner.Resources,version=16.0.28721.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDesigner,version=16.0.28721.148, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDiagnostics.Resources,version=16.0.28721.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDiagnostics.Resources,version=16.0.28721.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.XamlDiagnostics,version=16.0.28721.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Core,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Azure.Authentication,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Azure.KeyVault,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Azure.MobileApps,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Azure.Storage,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Office365,version=15.0.40718.821, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ConnectedServices.Wcf,version=15.0.30311.775, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppCapDesigner,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.ConnectedServices,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ResourceEditor.Resources,version=16.0.28714.129,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ResourceEditor.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ResourceEditor,version=16.0.28714.129, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.ManagedDesktop.Core,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedCore.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedCore.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Shared.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Shared.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Templates.Editorconfig.SolutionFile.Setup,version=15.8.0.6322802, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.Editorconfig.Wizard.Setup,version=15.8.0.6322802, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Shared,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedCore,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Console.Setup,version=15.8.0.6311901, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.GettingStarted.Console.Package,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedCore.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedCore.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Shared.Resources,version=16.0.28528.71,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Shared.Resources,version=16.0.28528.71,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Shared,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedCore,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.MSTestv2.Desktop.UnitTest,version=16.0.28113.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.MSTestv2.Desktop.UnitTest,version=16.0.28113.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Templates.Managed.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Templates.Managed.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.Templates.Managed,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Templates.Managed,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.5.2.TargetingPack,version=4.5.51651.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.5.2.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.5.TargetingPack,version=4.5.50709.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.5.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.SQL.SSDT,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.SQL.DataSources,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DevOps,version=0.4.220.58137, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Web.LibraryManager,version=2.0.22.8639, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Component.Microsoft.Web.LibraryManager,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.Web,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc.Common,version=16.0.61315.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc.Resources,version=16.0.61315.64372,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.Mvc,version=16.0.61315.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WebStackRuntime,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ItemTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.ProjectTemplates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedWeb.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedWeb.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.ManagedWeb,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedWeb.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedWeb.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.ManagedWeb,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.WebToolsExtensions.Templates,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.EdgeDriverTestCore,version=16.0.28417.1910603, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.EdgeDriverTest,version=16.0.28417.1910603, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Web,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.KeychainCredentialHelper,version=16.0.473.56576, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.TargetingPack,version=4.0.30319.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.5.1.TargetingPack,version=4.5.50932.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.5.1.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.TargetingPack,version=4.6.81.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.6.TargetingPack,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Web.AzureFunctions,version=16.0.12313.64372, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Azure.Templates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.WebTools.Azure.Templates,version=16.0.1050.142, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Component.Microsoft.VisualStudio.Web.AzureFunctions,version=16.0.28714.129, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.AzureFunctions,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CloudExplorer.16.0,version=1.2.1903.151, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.Waverton.Resources,version=2.9.90329.1,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.Waverton,version=2.9.90329.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.Compute.Emulator.Exe,version=2.9.8899.26,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.Compute.Emulator,version=16.0.28720.110, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.Storage.Emulator.Msi,version=5.9.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.Storage.Emulator,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.ClientLibs.Msi,version=3.0.127.62,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.ClientLibs,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.AuthoringTools.Msi,version=2.9.8899.26,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.AuthoringTools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.CloudExplorer,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Collection.StopService.Install,version=16.0.28621.1,branch=16.0Preview4, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Runtime.Resources,version=16.0.28713.1,language=fr-FR,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Runtime.Targeted,version=16.0.28713.1,chip=x64,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Runtime,version=16.0.28713.1,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Runtime.ExternalDependencies.Targeted,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Runtime.ExternalDependencies,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Snapshot.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Snapshot,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.SnapshotViewer,version=3.1.1812.1102, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Replay,version=1.0.6818.0,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.TimeTravel.Replay,version=1.0.6818.0,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.Debugger.TimeTravel.Replay,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Debugger.TimeTravel,version=16.0.28714.129, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Debugger.Snapshot,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Collection.Service,version=16.0.28621.1,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Collection,version=16.0.28713.1,chip=x64,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Collection.StopService.Uninstall,version=16.0.28621.1,branch=16.0Preview4, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Collection.ExternalDependencies.x64,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.PackageGroup.DiagnosticsHub.Platform,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.FrontEnd.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.FrontEnd,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Debugger.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Debugger.Targeted.Resources,version=16.0.28701.123,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Debugger.Targeted,version=16.0.28714.193,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.Debugger,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.IntelliTrace.DiagnosticsHubAgent.Targeted,version=16.0.28701.123,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.IntelliTrace.FrontEnd,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.CpuSampling.Resources,version=16.0.28713.1,language=fr-FR,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.CpuSampling.Targeted,version=16.0.28713.1,chip=x64,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.CpuSampling,version=16.0.28713.1,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.CpuSampling.ExternalDependencies,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Instrumentation.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.Instrumentation,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.DotNetObjectAlloc.Resources,version=16.0.28713.1,language=fr-FR,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.DotNetObjectAlloc.Targeted,version=16.0.28713.1,chip=x64,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.DotNetObjectAlloc,version=16.0.28713.1,branch=16.0RC.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.DiagnosticsHub.DotNetObjectAlloc.ExternalDependencies,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.PackageGroup.Icecap.Core,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.DiagnosticTools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.EntityFrameworkTools.Msi,version=6.1.61807.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.EntityFrameworkTools,version=15.0.61807.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Core.Resources,version=16.0.28711.60,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Core.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.GraphObject,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Dsl.Core,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.DslRuntime,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.D3DCompiler.Msu.Win7,version=16.0.28315.86,chip=x64, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.FullRedist,version=4.6.81.18, CurrentState: Absent, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.NET.4.6.FullRedist.Resources,version=4.6.81.18,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.PackageGroup.4.6.Redist,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.CodeAnalysis.LiveUnitTesting,version=2.0.0.6382102, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AspNet45.Feature,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ApplicationInsights,version=9.0.20409.1, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ApplicationInsights.Interfaces,version=16.0.20409.1, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.AppInsights.Tools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.WebDeploy.Msi,version=16.0.28516.191,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.LiveShare,version=1.0.17.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.1.SDK,version=4.6.1055.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.1.SDK.Resources,version=4.6.1055.1,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Net.Component.4.6.1.SDK,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.2.TargetingPack.Resources,version=4.6.1590.3,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.2.TargetingPack.Resources,version=4.6.1590.3,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.6.2.TargetingPack,version=4.6.1590.3, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.SDK,version=4.7.2046.3, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.4.7.SDK.Resources,version=4.7.2046.3,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeMap.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.CodeMap,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphDocument.Resources,version=16.0.28720.180,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphDocument.Resources,version=16.0.28720.180,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.GraphDocument,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vmp.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Vmp,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.GraphDocument,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.CodeMap,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.CoreSDK.50,version=1.0.23909, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.Azure.Prerequisites,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.DataLake.Tools.VisualStudio.Extension,version=2.3.7000.2, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.DataLake.Tools.SDK.Compiler,version=10.0.10240.3,chip=neutral, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.Waverton.Projects.Resources,version=2.9.90329.1,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.Waverton.Projects,version=2.9.90329.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.Waverton.BuildTools,version=2.9.90329.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.Waverton.BuildTools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.Waverton,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Kubernetes.Tools.16.0,version=1.0.1904.2502, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.PowerShell,version=16.0.28315.86, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: NoAction.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Azure.PowerShellNew,version=16.0.28621.142,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Azure.ResourceManager.Tools,version=3.0.90110.1, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Azure.ResourceManager.Tools,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Package.Azure.ServiceFabric.Tools,version=2.5.20190302.3, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Base.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Base.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=en-US, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core.VCProjectEngine.Resources,version=16.0.28315.86,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core.VCProjectEngine.Resources,version=16.0.28315.86,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core.VCProjectEngine,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ProjectSystem.Resources,version=16.0.28701.123,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ProjectSystem.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ProjectSystem,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Progression.Enterprise.Resources,version=16.0.28320.50,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Progression.Enterprise,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.VCPkgDatabase,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core.Resources,version=16.0.28701.123,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core.Resources,version=16.0.28701.123,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Core,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.LanguageService,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Base,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Dskx.Resources,version=16.0.28528.71,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Dskx.Resources,version=16.0.28528.71,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Dskx,version=16.0.28522.59, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.WinXPlus,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.Base.Resources,version=16.0.28803.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.Base.Resources,version=16.0.28803.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.Base,version=16.0.28701.123, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.X86,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.x86.v142,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.ARM,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.ARM.v142,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VS.VC.MSBuild.X64.Resources,version=16.0.28803.148,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VS.VC.MSBuild.X64.Resources,version=16.0.28803.148,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.X64,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.MSBuild.X64.v142,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.CoreIDE.Express,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.x64,version=16.0.28714.129,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.CoreIDE.Reduced,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Items.Pro,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Pro.Resources,version=16.0.28714.129,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Pro.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Pro,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Pro.Resources,version=16.0.28714.129,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Pro.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.Pro,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.VC.CoreIde,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Appid.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Appid.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Appid,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Analyzer.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Analyzer.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Analyzer.Targeted,version=16.0.28315.86,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Analyzer,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Msi,version=16.0.28329.73,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Msi,version=16.0.28329.73,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.EnableTools,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Absent, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Viewers.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Viewers.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Graphics.Viewers,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Headers,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.RuntimeDebug.14,version=14.20.27508,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.RuntimeDebug.14,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.X64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.X86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Source,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x64.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x86.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.DIA.SDK,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Core.x86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Core.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Core.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetX86.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetX86.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX86.targetX86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetX86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Hostx86.Targetx64.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.Hostx86.Targetx64.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.hostX86.targetX64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX86.TargetX64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.VC.Tools.x86,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.x64.OneCore.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Redist.x86.OneCore.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x64.OneCore.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x64.Store,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x86.OneCore.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.x86.Store,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.PGO.Headers,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.PGO.X64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.PGO.X86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX64.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX64.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX64,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX86.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX86.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX64.TargetX86,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetX86.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetX86.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetX86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.Hostx86.Targetx64.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.Hostx86.Targetx64.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Premium.Tools.HostX86.TargetX64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX64.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX64.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.HostX64.TargetX64,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX64,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX86.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX86.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.VCTip.HostX64.TargetX86,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Tools.HostX64.TargetX86,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X64.Resources,version=14.20.27508,chip=x64,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X64.Resources,version=14.20.27508,chip=x64,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X64,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.Extensions.X64,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X86.Resources,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X86.Resources,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.ConcurrencyCheck.X86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.Extensions.X86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CodeAnalysis.Extensions,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.VC.Tools.x86.x64,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Graphics.Tools,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Win10SDK_10.0.17763,version=10.0.17763.3, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Windows10SDK.17763,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Winforms,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Winforms,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Wpf.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Wpf.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.Wpf,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.GetStarted.Desktop.Setup,version=15.8.0.6311901, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.GettingStarted.Desktop.Package,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Winforms,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Winforms,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Wpf.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Wpf.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.Wpf,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.ManagedDesktop.Prerequisites,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Blend,version=16.0.28803.352, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Blend.Resources,version=16.0.28803.156,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Blend.Resources,version=16.0.28803.156,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Blend.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.ComponentGroup.Blend,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.JustInTime.Msi,version=16.0.28315.86,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.JustInTime,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.ImmersiveActivateHelper.Msi,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.Desktop,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.UnitTest.Resources,version=16.0.28528.71,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.UnitTest.Resources,version=16.0.28528.71,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TP.V1.CPP.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.TestPlatform.V1.CPP,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.UnitTest.Desktop.Build.Core,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Templates.UnitTest,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Redist.14.Latest,version=14.20.27508,chip=x86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.Redist.14.Latest,version=14.20.27508,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.VC.Redist.14.Latest,version=16.0.28625.61, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClassDesigner.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClassDesigner.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.ClassDesigner,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.ClassDesigner,version=16.0.28528.71, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.ArchitectureTools.Native,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Native,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Core,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.ExternalBuildFramework.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.ExternalBuildFramework,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.CMake.Project.Resources,version=16.0.28803.344,language=fr-FR, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.CMake.Project,version=16.0.28803.344, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.CMake,version=16.0.28727.123, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.Headers,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.Source,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.X64,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.ATL.X86,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ATL.Resources,version=16.0.28714.129,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ATL.Resources,version=16.0.28714.129,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.ATL,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.TestAdapterForBoostTest,version=1.0.8.6, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.Ide.TestAdapterForGoogleTest,version=0.10.1.8, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DotNetNative.ILC,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DotNetNative.Core,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.SmartDevice.Connectivity.CoreRuntime,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DotNetNative.CoreRuntime,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.Component.NetFX.Native,version=16.0.28315.86, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.UWP.NetCoreAndStandard,version=16.0.28516.191, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Net.CoreUWP,version=1.1.49, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Component.Graphics,version=16.0.28517.75, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.CoreCLR.SDK,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.CS.MSTestv2.UWP.UnitTest,version=16.0.28329.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.VB.MSTestv2.UWP.UnitTest,version=16.0.28329.0, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.UAP.Templates,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.UAP.Templates,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.Templates.UWP,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Builder,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Common,version=16.0.28621.142, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Common.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Extension.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CUIT.Ext.Msi.Targeted,version=16.0.28329.73,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CUIT.Framework.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CUIT.Framework.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Framework,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Framework.Msi,version=16.0.28329.73, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CUIT.Playback.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Playback,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Recorder.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Recorder.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.Recorder,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.UAP.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.UAP.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.TestTools.CodedUITest.UAP,version=16.0.28320.50, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.CodedUITest,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.TestTools.UWP,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppAnalysis.Resources,version=16.0.28711.60,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppAnalysis.Resources,version=16.0.28711.60,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppAnalysis.Targeted,version=16.0.28707.177,chip=x64, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.AppAnalysis,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.UWP.ClientDiagnostics,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.UWP.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.UWP.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Templates.UWP,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.UWP.Templates,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Executables,version=16.0.28803.352, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Resources,version=16.0.28729.10,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Resources,version=16.0.28729.10,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.CoreClr.arm,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm64.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm64.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm64.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm64.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.arm64,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.CoreClr.arm64,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.arm64,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x86.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x86.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x86.Resources,version=16.0.28720.110,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x86.Resources,version=16.0.28720.110,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.Concord.OneCore.x86,version=16.0.28720.110, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.CoreClr.x86,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Debugger.OneCore.x86,version=16.0.28714.193, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Overview,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.VC.UnitTest.UAP.Build.Core,version=16.0.28516.191, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools,version=16.0.28729.10, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.Simulator.Package.Resources,version=16.0.28522.59, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.Windows.Simulator.Package,version=16.0.28522.59, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Build.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Build.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Build,version=16.0.28711.60, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.Windows.Tools.Msi.16,version=16.0.28707.177, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Build.Resources,version=16.0.28714.193,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Build.Resources,version=16.0.28714.193,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Build,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Resources.Msi,version=14.20.27508,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Resources.Msi,version=14.20.27508,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Desktop.110.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Desktop.120.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Desktop.140.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.Universal.120.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.arm.OneCore.Desktop,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.UWP.Common.Build,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.PackageGroup.UWP.Common,version=16.0.28315.86, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Tools.Resources,version=16.0.28625.91,language=en-US, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Tools.Resources,version=16.0.28625.91,language=fr-FR, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualStudio.DesktopBridge.Tools,version=16.0.28625.91, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Package: Microsoft.VisualCpp.CRT.Appx.ARM64.Msi,version=14.20.27508, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Dependency action plan - PackageExecuteAction: None, PlannedActionForDependency: Add.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.UWP.Xamarin,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.ComponentGroup.UWP.Support,version=16.0.28621.142, SelectionState: GroupSelected, CurrentState: Present, RequestedState: Present, DetectionState: Present, PlannedAction: None.
[2acc:0001][2019-05-10T16:28:00] Non-installable Package: Microsoft.VisualStudio.Product.Enterprise,version=16.0.28803.352, SelectionState: NotSelected, CurrentState: Absent, RequestedState: Present, DetectionState: Absent, PlannedAction: Install.
[2acc:0001][2019-05-10T16:28:00] Running pre-check verification.
[2acc:0001][2019-05-10T16:28:01] Starting install
[2acc:0001][2019-05-10T16:28:01] Starting install operation
[2acc:0001][2019-05-10T16:28:02] BEGIN: UpdateDownloadedSizes
[2acc:0017][2019-05-10T16:28:02] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:02] Running pre-check verification.
[2acc:0018][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=en-US"
[2acc:0017][2019-05-10T16:28:02] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix
[2acc:0001][2019-05-10T16:28:02] END: UpdateDownloadedSizes
[2acc:0001][2019-05-10T16:28:02] BEGIN: Saving current instance state
[2acc:0001][2019-05-10T16:28:02] END: Saving current instance state
[2acc:0001][2019-05-10T16:28:02] BEGIN: Waiting for other activities
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix' succeeded. Hash: 914868626768911D8E6B9F884E997762F17C19FDF065F6E90211B60CCA956E98
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix' succeeded. Hash: 8FFBBDA82542C61BD18936335EFD910A2DB44FA02B1581671AFBB3A971B13AE7
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix' succeeded. Hash: 914868626768911D8E6B9F884E997762F17C19FDF065F6E90211B60CCA956E98
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix' succeeded. Hash: 8FFBBDA82542C61BD18936335EFD910A2DB44FA02B1581671AFBB3A971B13AE7
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.79ACB799F5FF988E0AD7\\payload.vsix' succeeded. Hash: 914868626768911D8E6B9F884E997762F17C19FDF065F6E90211B60CCA956E98
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.MinShell.Resources.E6824CAEFB35251A44E5\\payload.vsix' succeeded. Hash: 8FFBBDA82542C61BD18936335EFD910A2DB44FA02B1581671AFBB3A971B13AE7
[2acc:0017][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.MinShell.Resources,version=16.0.28803.344,language=en-US"
[2acc:0017][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.Devenv.Config,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.NativeImageSupport,version=16.0.28803.298"
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix' succeeded. Hash: 248B62E7B87EC05C6CE2455509D0B263EBC3C07186E9902AC206146D1875E054
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix' succeeded. Hash: 248B62E7B87EC05C6CE2455509D0B263EBC3C07186E9902AC206146D1875E054
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix' succeeded. Hash: 3C4250F209755C2AA8EF5E1027D11D793C50D695C189A31B832BE22F58739190
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.Config.0762BC4F37C8DAF50A13\\payload.vsix' succeeded. Hash: 248B62E7B87EC05C6CE2455509D0B263EBC3C07186E9902AC206146D1875E054
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix' succeeded. Hash: 3C4250F209755C2AA8EF5E1027D11D793C50D695C189A31B832BE22F58739190
[2acc:0017][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.Devenv.Config,version=16.0.28803.352"
[2acc:0017][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=en-US"
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.NativeImageSupport.272CE21CA303322797A8\\payload.vsix' succeeded. Hash: 3C4250F209755C2AA8EF5E1027D11D793C50D695C189A31B832BE22F58739190
[2acc:0018][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.NativeImageSupport,version=16.0.28803.298"
[2acc:0018][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix' succeeded. Hash: F8458B608B6A51565980CDB8A36161F13A09DB2AEB0E68BE685E2EEB036AD936
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix' succeeded. Hash: F8458B608B6A51565980CDB8A36161F13A09DB2AEB0E68BE685E2EEB036AD936
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix
[2acc:0017][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.C9A9F7E90855CCA7EFA3\\payload.vsix' succeeded. Hash: F8458B608B6A51565980CDB8A36161F13A09DB2AEB0E68BE685E2EEB036AD936
[2acc:0017][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=en-US"
[2acc:0017][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.Connected,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix' succeeded. Hash: 81636CA1E81A0D69BA4CBB7C3D8C800246BE3734B09240A73CB74552413DF79A
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix' succeeded. Hash: 81636CA1E81A0D69BA4CBB7C3D8C800246BE3734B09240A73CB74552413DF79A
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.Resources.42EFBF6F18F06DE4825E\\payload.vsix' succeeded. Hash: 81636CA1E81A0D69BA4CBB7C3D8C800246BE3734B09240A73CB74552413DF79A
[2acc:0018][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.Connected.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.Devenv,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix' succeeded. Hash: 7A1F99A2DECD6555F434F6752094BF8D54850D97EE50BD8664DA31827DE8B107
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix' succeeded. Hash: 7A1F99A2DECD6555F434F6752094BF8D54850D97EE50BD8664DA31827DE8B107
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix
[2acc:0018][2019-05-10T16:28:02] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Devenv.00934CE572D8FC4BFB23\\payload.vsix' succeeded. Hash: 7A1F99A2DECD6555F434F6752094BF8D54850D97EE50BD8664DA31827DE8B107
[2acc:0018][2019-05-10T16:28:02] END: Downloading package "Microsoft.VisualStudio.Devenv,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:02] BEGIN: Downloading package "Microsoft.VisualStudio.TeamExplorer,version=16.0.28815"
[2acc:0018][2019-05-10T16:28:02] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix' succeeded. Hash: E155387FBB9D8399552EA588EED2875745D6FFAB8494BFECCD28B3E075C016FC
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix' succeeded. Hash: E155387FBB9D8399552EA588EED2875745D6FFAB8494BFECCD28B3E075C016FC
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Connected.F69152224936C4383678\\payload.vsix' succeeded. Hash: E155387FBB9D8399552EA588EED2875745D6FFAB8494BFECCD28B3E075C016FC
[2acc:0017][2019-05-10T16:28:03] END: Downloading package "Microsoft.VisualStudio.Connected,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:03] BEGIN: Downloading package "Microsoft.VisualStudio.Debugger.DbgHelp.Win8,version=16.0.28315.86"
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix' succeeded. Hash: 99CDC36C3013BEF1511D82081B7D0E76EF255698402B8B900EB691504538D823
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix' succeeded. Hash: 99CDC36C3013BEF1511D82081B7D0E76EF255698402B8B900EB691504538D823
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.DbgHelp.Win8.7EAE1AF84B9461BB0630\\payload.vsix' succeeded. Hash: 99CDC36C3013BEF1511D82081B7D0E76EF255698402B8B900EB691504538D823
[2acc:0017][2019-05-10T16:28:03] END: Downloading package "Microsoft.VisualStudio.Debugger.DbgHelp.Win8,version=16.0.28315.86"
[2acc:0017][2019-05-10T16:28:03] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:03] Running pre-check verification.
[2acc:0017][2019-05-10T16:28:03] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:03] BEGIN: Downloading package "Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x86"
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix' succeeded. Hash: B55A3055596D6C60536D7413E72EF5E90609DE95AE8FE6367AADB9E73A197B4F
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix' succeeded. Hash: B55A3055596D6C60536D7413E72EF5E90609DE95AE8FE6367AADB9E73A197B4F
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.C5672BE2191AC114BA2C\\payload.vsix' succeeded. Hash: B55A3055596D6C60536D7413E72EF5E90609DE95AE8FE6367AADB9E73A197B4F
[2acc:0017][2019-05-10T16:28:03] END: Downloading package "Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x86"
[2acc:0017][2019-05-10T16:28:03] BEGIN: Downloading package "Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x64"
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix' succeeded. Hash: 1ACAECCF29787D7736F393CEF132312E32C76CAA563749CDD196C21957CE020E
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix' succeeded. Hash: 1ACAECCF29787D7736F393CEF132312E32C76CAA563749CDD196C21957CE020E
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8.4993CC183FB1FFB2CBD2\\payload.vsix' succeeded. Hash: 1ACAECCF29787D7736F393CEF132312E32C76CAA563749CDD196C21957CE020E
[2acc:0017][2019-05-10T16:28:03] END: Downloading package "Microsoft.VisualStudio.Debugger.Remote.DbgHelp.Win8,version=16.0.28315.86,chip=x64"
[2acc:0017][2019-05-10T16:28:03] BEGIN: Downloading package "Microsoft.CodeAnalysis.ExpressionEvaluator,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix' succeeded. Hash: 9467DCDCEB17534B4677296A6F0F22D0DD35362C833693F1174DEA13FB284DEA
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix' succeeded. Hash: 9467DCDCEB17534B4677296A6F0F22D0DD35362C833693F1174DEA13FB284DEA
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix
[2acc:0017][2019-05-10T16:28:03] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.ExpressionEvaluator.407FE4A595A475939388\\ExpressionEvaluatorPackage.vsix' succeeded. Hash: 9467DCDCEB17534B4677296A6F0F22D0DD35362C833693F1174DEA13FB284DEA
[2acc:0017][2019-05-10T16:28:03] END: Downloading package "Microsoft.CodeAnalysis.ExpressionEvaluator,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:03] BEGIN: Downloading package "Microsoft.CodeAnalysis.VisualStudio.Setup,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:03] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix
[2acc:0017][2019-05-10T16:28:04] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix' succeeded. Hash: 34CC7AE22E1F8086518E4398085ACFD40D63B615EC1F531D0534FCB5EA93FC03
[2acc:0017][2019-05-10T16:28:04] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix' succeeded. Hash: 34CC7AE22E1F8086518E4398085ACFD40D63B615EC1F531D0534FCB5EA93FC03
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.Setup.1781AAB3F355AE1644E2\\Roslyn.VisualStudio.Setup.vsix' succeeded. Hash: 34CC7AE22E1F8086518E4398085ACFD40D63B615EC1F531D0534FCB5EA93FC03
[2acc:0017][2019-05-10T16:28:05] END: Downloading package "Microsoft.CodeAnalysis.VisualStudio.Setup,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:05] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix' succeeded. Hash: 4E88E26F857FE0A2B2548DE371D84CC8454AAF23649DC4B7C06F40B7E3DF7839
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix' succeeded. Hash: 4E88E26F857FE0A2B2548DE371D84CC8454AAF23649DC4B7C06F40B7E3DF7839
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources.5FF87B94F976C5AF0E48\\payload.vsix' succeeded. Hash: 4E88E26F857FE0A2B2548DE371D84CC8454AAF23649DC4B7C06F40B7E3DF7839
[2acc:0017][2019-05-10T16:28:05] END: Downloading package "Microsoft.VisualStudio.TestTools.TeamFoundationClient.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0017][2019-05-10T16:28:05] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.TeamFoundationClient,version=16.0.28803.265"
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix' succeeded. Hash: 26C6B4AB2AA910ACE77FB374081498762CBE3F66D8A4B0D7486C55E6F29071AF
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix' succeeded. Hash: 26C6B4AB2AA910ACE77FB374081498762CBE3F66D8A4B0D7486C55E6F29071AF
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TeamFoundationClient.44F1C9C3D4A2C6C8602D\\payload.vsix' succeeded. Hash: 26C6B4AB2AA910ACE77FB374081498762CBE3F66D8A4B0D7486C55E6F29071AF
[2acc:0017][2019-05-10T16:28:05] END: Downloading package "Microsoft.VisualStudio.TestTools.TeamFoundationClient,version=16.0.28803.265"
[2acc:0017][2019-05-10T16:28:05] BEGIN: Downloading package "Microsoft.VisualStudio.CodeSense,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix' succeeded. Hash: F0B7177901DD2171C085CA56FA59A50A4830F6836D1C653B7CCB84B07CEC774B
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix' succeeded. Hash: F0B7177901DD2171C085CA56FA59A50A4830F6836D1C653B7CCB84B07CEC774B
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix
[2acc:0017][2019-05-10T16:28:05] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.CodeSense.8D127D3CF2292C47F74D\\payload.vsix' succeeded. Hash: F0B7177901DD2171C085CA56FA59A50A4830F6836D1C653B7CCB84B07CEC774B
[2acc:0017][2019-05-10T16:28:05] END: Downloading package "Microsoft.VisualStudio.CodeSense,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:05] BEGIN: Downloading package "Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:05] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix' succeeded. Hash: BA45122197D21D7C81FCF75EFA7051CA2C3AB77C19253EFC781F341CC1DF254C
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix
[2acc:0018][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix' succeeded. Hash: EF462432B8E667D0958279BE8FF7DB68A87023F9009FBB45D185F85B89B32C3C
[2acc:0018][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix' succeeded. Hash: BA45122197D21D7C81FCF75EFA7051CA2C3AB77C19253EFC781F341CC1DF254C
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents.356E1AD8B3315E00290F\\Roslyn.VisualStudio.InteractiveComponents.vsix' succeeded. Hash: BA45122197D21D7C81FCF75EFA7051CA2C3AB77C19253EFC781F341CC1DF254C
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.CodeAnalysis.VisualStudio.InteractiveComponents,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.CodeAnalysis.Compilers,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix' succeeded. Hash: 6A10E32D1306BB755172B95155F0A09875E92B9CDA1618627CA2648162B9F429
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix' succeeded. Hash: 6A10E32D1306BB755172B95155F0A09875E92B9CDA1618627CA2648162B9F429
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.CodeAnalysis.Compilers.0A4C751FEB4DE535C1FF\\Microsoft.CodeAnalysis.Compilers.vsix' succeeded. Hash: 6A10E32D1306BB755172B95155F0A09875E92B9CDA1618627CA2648162B9F429
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.CodeAnalysis.Compilers,version=3.0.0.1921801"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix' succeeded. Hash: 8833C7C0D9E394DAEF988B54F0B0232A6AD65D8F347FAEBFD20BC57916295C79
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix' succeeded. Hash: 8833C7C0D9E394DAEF988B54F0B0232A6AD65D8F347FAEBFD20BC57916295C79
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.A835464B215DD976C5A2\\Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources.vsix' succeeded. Hash: 8833C7C0D9E394DAEF988B54F0B0232A6AD65D8F347FAEBFD20BC57916295C79
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.DotNet.Core.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:06] Running pre-check verification.
[2acc:0017][2019-05-10T16:28:06] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.DotNet.Core.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix' succeeded. Hash: F5C24886387DBFAE5821E24F91D3ABBC07DBF2A71864EBC04462E67EA83E0785
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix' succeeded. Hash: F5C24886387DBFAE5821E24F91D3ABBC07DBF2A71864EBC04462E67EA83E0785
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.Core.ItemTemplates.FE1180FB4125B6700598\\Microsoft.WebTools.DotNet.Core.ItemTemplates.vsix' succeeded. Hash: F5C24886387DBFAE5821E24F91D3ABBC07DBF2A71864EBC04462E67EA83E0785
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.DotNet.Core.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.Shared.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix' succeeded. Hash: F4124CFD675574A5F9D7B6BB38BD7BC38E7DE795B9E1B0A3CEA33E99387D7DD6
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix' succeeded. Hash: F4124CFD675574A5F9D7B6BB38BD7BC38E7DE795B9E1B0A3CEA33E99387D7DD6
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.Resources.01D90B8891B46732C15C\\Microsoft.WebTools.Shared.Resources.vsix' succeeded. Hash: F4124CFD675574A5F9D7B6BB38BD7BC38E7DE795B9E1B0A3CEA33E99387D7DD6
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.Shared.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.Shared,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix' succeeded. Hash: 5ADBC717B19286DEC9D8559FDD7D5718451CA0A407EA366AE5FF506E3AC10B9C
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix' succeeded. Hash: 5ADBC717B19286DEC9D8559FDD7D5718451CA0A407EA366AE5FF506E3AC10B9C
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Shared.F0FBC23A06A6EA15751D\\Microsoft.WebTools.Shared.vsix' succeeded. Hash: 5ADBC717B19286DEC9D8559FDD7D5718451CA0A407EA366AE5FF506E3AC10B9C
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.Shared,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.Publish.Framework.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix' succeeded. Hash: C557ECC40C3713D59A1019C3FF8062C643A50CC8C39B97BDBF1DF6F8BF78CA19
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix' succeeded. Hash: C557ECC40C3713D59A1019C3FF8062C643A50CC8C39B97BDBF1DF6F8BF78CA19
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.Resources.82B3D88ED8F37D82A4D9\\Microsoft.Publish.Framework.Resources.vsix' succeeded. Hash: C557ECC40C3713D59A1019C3FF8062C643A50CC8C39B97BDBF1DF6F8BF78CA19
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.Publish.Framework.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.Publish.Framework,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix' succeeded. Hash: FB05A20505A018197F31D7B66F7802388BAA574A850DB5275B692382799B227E
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix
[2acc:0018][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix' succeeded. Hash: EF462432B8E667D0958279BE8FF7DB68A87023F9009FBB45D185F85B89B32C3C
[2acc:0018][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix' succeeded. Hash: FB05A20505A018197F31D7B66F7802388BAA574A850DB5275B692382799B227E
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.Publish.Framework.1A1B6AA00A3FAAD81722\\Microsoft.Publish.Framework.vsix' succeeded. Hash: FB05A20505A018197F31D7B66F7802388BAA574A850DB5275B692382799B227E
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.Publish.Framework,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.VisualStudio.TemplateEngine.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix' succeeded. Hash: B07E81ED1524C3D63ED9136E57591BEEF1B3E6DCB26BAD34105C4DDF78B25362
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix' succeeded. Hash: B07E81ED1524C3D63ED9136E57591BEEF1B3E6DCB26BAD34105C4DDF78B25362
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.Resources.E6F2FC02D55DB25B907D\\Microsoft.VisualStudio.TemplateEngine.Resources.vsix' succeeded. Hash: B07E81ED1524C3D63ED9136E57591BEEF1B3E6DCB26BAD34105C4DDF78B25362
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.VisualStudio.TemplateEngine.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.VisualStudio.TemplateEngine,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix' succeeded. Hash: 2FB11835B7901DD3BFDD0777CE2096DDF6E31582775570E6304A04C195739488
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix' succeeded. Hash: 2FB11835B7901DD3BFDD0777CE2096DDF6E31582775570E6304A04C195739488
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TemplateEngine.461E219CA9B52AC78019\\Microsoft.VisualStudio.TemplateEngine.vsix' succeeded. Hash: 2FB11835B7901DD3BFDD0777CE2096DDF6E31582775570E6304A04C195739488
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.VisualStudio.TemplateEngine,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.DotNet.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix' succeeded. Hash: EF451FE7ADD6654FD0E74533B448F1B60BB695D6DD1D05494C6C250FC37337CF
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix' succeeded. Hash: EF451FE7ADD6654FD0E74533B448F1B60BB695D6DD1D05494C6C250FC37337CF
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ItemTemplates.35835A4CDBA9A5570BCD\\Microsoft.WebTools.DotNet.ItemTemplates.vsix' succeeded. Hash: EF451FE7ADD6654FD0E74533B448F1B60BB695D6DD1D05494C6C250FC37337CF
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.DotNet.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.DotNet.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix' succeeded. Hash: F95B537417C8D13F25176E67C35087536A95FBB5899A3210918F775DE038126B
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix' succeeded. Hash: F95B537417C8D13F25176E67C35087536A95FBB5899A3210918F775DE038126B
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.89AEAE9DDA64BB30B45A\\Microsoft.WebTools.DotNet.ProjectTemplates.Resources.vsix' succeeded. Hash: F95B537417C8D13F25176E67C35087536A95FBB5899A3210918F775DE038126B
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.DotNet.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.WebTools.DotNet.ProjectTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix' succeeded. Hash: FBD37F46F081F46E34694966FAC21B9AAC2CD002841BB09BA6AC962FEABB8373
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix' succeeded. Hash: FBD37F46F081F46E34694966FAC21B9AAC2CD002841BB09BA6AC962FEABB8373
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.DotNet.ProjectTemplates.ADF711CCBCAC79D1C520\\Microsoft.WebTools.DotNet.ProjectTemplates.vsix' succeeded. Hash: FBD37F46F081F46E34694966FAC21B9AAC2CD002841BB09BA6AC962FEABB8373
[2acc:0017][2019-05-10T16:28:06] END: Downloading package "Microsoft.WebTools.DotNet.ProjectTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:06] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:06] Running pre-check verification.
[2acc:0017][2019-05-10T16:28:06] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:06] BEGIN: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix' succeeded. Hash: 61E95BA342C5748A36E1953C3A43F2591EAFD7464416009244B0E67186320DC4
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix
[2acc:0017][2019-05-10T16:28:06] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix' succeeded. Hash: 61E95BA342C5748A36E1953C3A43F2591EAFD7464416009244B0E67186320DC4
[2acc:0017][2019-05-10T16:28:06] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.Resources.8754FAE9092F0B116697\\Microsoft.VisualStudio.WebToolsExtensions.Resources.vsix' succeeded. Hash: 61E95BA342C5748A36E1953C3A43F2591EAFD7464416009244B0E67186320DC4
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.WebToolsExtensions,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix
[2acc:0005][2019-05-10T16:28:07] No restart manager available. Assuming no reboot required for instance state.
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix' succeeded. Hash: 04E49F48456335A26CAD6DAD9B1C42E0A4101A2057B57E303F08FC0265D08A64
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TeamExplorer.753A67727D251A4C95E8\\Microsoft.VisualStudio.TeamExplorer.vsix' succeeded. Hash: EF462432B8E667D0958279BE8FF7DB68A87023F9009FBB45D185F85B89B32C3C
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TeamExplorer,version=16.0.28815"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "sqlsysclrtypes,version=16.0.61903.25110,chip=x86,language=en-US"
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "sqlsysclrtypes,version=16.0.61903.25110,chip=x86,language=en-US"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "sqlsysclrtypes,version=16.0.61903.25110,chip=x64,language=en-US"
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "sqlsysclrtypes,version=16.0.61903.25110,chip=x64,language=en-US"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=en-US"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix' succeeded. Hash: AFA0FC04747D250E3F3725CE9F710818BE7816FDF209529AF5EF90582F8D3102
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix' succeeded. Hash: AFA0FC04747D250E3F3725CE9F710818BE7816FDF209529AF5EF90582F8D3102
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.3EF80DC4B031597F1E91\\payload.vsix' succeeded. Hash: AFA0FC04747D250E3F3725CE9F710818BE7816FDF209529AF5EF90582F8D3102
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=en-US"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix' succeeded. Hash: 7364C98E860074449C73973B66A1DB6BC0E00A3B06546F0B6DE65C973F6295E2
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix' succeeded. Hash: 7364C98E860074449C73973B66A1DB6BC0E00A3B06546F0B6DE65C973F6295E2
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.Resources.35B449906AF52EEB0C44\\payload.vsix' succeeded. Hash: 7364C98E860074449C73973B66A1DB6BC0E00A3B06546F0B6DE65C973F6295E2
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.Core.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix' succeeded. Hash: 8476FDAA6C0EFB2FB0D0879F1570ED7D9095F5487DC0B3B4A2713E984EC9F0C0
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix' succeeded. Hash: 8476FDAA6C0EFB2FB0D0879F1570ED7D9095F5487DC0B3B4A2713E984EC9F0C0
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.Resources.5D717EF24F7DA32DE1C8\\payload.vsix' succeeded. Hash: 8476FDAA6C0EFB2FB0D0879F1570ED7D9095F5487DC0B3B4A2713E984EC9F0C0
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.Core.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.Core,version=16.0.28803.265"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix' succeeded. Hash: 25860D20E5B5ECB68F2A3F5B9FCF18F63FFDB2A681B75364DF544173485D16FB
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix' succeeded. Hash: 25860D20E5B5ECB68F2A3F5B9FCF18F63FFDB2A681B75364DF544173485D16FB
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Core.BD6ECE57603AC88EBDED\\payload.vsix' succeeded. Hash: 25860D20E5B5ECB68F2A3F5B9FCF18F63FFDB2A681B75364DF544173485D16FB
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.Core,version=16.0.28803.265"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration,version=16.0.28803.344"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix' succeeded. Hash: BDDDE922833BD362D6B3C8890576D9748160AC72E7076BC76BA1FA19EAD48497
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix' succeeded. Hash: BDDDE922833BD362D6B3C8890576D9748160AC72E7076BC76BA1FA19EAD48497
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.Integration.6BAE2B2EE3FBBF7DA39B\\payload.vsix' succeeded. Hash: BDDDE922833BD362D6B3C8890576D9748160AC72E7076BC76BA1FA19EAD48497
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.Integration,version=16.0.28803.344"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.MSBuild.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix' succeeded. Hash: BCF9261AA8F5EEEA079730A3DD76D44790411B8D8F0D1ABAB545C72696944B7C
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix' succeeded. Hash: BCF9261AA8F5EEEA079730A3DD76D44790411B8D8F0D1ABAB545C72696944B7C
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.Resources.45DF7B58D60330AE866C\\payload.vsix' succeeded. Hash: BCF9261AA8F5EEEA079730A3DD76D44790411B8D8F0D1ABAB545C72696944B7C
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.MSBuild.Resources,version=16.0.28803.265,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Checking required machine state
[2acc:0018][2019-05-10T16:28:07] Running pre-check verification.
[2acc:0018][2019-05-10T16:28:07] END: Checking required machine state
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TextTemplating.MSBuild,version=16.0.28803.265"
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix' succeeded. Hash: 04E49F48456335A26CAD6DAD9B1C42E0A4101A2057B57E303F08FC0265D08A64
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix' succeeded. Hash: B1285857FD82B1C558D1A14F75C5153B0FC544B6816AA00F5EA240F9DB8A0507
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix' succeeded. Hash: B1285857FD82B1C558D1A14F75C5153B0FC544B6816AA00F5EA240F9DB8A0507
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TextTemplating.MSBuild.37EB2D3F2ABAD6920DEC\\payload.vsix' succeeded. Hash: B1285857FD82B1C558D1A14F75C5153B0FC544B6816AA00F5EA240F9DB8A0507
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TextTemplating.MSBuild,version=16.0.28803.265"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi
[2acc:0009][2019-05-10T16:28:07] No restart manager available. Assuming no reboot required for instance state.
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi' succeeded. Hash: F03DA0DCE072B3D7E7D2174D9B69824ED15E281C1EC6D6B099BCB68950472555
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi' succeeded. Hash: F03DA0DCE072B3D7E7D2174D9B69824ED15E281C1EC6D6B099BCB68950472555
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.AspNetDiagnosticPack.Msi.31E5AEA8AACE7FF3CCDA\\AspNetDiagnosticPack.msi' succeeded. Hash: F03DA0DCE072B3D7E7D2174D9B69824ED15E281C1EC6D6B099BCB68950472555
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.AspNetDiagnosticPack.Msi,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Azure.Common.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix' succeeded. Hash: 0A2CEB46E80E38DC00EDC39C383583C070FB83307FC2F07E1F01A5F309D616EF
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix' succeeded. Hash: 0A2CEB46E80E38DC00EDC39C383583C070FB83307FC2F07E1F01A5F309D616EF
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.Resources.1A222536555F632B70A0\\Microsoft.VisualStudio.Web.Azure.Common.Resources.vsix' succeeded. Hash: 0A2CEB46E80E38DC00EDC39C383583C070FB83307FC2F07E1F01A5F309D616EF
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Azure.Common.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Azure.Common,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.BB95DDF8D669C3ED6A44\\Microsoft.VisualStudio.WebToolsExtensions.vsix' succeeded. Hash: 04E49F48456335A26CAD6DAD9B1C42E0A4101A2057B57E303F08FC0265D08A64
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.WebToolsExtensions,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Azure.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix' succeeded. Hash: E9D58D66D77E9E53B3A7C33C962CAF9773C73E204F9DCC5F3B09D02F317898AA
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix' succeeded. Hash: E9D58D66D77E9E53B3A7C33C962CAF9773C73E204F9DCC5F3B09D02F317898AA
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Resources.1E20C0E4CE86ACE1B319\\Microsoft.VisualStudio.Web.Azure.Resources.vsix' succeeded. Hash: E9D58D66D77E9E53B3A7C33C962CAF9773C73E204F9DCC5F3B09D02F317898AA
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Azure.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Azure,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix' succeeded. Hash: EEF40A061F30B9FF46F6A71D383EC8CAB04020AF0958964D3B328A2321DC8326
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix' succeeded. Hash: 9B8F53C124DD51562BD00DE233B9BC253C91F0594E6E49540CAA9C64AB4A5FF6
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix' succeeded. Hash: EEF40A061F30B9FF46F6A71D383EC8CAB04020AF0958964D3B328A2321DC8326
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix' succeeded. Hash: 9B8F53C124DD51562BD00DE233B9BC253C91F0594E6E49540CAA9C64AB4A5FF6
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.Common.1DB6292C1646D8A856E4\\Microsoft.VisualStudio.Web.Azure.Common.vsix' succeeded. Hash: EEF40A061F30B9FF46F6A71D383EC8CAB04020AF0958964D3B328A2321DC8326
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Azure.Common,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix' succeeded. Hash: 1F5B6EDF6CE6808C46748B0BCEF9E8ED04E757B38BFA9806EB25865C7FEDAC23
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix' succeeded. Hash: 1F5B6EDF6CE6808C46748B0BCEF9E8ED04E757B38BFA9806EB25865C7FEDAC23
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.F38B1C3122EF10E3AA72\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources.vsix' succeeded. Hash: 1F5B6EDF6CE6808C46748B0BCEF9E8ED04E757B38BFA9806EB25865C7FEDAC23
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.MSBuild.Resources,version=16.0.12313.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.MSBuild,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Azure.E661C93C8C003132D3C7\\Microsoft.VisualStudio.Web.Azure.vsix' succeeded. Hash: 9B8F53C124DD51562BD00DE233B9BC253C91F0594E6E49540CAA9C64AB4A5FF6
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Azure,version=16.0.12313.64372"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.DataCollectors.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix' succeeded. Hash: FFF4D5D8D0FEB339304B19175BDF9F49082B361A516F7CC30A41CFFF4576B7CC
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix' succeeded. Hash: EDDD41F75E0FEB05CDB4E04A01309D2232C76409B162FE2D2AD4185CB19B4B33
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix' succeeded. Hash: FFF4D5D8D0FEB339304B19175BDF9F49082B361A516F7CC30A41CFFF4576B7CC
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.Resources.D9FB7DCA19A3C4D26DF5\\payload.vsix' succeeded. Hash: FFF4D5D8D0FEB339304B19175BDF9F49082B361A516F7CC30A41CFFF4576B7CC
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TestTools.DataCollectors.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.DataCollectors,version=16.0.28803.344"
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix' succeeded. Hash: EDDD41F75E0FEB05CDB4E04A01309D2232C76409B162FE2D2AD4185CB19B4B33
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.7CF03847C0F13BD3A592\\Microsoft.VisualStudio.WebToolsExtensions.MSBuild.vsix' succeeded. Hash: EDDD41F75E0FEB05CDB4E04A01309D2232C76409B162FE2D2AD4185CB19B4B33
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.WebToolsExtensions.MSBuild,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Checking required machine state
[2acc:0018][2019-05-10T16:28:07] Running pre-check verification.
[2acc:0018][2019-05-10T16:28:07] END: Checking required machine state
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=en-US"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix' succeeded. Hash: F3F29FFC271E41702D25D141B9DF8E2E40A8518A9E4DD7F122A4A8F3FAD81F29
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix' succeeded. Hash: F3F29FFC271E41702D25D141B9DF8E2E40A8518A9E4DD7F122A4A8F3FAD81F29
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.BFBB677F47D58338B08C\\payload.vsix' succeeded. Hash: F3F29FFC271E41702D25D141B9DF8E2E40A8518A9E4DD7F122A4A8F3FAD81F29
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=en-US"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix' succeeded. Hash: 843F3A2DF61EC02CB6E8D99A7024B592E8EDB5431206A284F7A91BC088F21B9A
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix' succeeded. Hash: 843F3A2DF61EC02CB6E8D99A7024B592E8EDB5431206A284F7A91BC088F21B9A
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.DataCollectors.50BAEC448236A17D3708\\payload.vsix' succeeded. Hash: 843F3A2DF61EC02CB6E8D99A7024B592E8EDB5431206A284F7A91BC088F21B9A
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TestTools.DataCollectors,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core,version=16.0.28803.344"
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix' succeeded. Hash: E2F22E48124D62DF51EBCFAAD273C081F0AB4CAA1AD530C054D97C30F6FDA59E
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix' succeeded. Hash: E2F22E48124D62DF51EBCFAAD273C081F0AB4CAA1AD530C054D97C30F6FDA59E
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources.EAB0FE8261BD8782625A\\payload.vsix' succeeded. Hash: E2F22E48124D62DF51EBCFAAD273C081F0AB4CAA1AD530C054D97C30F6FDA59E
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.XamlDesigner.Executables,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix' succeeded. Hash: E1077CA7A608C6A00793E2905E49FFC63AD499944B5EC3A1FB4453B511737189
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix' succeeded. Hash: E1077CA7A608C6A00793E2905E49FFC63AD499944B5EC3A1FB4453B511737189
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.XamlDesigner.Executables.BB7099C44B4F4BA3C3E6\\payload.vsix' succeeded. Hash: E1077CA7A608C6A00793E2905E49FFC63AD499944B5EC3A1FB4453B511737189
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.XamlDesigner.Executables,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Mvc.Common,version=16.0.61315.64372"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix' succeeded. Hash: 459A551A2BC1CBC633AE67299F44E14ACA43C420C9D8EC286E28566C00B8F172
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix' succeeded. Hash: 459A551A2BC1CBC633AE67299F44E14ACA43C420C9D8EC286E28566C00B8F172
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Common.6D3C7E4A867CD1377F78\\Microsoft.VisualStudio.Web.Mvc.Common.vsix' succeeded. Hash: 459A551A2BC1CBC633AE67299F44E14ACA43C420C9D8EC286E28566C00B8F172
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Mvc.Common,version=16.0.61315.64372"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Mvc.Resources,version=16.0.61315.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix' succeeded. Hash: 5CDAAEB7C767D4E2067C489B1FD3F0F78686664F8E23F8B69E2EB11F912724C4
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix' succeeded. Hash: 5CDAAEB7C767D4E2067C489B1FD3F0F78686664F8E23F8B69E2EB11F912724C4
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.Resources.BCF52852567E13457715\\Microsoft.VisualStudio.Web.Mvc.Resources.vsix' succeeded. Hash: 5CDAAEB7C767D4E2067C489B1FD3F0F78686664F8E23F8B69E2EB11F912724C4
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Mvc.Resources,version=16.0.61315.64372,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.VisualStudio.Web.Mvc,version=16.0.61315.64372"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix' succeeded. Hash: 602066F0AA33FD6FBCE9C500AF87FE1E28700AA7D712F6FE23F739656014D879
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix' succeeded. Hash: 602066F0AA33FD6FBCE9C500AF87FE1E28700AA7D712F6FE23F739656014D879
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core.FABD54B74DB3D36762F8\\payload.vsix' succeeded. Hash: 602066F0AA33FD6FBCE9C500AF87FE1E28700AA7D712F6FE23F739656014D879
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.TestTools.TestPlatform.Legacy.Core,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.WebTools.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix' succeeded. Hash: 512491BEBBDE0F78FBD9F6790A784CDC590E336763F6FB95947C3957B4069652
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix' succeeded. Hash: D404FB6B35C9E8FD161E3E8754BD811CF912C08E479D54238B410C0F1CB487BD
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix' succeeded. Hash: 512491BEBBDE0F78FBD9F6790A784CDC590E336763F6FB95947C3957B4069652
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix' succeeded. Hash: D404FB6B35C9E8FD161E3E8754BD811CF912C08E479D54238B410C0F1CB487BD
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.Resources.8F628B094CD0DE4AC004\\Microsoft.WebTools.ItemTemplates.Resources.vsix' succeeded. Hash: D404FB6B35C9E8FD161E3E8754BD811CF912C08E479D54238B410C0F1CB487BD
[2acc:0017][2019-05-10T16:28:07] END: Downloading package "Microsoft.WebTools.ItemTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.WebTools.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix
[2acc:0018][2019-05-10T16:28:07] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.Mvc.9A99467BD14C65F8A857\\Microsoft.VisualStudio.Web.Mvc.vsix' succeeded. Hash: 512491BEBBDE0F78FBD9F6790A784CDC590E336763F6FB95947C3957B4069652
[2acc:0018][2019-05-10T16:28:07] END: Downloading package "Microsoft.VisualStudio.Web.Mvc,version=16.0.61315.64372"
[2acc:0018][2019-05-10T16:28:07] BEGIN: Downloading package "Microsoft.WebTools.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:07] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix' succeeded. Hash: E2D8388059F1975710B1F0EAF277CB39F6FE65C64FF03857E124C295F07D5158
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix' succeeded. Hash: E2D8388059F1975710B1F0EAF277CB39F6FE65C64FF03857E124C295F07D5158
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix
[2acc:0018][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix' succeeded. Hash: F5ED8CE0F6F5618AFD3AAC2F355D817AE58E679BC9BC7578E173C1F36E8E8DFC
[2acc:0018][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ItemTemplates.4DECE2D554CDF926EB97\\Microsoft.WebTools.ItemTemplates.vsix' succeeded. Hash: E2D8388059F1975710B1F0EAF277CB39F6FE65C64FF03857E124C295F07D5158
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.WebTools.ItemTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:08] Running pre-check verification.
[2acc:0017][2019-05-10T16:28:08] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.WebTools.ProjectTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix
[2acc:0018][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix' succeeded. Hash: F5ED8CE0F6F5618AFD3AAC2F355D817AE58E679BC9BC7578E173C1F36E8E8DFC
[2acc:0018][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix
[2acc:0018][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.Resources.30C1D20D5CB810735C07\\Microsoft.WebTools.ProjectTemplates.Resources.vsix' succeeded. Hash: F5ED8CE0F6F5618AFD3AAC2F355D817AE58E679BC9BC7578E173C1F36E8E8DFC
[2acc:0018][2019-05-10T16:28:08] END: Downloading package "Microsoft.WebTools.ProjectTemplates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0018][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.VisualStudio.Web.AzureFunctions,version=16.0.12313.64372"
[2acc:0018][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix' succeeded. Hash: 4A1E8DDCCA6CF1EA66937F893C55D7E0956F90D08CF541FAC90915191C7DF33A
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix' succeeded. Hash: 4A1E8DDCCA6CF1EA66937F893C55D7E0956F90D08CF541FAC90915191C7DF33A
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.ProjectTemplates.F1AA05B94CA18F50BCA7\\Microsoft.WebTools.ProjectTemplates.vsix' succeeded. Hash: 4A1E8DDCCA6CF1EA66937F893C55D7E0956F90D08CF541FAC90915191C7DF33A
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.WebTools.ProjectTemplates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.WebTools.Azure.Templates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix' succeeded. Hash: 3F5190FA102AF9445A2B296E6707EBC4202C30930D58A4D57810D8C61E65378C
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix' succeeded. Hash: 3F5190FA102AF9445A2B296E6707EBC4202C30930D58A4D57810D8C61E65378C
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.Resources.E25F475CB056D1723452\\Microsoft.WebTools.Azure.Templates.Resources.vsix' succeeded. Hash: 3F5190FA102AF9445A2B296E6707EBC4202C30930D58A4D57810D8C61E65378C
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.WebTools.Azure.Templates.Resources,version=16.0.1050.142,chip=neutral,language=fr-FR"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.WebTools.Azure.Templates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix' succeeded. Hash: EF01FA36C95A313078BEB1F9B8BD5DE75EB9AD2E0C4092FB38D10C0C469166B9
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix' succeeded. Hash: EF01FA36C95A313078BEB1F9B8BD5DE75EB9AD2E0C4092FB38D10C0C469166B9
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.WebTools.Azure.Templates.D673D788AA0AA48FD958\\Microsoft.WebTools.Azure.Templates.vsix' succeeded. Hash: EF01FA36C95A313078BEB1F9B8BD5DE75EB9AD2E0C4092FB38D10C0C469166B9
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.WebTools.Azure.Templates,version=16.0.1050.142"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.VisualStudio.ApplicationInsights,version=9.0.20409.1"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix' succeeded. Hash: 77AD5D4489449142558E264E9D655EB42739549332748BADAB7D984B327B5354
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix' succeeded. Hash: 77AD5D4489449142558E264E9D655EB42739549332748BADAB7D984B327B5354
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.7F6A00721983E2C019A4\\ApplicationInsightsToolsforVisualStudio.vsix' succeeded. Hash: 77AD5D4489449142558E264E9D655EB42739549332748BADAB7D984B327B5354
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.VisualStudio.ApplicationInsights,version=9.0.20409.1"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.VisualStudio.ApplicationInsights.Interfaces,version=16.0.20409.1"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix' succeeded. Hash: D73930F1F7E7E3840B616679E0F5C1C6E04A6A4B2E67C1BD4A047A9019739256
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix' succeeded. Hash: D73930F1F7E7E3840B616679E0F5C1C6E04A6A4B2E67C1BD4A047A9019739256
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix
[2acc:0017][2019-05-10T16:28:08] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.9EB522D518EE7A55B607\\Microsoft.VisualStudio.ApplicationInsights.Interfaces.vsix' succeeded. Hash: D73930F1F7E7E3840B616679E0F5C1C6E04A6A4B2E67C1BD4A047A9019739256
[2acc:0017][2019-05-10T16:28:08] END: Downloading package "Microsoft.VisualStudio.ApplicationInsights.Interfaces,version=16.0.20409.1"
[2acc:0017][2019-05-10T16:28:08] BEGIN: Downloading package "Microsoft.VisualStudio.Kubernetes.Tools.16.0,version=1.0.1904.2502"
[2acc:0017][2019-05-10T16:28:08] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix' succeeded. Hash: EBC2434B620F8C2FF6C51D498AFEB01C02227537FF52347AF805F9AB005680C6
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix' succeeded. Hash: EBC2434B620F8C2FF6C51D498AFEB01C02227537FF52347AF805F9AB005680C6
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Kubernetes.Tools.16.0.7E7D0B94A834D06C3E4A\\Microsoft.VisualStudio.Kubernetes.Tools.Vsix.vsix' succeeded. Hash: EBC2434B620F8C2FF6C51D498AFEB01C02227537FF52347AF805F9AB005680C6
[2acc:0017][2019-05-10T16:28:10] END: Downloading package "Microsoft.VisualStudio.Kubernetes.Tools.16.0,version=1.0.1904.2502"
[2acc:0017][2019-05-10T16:28:10] BEGIN: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=en-US"
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix' succeeded. Hash: 0E0E9B5E4169B836C77ABEB5CBDEE87016581F0EB6317BD35A0E05FD4B9A4DE8
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix' succeeded. Hash: 0E0E9B5E4169B836C77ABEB5CBDEE87016581F0EB6317BD35A0E05FD4B9A4DE8
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.39D228FC95C9B6DA8D54\\payload.vsix' succeeded. Hash: 0E0E9B5E4169B836C77ABEB5CBDEE87016581F0EB6317BD35A0E05FD4B9A4DE8
[2acc:0017][2019-05-10T16:28:10] END: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=en-US"
[2acc:0017][2019-05-10T16:28:10] BEGIN: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix' succeeded. Hash: D9F85874F7931A465153E93057481A108ABC819FF3B00CF4B71C2E35408C566A
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix' succeeded. Hash: D9F85874F7931A465153E93057481A108ABC819FF3B00CF4B71C2E35408C566A
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.Resources.77A85A4ACE6678478933\\payload.vsix' succeeded. Hash: D9F85874F7931A465153E93057481A108ABC819FF3B00CF4B71C2E35408C566A
[2acc:0017][2019-05-10T16:28:10] END: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:10] BEGIN: Downloading package "Microsoft.VisualStudio.VC.Ide.ProjectSystem,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix
[2acc:000e][2019-05-10T16:28:10] No restart manager available. Assuming no reboot required for instance state.
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix' succeeded. Hash: 58E9E32DEA96674E56C3CE6099B01567474FC08F97502F1D471AD1BC06849254
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix' succeeded. Hash: 58E9E32DEA96674E56C3CE6099B01567474FC08F97502F1D471AD1BC06849254
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix
[2acc:0017][2019-05-10T16:28:10] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.ProjectSystem.D86042C9D8B525CB6DBF\\payload.vsix' succeeded. Hash: 58E9E32DEA96674E56C3CE6099B01567474FC08F97502F1D471AD1BC06849254
[2acc:0017][2019-05-10T16:28:10] END: Downloading package "Microsoft.VisualStudio.VC.Ide.ProjectSystem,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:10] BEGIN: Checking required machine state
[2acc:0017][2019-05-10T16:28:10] Running pre-check verification.
[2acc:0017][2019-05-10T16:28:10] END: Checking required machine state
[2acc:0017][2019-05-10T16:28:10] BEGIN: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:10] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix' succeeded. Hash: 0D59137B1B10CA68093564F834896087485FADA91F95926BAFD2A1E868E8817B
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix' succeeded. Hash: 0D59137B1B10CA68093564F834896087485FADA91F95926BAFD2A1E868E8817B
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.Ide.LanguageService.21AC93F9DBB2D3283CB2\\payload.vsix' succeeded. Hash: 0D59137B1B10CA68093564F834896087485FADA91F95926BAFD2A1E868E8817B
[2acc:0017][2019-05-10T16:28:11] END: Downloading package "Microsoft.VisualStudio.VC.Ide.LanguageService,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:11] BEGIN: Downloading package "Microsoft.VisualStudio.Blend,version=16.0.28803.352"
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix' succeeded. Hash: 189BDF2D3D2F3D3F6F90BF0C24C56B5FF1D64FBAEF6F67DB7DE5D9343846CF38
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix' succeeded. Hash: 189BDF2D3D2F3D3F6F90BF0C24C56B5FF1D64FBAEF6F67DB7DE5D9343846CF38
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Blend.996BA9C10109CC29B69C\\payload.vsix' succeeded. Hash: 189BDF2D3D2F3D3F6F90BF0C24C56B5FF1D64FBAEF6F67DB7DE5D9343846CF38
[2acc:0017][2019-05-10T16:28:11] END: Downloading package "Microsoft.VisualStudio.Blend,version=16.0.28803.352"
[2acc:0017][2019-05-10T16:28:11] BEGIN: Downloading package "Microsoft.VisualStudio.VC.CMake.Project.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix' succeeded. Hash: 77162074FEC248AA5C60886C1409E67BD8F160528CF0E42FE20C8309B18BFA3D
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix' succeeded. Hash: 77162074FEC248AA5C60886C1409E67BD8F160528CF0E42FE20C8309B18BFA3D
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.Resources.063637B584F3754DD05E\\payload.vsix' succeeded. Hash: 77162074FEC248AA5C60886C1409E67BD8F160528CF0E42FE20C8309B18BFA3D
[2acc:0017][2019-05-10T16:28:11] END: Downloading package "Microsoft.VisualStudio.VC.CMake.Project.Resources,version=16.0.28803.344,language=fr-FR"
[2acc:0017][2019-05-10T16:28:11] BEGIN: Downloading package "Microsoft.VisualStudio.VC.CMake.Project,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix' succeeded. Hash: B733B87FC8F4BCB4E322A70CD288AA3A7717C6860F65468D9674B3F14B31BBF1
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix' succeeded. Hash: B733B87FC8F4BCB4E322A70CD288AA3A7717C6860F65468D9674B3F14B31BBF1
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.VC.CMake.Project.89EA24E6938AF8606F3D\\payload.vsix' succeeded. Hash: B733B87FC8F4BCB4E322A70CD288AA3A7717C6860F65468D9674B3F14B31BBF1
[2acc:0017][2019-05-10T16:28:11] END: Downloading package "Microsoft.VisualStudio.VC.CMake.Project,version=16.0.28803.344"
[2acc:0017][2019-05-10T16:28:11] BEGIN: Downloading package "Microsoft.VisualStudio.Windows.Tools.Executables,version=16.0.28803.352"
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix' succeeded. Hash: 43A06FE11B678D22F825A5965581DDD503EE1981D9553FD28AAB58F57047D6EC
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix' succeeded. Hash: 43A06FE11B678D22F825A5965581DDD503EE1981D9553FD28AAB58F57047D6EC
[2acc:0017][2019-05-10T16:28:11] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix
[2acc:0017][2019-05-10T16:28:11] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Windows.Tools.Executables.C2D56B211B50F2391D6B\\payload.vsix' succeeded. Hash: 43A06FE11B678D22F825A5965581DDD503EE1981D9553FD28AAB58F57047D6EC
[2acc:0017][2019-05-10T16:28:11] END: Downloading package "Microsoft.VisualStudio.Windows.Tools.Executables,version=16.0.28803.352"
[2acc:0018][2019-05-10T16:28:12] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix' succeeded. Hash: D5BE571397FEA4E4A619A420AD235AEE58E70F46DE80315B7F04B1FF90F73A48
[2acc:0018][2019-05-10T16:28:12] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix
[2acc:0018][2019-05-10T16:28:12] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix' succeeded. Hash: D5BE571397FEA4E4A619A420AD235AEE58E70F46DE80315B7F04B1FF90F73A48
[2acc:0018][2019-05-10T16:28:12] Checking SHA256 for path: C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix
[2acc:0018][2019-05-10T16:28:13] SHA256 verification for 'C:\\Users\\s641376\\AppData\\Local\\Temp\\amfxpsty\\Microsoft.VisualStudio.Web.AzureFunctions.77A1B68FBB85A3A37501\\Microsoft.WebTools.Azure.Functions.Vsix.vsix' succeeded. Hash: D5BE571397FEA4E4A619A420AD235AEE58E70F46DE80315B7F04B1FF90F73A48
[2acc:0018][2019-05-10T16:28:13] END: Downloading package "Microsoft.VisualStudio.Web.AzureFunctions,version=16.0.12313.64372"
[2acc:0001][2019-05-10T16:28:13] END: Waiting for other activities
[2acc:0001][2019-05-10T16:28:13] BEGIN: UpdateDownloadedSizes
[2acc:0001][2019-05-10T16:28:13] END: UpdateDownloadedSizes
[2acc:0001][2019-05-10T16:28:13] BEGIN: Generate Report
[2acc:0001][2019-05-10T16:28:13] END: Generate Report
[2acc:0001][2019-05-10T16:28:13] Completed install operation
[2acc:0001][2019-05-10T16:28:13] Environment variable: ALLUSERSPROFILE, value: C:\\ProgramData
[2acc:0001][2019-05-10T16:28:13] Environment variable: APPDATA, value: C:\\Users\\s641376\\AppData\\Roaming
[2acc:0001][2019-05-10T16:28:13] Environment variable: Branchcache, value: Standard
[2acc:0001][2019-05-10T16:28:13] Environment variable: CommonProgramFiles, value: C:\\Program Files\\Common Files
[2acc:0001][2019-05-10T16:28:13] Environment variable: CommonProgramFiles(x86), value: C:\\Program Files (x86)\\Common Files
[2acc:0001][2019-05-10T16:28:13] Environment variable: CommonProgramW6432, value: C:\\Program Files\\Common Files
[2acc:0001][2019-05-10T16:28:13] Environment variable: COMPUTERNAME, value: PO712546
[2acc:0001][2019-05-10T16:28:13] Environment variable: ComSpec, value: C:\\Windows\\system32\\cmd.exe
[2acc:0001][2019-05-10T16:28:13] Environment variable: FPS_BROWSER_APP_PROFILE_STRING, value: Internet Explorer
[2acc:0001][2019-05-10T16:28:13] Environment variable: FPS_BROWSER_USER_PROFILE_STRING, value: Default
[2acc:0001][2019-05-10T16:28:13] Environment variable: HOMEDRIVE, value: C:
[2acc:0001][2019-05-10T16:28:13] Environment variable: HOMEPATH, value: \\Users\\s641376
[2acc:0001][2019-05-10T16:28:13] Environment variable: Java_Home, value: C:\\Program Files (x86)\\java\\jre8
[2acc:0001][2019-05-10T16:28:13] Environment variable: LOCALAPPDATA, value: C:\\Users\\s641376\\AppData\\Local
[2acc:0001][2019-05-10T16:28:13] Environment variable: LOGONSERVER, value: \\\\PRINTSIEGDC5
[2acc:0001][2019-05-10T16:28:13] Environment variable: NewEnvironment3, value: bin\\
[2acc:0001][2019-05-10T16:28:13] Environment variable: NUMBER_OF_PROCESSORS, value: 8
[2acc:0001][2019-05-10T16:28:13] Environment variable: NVM_HOME, value: C:\\nvm
[2acc:0001][2019-05-10T16:28:13] Environment variable: NVM_SYMLINK, value: C:\\nodejs
[2acc:0001][2019-05-10T16:28:13] Environment variable: OneDrive, value: C:\\Users\\s641376\\Onedrive - AXA
[2acc:0001][2019-05-10T16:28:13] Environment variable: OnedriveAXA, value: C:\\Users\\s641376\\Onedrive - AXA
[2acc:0001][2019-05-10T16:28:13] Environment variable: OneDriveCommercial, value: C:\\Users\\s641376\\OneDrive - AXA
[2acc:0001][2019-05-10T16:28:13] Environment variable: OS, value: Windows_NT
[2acc:0001][2019-05-10T16:28:13] Environment variable: Path, value: C:\\ProgramData\\Python\\Scripts\\;C:\\ProgramData\\Python\\;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\java\\jre8\\bin;C:\\Program Files (x86)\\Wave Systems Corp\\bin\\;C:\\Program Files\\Wave Systems Corp\\Wave TSS\\bin\\;C:\\Program Files\\Git\\cmd;C:\\nvm;C:\\nodejs;C:\\Program Files\\dotnet\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\ProgramData\\Python\\Scripts;C:\\Program Files\\Microsoft\\Web Platform Installer\\;C:\\Program Files (x86)\\dotnet\\;C:\\Users\\s641376\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Program Files (x86)\\Microsoft VS Code\\bin
[2acc:0001][2019-05-10T16:28:13] Environment variable: PATHEXT, value: .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW
[2acc:0001][2019-05-10T16:28:13] Environment variable: PROCESSOR_ARCHITECTURE, value: AMD64
[2acc:0001][2019-05-10T16:28:13] Environment variable: PROCESSOR_IDENTIFIER, value: Intel64 Family 6 Model 142 Stepping 10, GenuineIntel
[2acc:0001][2019-05-10T16:28:13] Environment variable: PROCESSOR_LEVEL, value: 6
[2acc:0001][2019-05-10T16:28:13] Environment variable: PROCESSOR_REVISION, value: 8e0a
[2acc:0001][2019-05-10T16:28:13] Environment variable: ProgramData, value: C:\\ProgramData
[2acc:0001][2019-05-10T16:28:13] Environment variable: ProgramFiles, value: C:\\Program Files
[2acc:0001][2019-05-10T16:28:13] Environment variable: ProgramFiles(x86), value: C:\\Program Files (x86)
[2acc:0001][2019-05-10T16:28:13] Environment variable: ProgramW6432, value: C:\\Program Files
[2acc:0001][2019-05-10T16:28:13] Environment variable: PSModulePath, value: %ProgramFiles%\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft Azure Information Protection\\Powershell
[2acc:0001][2019-05-10T16:28:13] Environment variable: PUBLIC, value: C:\\Users\\Public
[2acc:0001][2019-05-10T16:28:13] Environment variable: STATIONPROFILE, value: STD
[2acc:0001][2019-05-10T16:28:13] Environment variable: STATIONSOCIETY, value: Axa-France-Administratif
[2acc:0001][2019-05-10T16:28:13] Environment variable: STATIONTYPE, value: LAPTOP
[2acc:0001][2019-05-10T16:28:13] Environment variable: SystemDrive, value: C:
[2acc:0001][2019-05-10T16:28:13] Environment variable: SystemRoot, value: C:\\Windows
[2acc:0001][2019-05-10T16:28:13] Environment variable: TEMP, value: C:\\Users\\s641376\\AppData\\Local\\Temp
[2acc:0001][2019-05-10T16:28:13] Environment variable: TMP, value: C:\\Users\\s641376\\AppData\\Local\\Temp
[2acc:0001][2019-05-10T16:28:13] Environment variable: UATDATA, value: C:\\Windows\\CCM\\UATData\\D9F8C395-CAB8-491d-B8AC-179A1FE1BE77
[2acc:0001][2019-05-10T16:28:13] Environment variable: USERDNSDOMAIN, value: SIEGE.AXA-FR.INTRAXA
[2acc:0001][2019-05-10T16:28:13] Environment variable: USERDOMAIN, value: SIEGE
[2acc:0001][2019-05-10T16:28:13] Environment variable: USERDOMAIN_ROAMINGPROFILE, value: SIEGE
[2acc:0001][2019-05-10T16:28:13] Environment variable: USERNAME, value: S641376
[2acc:0001][2019-05-10T16:28:13] Environment variable: USERPROFILE, value: C:\\Users\\s641376
[2acc:0001][2019-05-10T16:28:13] Environment variable: windir, value: C:\\Windows
[2acc:0001][2019-05-10T16:28:13] Policy setting: AutoUpdateDisabled, value: False
[2acc:0001][2019-05-10T16:28:13] Policy setting: BackgroundDownloadDisabled, value: False
[2acc:0001][2019-05-10T16:28:13] Policy setting: CachePath, value: C:\\ProgramData\\Microsoft\\VisualStudio\\Packages
[2acc:0001][2019-05-10T16:28:13] Policy setting: ChannelUpdateDisabled, value: False
[2acc:0001][2019-05-10T16:28:13] Policy setting: CompatibilityInstallationPath, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\Compatibility
[2acc:0001][2019-05-10T16:28:13] Policy setting: ConcurrentDownloads, value: 2
[2acc:0001][2019-05-10T16:28:13] Policy setting: DiagnosticMode, value: False
[2acc:0001][2019-05-10T16:28:13] No restart manager available. Assuming no reboot required for instance state.
[2acc:0001][2019-05-10T16:28:13] Policy setting: IsCachePathSettable, value: False
[2acc:0001][2019-05-10T16:28:13] Policy setting: KeepDownloadedPayloads, value: True
[2acc:0001][2019-05-10T16:28:13] Policy setting: SharedInstallationPath, value: C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared
[2acc:0001][2019-05-10T16:28:13] Completed install
[2acc:0001][2019-05-10T16:28:13] System Measurement for 'InstallOperation': 'System Drive Delta (Before - After)': -64618496
[2acc:0001][2019-05-10T16:28:13] System Measurement for 'InstallOperation': 'System Drive Space (After)': 408544518144
[2acc:0001][2019-05-10T16:28:13] Downloading updates finished for 'VisualStudio/16.0.2+28803.202  Microsoft.VisualStudio.Product.Enterprise,version=16.0.28803.202,type=Product'
[2acc:0001][2019-05-10T16:28:13] END: Perform background downloads
[2acc:0001][2019-05-10T16:28:13] END: Background Download
[2acc:000f][2019-05-10T16:28:13] No restart manager available. Assuming no reboot required for instance state.`

export {logs};