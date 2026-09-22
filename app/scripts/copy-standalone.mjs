import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const appDir = resolve(scriptDir, '..')
const workspaceDir = resolve(appDir, '..')
const source = resolve(appDir, 'dist', 'index.html')
const target = resolve(workspaceDir, 'index.html')

mkdirSync(dirname(target), { recursive: true })
copyFileSync(source, target)
console.log(`Standalone index copied to ${target}`)
