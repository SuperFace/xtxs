xtxs
=====================

##### xtxs是一套前端开发工具, 其中包含了

* 上传开发环境静态服务器
* base64 静态图片文件

## 如何安装 ##

#### 安装前提

##### nodejs & npm

* nodejs版本需大于 6.9.0
* npm版本需要大于 4.1.0

#### 安装

    npm install xtxs -g
    本地添加hosts：10.0.0.238 storageupload.xuetangx.com
    其中 10.0.0.238 是可用的上传服务，可以变，域名storageupload.xuetangx.com不可变

### 使用

    xtxs {命令名}


### 基本命令

* upload: '上传文件到storage'
* base64: 'base64图片'

### upload命令有关参数说明

```bash
# 新增了 --out 参数，即将输出结果存储到当前目录的output.log文件中。
xtxs upload <filename|filePath> <uploadDir> [option,'--no-md5'] [option,'--out']
```
