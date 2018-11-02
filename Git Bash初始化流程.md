#### Git 初始化流程以及命令

###### 新电脑需要生成SSH KEY并在GIT账户下登记
1. $ ssh-keygen -t ras -C "yourEmail"
2. 选择保存key文件的本地地址和以及SSH的密码
3. 去保存地址打开id.rsa.pub也就是公钥，复制后在git的账户设置下SSH and GPG keys下添加SSH keys
4. 用 $ ssh -T git@github.com 验证是否成功

###### 设置自身的账户与邮箱，以便在提交时辨认
1. $ git config --global user.name Feena
2. $ git config --global user.email email

###### 添加远程服务器
1. git remote add origin git@github.com:xxxxxxxxx

###### 初始化、克隆和提交
1. 用git init在本地初始化一个仓库，或用clone git@github.com:xxxxxx克隆一个远程仓库
2. $ git pull --rebase orgin master,首先获取下远程仓库的现有版本，以防在提交时本地版本没有github自动生成的readme文件从而导致失败
3. $ git add .
4. $ git commit -m 'mess'，用git commit --ano 来对之前的提交进行附加信息的更改
5. $ git push origin master
