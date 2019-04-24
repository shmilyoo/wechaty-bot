# wechaty-bot
a wechat bot to help manage groups and do something else with wechaty

## 各类命令和响应
### 群里（命令格式为 ”@botName  命令“，中间有空格，必须@机器人 开头 ）
| 命令                            | 需要权限         | 作用                          |
| ------------------------------- | ---------------- | ----------------------------- |
| /? \| /help                     | any              | 查看帮助                      |
| /ban A                          | 管理员\|群管理员 | 将群中的成员A踢掉             |
| /stat member                    | any              | 统计总人数，男女人数          |
| /stat rank (today\|week\|month) | any              | 统计本日、7天、30天内发言情况 |
| content                         | any              | 和机器人对话，只能回答        |
|                                 |                  |                               |

### 个人对话

| 命令                     | 需要权限         | 作用                                |      |      |
| ------------------------ | ---------------- | ----------------------------------- | ---- | ---- |
| /? \| /help              | any              | 查看帮助                            |      |      |
| /group list              | any              | 列出所有有管理权限的群              |      |      |
| /group join (1\|2\|3...) | any              | 请求加入指定群，bot发送邀请链接     |      |      |
| /reload-config           | 管理员           | 重新从config.json读取配置进入内存   |      |      |
| /save-config             | 管理员           | 将内存中的config写入config.json文件 |      |      |
| /talk A content          | 管理员           | 发送content给A                      |      |      |
| /ban group1 A            | 管理员\|群管理员 | 将group1中的成员A踢掉               |      |      |



## config.json 配置

机器人的配置文件，启动时读入内存，管理人员可以通过命令修改，重新加载等

| 字段   | 类型                                                         | 含义                                                 |
| ------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| admin  | `string[]`                                                   | 管理员id的列表，其中的微信号拥有管理机器人的最大权限 |
| groups | ```{[index:number]:{name:string,isAdmin:boolean,stat:boolean,admin:string[]}}``` | 所在的群组：                                         |
|        |                                                              |                                                      |

