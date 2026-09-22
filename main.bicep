targetScope = 'subscription'

@description('Azure region for the resource group and Static Web App.')
param location string = 'eastasia'

@description('Deployment resource group name from the approved plan.')
param resourceGroupName string = 'rg-science-study-dev-ee47'

@description('Static Web App name from the approved plan.')
param staticWebAppName string = 'swa-science-study-dev-ee47'

@description('Person or automation identity that initiated the deployment.')
param deployedBy string = '김유준'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: resourceGroupName
  location: location
  tags: {
    appOnboardSkill: 'true'
    deployedBy: deployedBy
    environment: 'dev'
  }
}

module staticWebAppModule './staticwebapp.bicep' = {
  name: 'staticWebAppDeployment'
  scope: resourceGroup
  params: {
    staticWebAppName: staticWebAppName
    deployedBy: deployedBy
  }
}

output resourceGroupName string = resourceGroup.name
output staticWebAppName string = staticWebAppModule.outputs.staticWebAppName
output defaultHostname string = staticWebAppModule.outputs.defaultHostname
