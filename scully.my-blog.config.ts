import { ScullyConfig } from "@scullyio/scully";

export const config : ScullyConfig={
  projectName:'my-blog',
  projectRoot: './src',
  outDir:'./dist/static',
  routes:{
    '/posts/:id':{
      type: 'contentFolder',
      id:{
        folder: './mdfiles'
      }
    }
  }
}
