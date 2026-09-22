targetScope = 'resourceGroup'

@description('Static Web App name from the approved plan.')
param staticWebAppName string

@description('Person or automation identity that initiated the deployment.')
param deployedBy string

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: resourceGroup().location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    stagingEnvironmentPolicy: 'Enabled'
  }
  tags: {
    appOnboardSkill: 'true'
    deployedBy: deployedBy
    environment: 'dev'
  }
}

output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname
