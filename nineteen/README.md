# 斗米兼职C端APP2.0页面

## 改版说明
* 因斗米APP将进行全新改版，为避免与旧版相关影响，顾在此新建项目目录，作为作为全新进行开展。

* 恰逢党的十九大召开，响应号召，将本次项目命名为`nineteen`，希望斗米APP也能进入一个全新的时代！

## 目录结构

    nineteen
    |-- html  //存放所有html文件
    |-- imgs  //存放所有image文件
    |-- sass  //存放所有sass文件
    |-- style //存放所有sass编译出来的css文件


## 改版要点
+ css命名规范：公共模块采用全新的命名前缀`dm-`替代原来的`com-`和`mod-`，使DMUI的规范更加统一。
+ 表现和结构彻底分开。剥离了之前一些原子类的className，尽量在具体页面样式文件中对该类公共模块的样式进行定义，使HTML页面结构更加清晰、简洁，更具有可扩展和可维护性。

## 关于组件
+ 组件都有明确的功能和意义，创建组件时要按照组件规范执行；
+ 保证组件的独立性，尽量不依赖和减少依赖其他组件；
+ 保证组件功能完整，结构简单，命名和语义要明确，易于理解和维护；
+ 必要时，组件要有说明文档和demo示例，方便每个人使用。

## 特殊约定
* hide
* show
* clearfix
* disabled
* active
* touch
* visited
* extend
* vertical

## 注意事项
* 关于图片命名：现在是过渡阶段，整个静态文件包括有三套样式，但在服务上图片存放在同一个目录。所以不管是不同版本还是不同目录，都不允许有同名的图片文件，保持图片文件名称的唯一性。
* 关于图片文件：尽量减少每个html文件中图片的引用数量，对于公共图片，可以采用iconfont或者base-64方式来处理，减少文件请求数。
* 关于样式文件：没有页面只有一个同名样式文件引用，由同名的sass文件编译产生，所以如果有样式文件需要修改，只能修改与该文件对应的sass文件，严禁直接修改css文件。
* 关于sass文件编译：目前是通过compass方式进行编译的，具体配置如`config.rb`；在开发阶段可以把`sourcemap`打开，方便调试，提交代码时记得设置为false。代码最终打包压缩由服务端控制，所以代码输出格式为`expanded` ，方便对比代码差异。

## 文件列表

    nineteen/html/
    |-- index.html                       //首页
    |-- list.html                        //职位列表页（待更新模版）
    |-- detail.html                      //职位详情-普通职位页（待更新模版）
    |-- detail_mingqi.html               //职位详情-名企模版页（待更新模版）
    |-- detail_shiwan.html               //职位详情-APP试玩模版页（待更新模版）
    |-- detail_chaojianzhi.html          //职位详情-潮兼职模版页（待更新模版）
    |-- detail_status.html               //职位详情页-各种状态（待更新模版）
    |-- detail_address.html              //职位详情页-全部工作地点（待更新模版）
    |-- detail_map.html                  //职位详情页-工作地点导航（待更新模版）
    |-- company.html                     //公司详情页（待更新模版）
    |-- apply.html                       //极速报名页（待更新模版）
    |-- deliver.html                     //职位报名成功页
    |-- search_list.html                 //搜索结果页
    |-- message.html                     //消息页（待更新模版）
    |-- login.html                       //验证码登录页（待更新模版）
    |-- login_password.html              //密码登录页（待更新模版）
    |-- register.html                    //账号注册页（待更新模版）
    |-- password.html                    //密码重置页（待更新模版）
    |-- account.html                     //账号验证页（待更新模版）
    |-- personal_index.html              //个人中心-首页
    |-- personal_option.html             //个人中心-设置页（待更新模版）
    |-- resume_index                     //简历-首页
    |-- resume_info.html                 //简历-基本信息页
    |-- resume_preference.html           //简历-我的偏好页
    |-- resume_addition.html             //简历-详细信息页
    |-- resume_education.html            //简历-教育经历页
    |-- order_list.html                  //我的兼职-报名列表页
    |-- order_detail.html                //我的兼职-报名详情页
    |-- wallet.html                      //我的钱包页（待更新模版）
    |-- wallet_record.html               //我的钱包页-收支记录（待更新模版）
    |-- withdraw.html                    //提现申请页（待更新模版）
    |-- withdraw_deliver.html            //提现申请成功页（待更新模版）
    |-- withdraw_account.html            //提现申请-账号页（待更新模版）
    |-- withdraw_binding.html            //提现申请-账号绑定页（待更新模版）
    |-- feedback_entry.html              //反馈投诉-入口选择页（待更新模版）
    |-- feedback.html                    //反馈投诉-意见反馈页（待更新模版）
    |-- complaint_order.html             //反馈投诉-职位投诉选择页（待更新模版）
    |-- complaint.html                   //反馈投诉-职位投诉页（待更新模版）
    |-- blacklist_index.html             //斗米慧眼-黑名单入口页
    |-- blacklist.html                   //斗米慧眼-黑名单列表页
    |-- taobaoke_index.html              //淘宝客-首页（待更新模版）
    |-- taobaoke_search.html             //淘宝客-搜索页（待更新模版）
    |-- taobaoke_detail.html             //淘宝客-详情页（待更新模版）
    |-- taobaoke_share.html              //淘宝客-分享页（待更新模版）
    |-- taobaoke_income.html             //淘宝客-收入页（待更新模版）
    |-- taobaoke_order.html              //淘宝客-任务明细页（待更新模版）