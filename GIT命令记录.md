### 常用GIT命令记录

##### git pull --rebase origin master

**适用情况:** 本地代码有更新，用户做了add以及commit操作，在push提交操作时出错，"failed to push some refs to xxx"，意味着远程代码库的版本优先于本地代码，需要先更新版本再提交

**代码作用:** 先取消本地的commit记录，并且把他们临时保存为补丁(patch)(这些补丁放到”.git/rebase”目录中)，之后同步远程库到本地，最后合并补丁到本地库之中。作用上相当于更新了来自远程的新版本并且把本地的新代码重新commit到待提交状态，之后就只要push提交就可以完成了

**说明:** --rebase的作用是取消掉本地库中刚刚的commit，并把他们接到更新后的版本库之中。在rebase的过程中，有时也会有conflict，这时Git会停止rebase并让用户去解决冲突，解决完冲突后，用git add命令去更新这些内容，然后不用执行git-commit,直接执行git rebase --continue,这样git会继续apply余下的补丁。

在任何时候，都可以用git rebase --abort参数来终止rebase的行动，并且mywork分支会回到rebase开始前的状态

与git pull不同的是，rebase会让项目的提交树回归线性，而git pull则会产生一个菱形(两个分支取自同一个主线，其中一个分支提交时发现另一个已经更新，于是用pull先拉取了另一个的更新之后再提交，这导致他的这次提交在提交树上显示为他的分支与另一个分支的合并，就有两条线，形成了一个菱形)，可读性差

##### git add -A

**区别:** <br>
`git add -A` 保存所有的修改<br>
`git add .` 保存新的添加和修改，但是不包括删除<br>
`git add -u` 保存修改和删除，但是不包括新建文件

