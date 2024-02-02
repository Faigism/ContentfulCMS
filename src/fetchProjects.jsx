import { createClient } from 'contentful'

const client = createClient({
  space: 'dqpmhafetpug',
  environment: 'master',
  accessToken: 'V6v7UQ1Yd38trxq9H_FIk2rITsKa4i-fkBre1tRZXrI',
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
