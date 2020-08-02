import { symlinkDir } from 'aria-fs'

(async function() {
  await symlinkDir(
    './node_modules', 
    './libs/vite-compat/node_modules'
  )
})()