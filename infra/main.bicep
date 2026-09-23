targetScope = 'subscription'

@description('Azure region for the resource group and Static Web App.')
param location string = 'eastasia'

@description('Deployment resource group name from the approved plan.')
param resourceGroupName string = 'rg-science-study-dev-ee47'

@description('Static Web App name from the approved plan.')
param staticWebAppName string = 'swa-science-study-dev-ee47'

@description('Globally unique Cosmos DB account name for shared accounts and learning records.')
param cosmosAccountName string = 'cosmos-science-study-ee47'

@description('Azure Functions app name for shared authentication and sync API.')
param functionAppName string = 'func-science-study-ee47'

@description('Storage account name for the Flex Consumption Functions app.')
param functionStorageAccountName string = 'stsciencestudyf47'

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

module cosmosModule './cosmos.bicep' = {
  name: 'cosmosDatabaseDeployment'
  scope: resourceGroup
  params: {
    cosmosAccountName: cosmosAccountName
    deployedBy: deployedBy
  }
}

module functionModule './functionapp.bicep' = {
  name: 'sharedApiDeployment'
  scope: resourceGroup
  params: {
    functionAppName: functionAppName
    storageAccountName: functionStorageAccountName
    cosmosEndpoint: cosmosModule.outputs.endpoint
    cosmosKey: cosmosModule.outputs.primaryKey
    deployedBy: deployedBy
  }
}

output resourceGroupName string = resourceGroup.name
output staticWebAppName string = staticWebAppModule.outputs.staticWebAppName
output defaultHostname string = staticWebAppModule.outputs.defaultHostname
output cosmosAccountName string = cosmosModule.outputs.accountName
output cosmosEndpoint string = cosmosModule.outputs.endpoint
output functionHostName string = functionModule.outputs.functionHostName
