const express = require('express')
const app = express()
const port = 3000
var shell = require('shelljs');

app.use('/', express.static('dist/roberto'))


app.get('/deployISP', function (req, res) {

  if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }
  if(shell.exec('scripts/deploy-ISP.sh').code !== 0){
    shell.exit(1);
    return res.status(400).send({
      message: 'Error!'
    });
  }else{
    shell.exit(0);
    return res.send('Success');
  }

})

app.get('/deployASG', function (req, res) {
  if(shell.exec('scripts/deploy-ASG.sh').code !== 0){
    shell.exit(1);
    return res.status(400).send({
      message: 'Error!'
    });
  }else{
    shell.exit(0);
    return res.send('Success');
  }
})

app.get('/packageISP', function (req, res) {
  if(shell.exec('scripts/isp-uat-packager.sh').code !== 0){
    shell.exit(1);
    return res.status(400).send({
      message: 'Error!'
    });
  }else{
    shell.exit(0);
    return res.send('Success');
  }
})

app.get('/packageASG', function (req, res) {
  if(shell.exec('scripts/asg-uat-packager.sh').code !== 0){
    shell.exit(1);
    return res.status(400).send({
      message: 'Error!'
    });
  }else{
    shell.exit(0);
    return res.send('Success');
  }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
