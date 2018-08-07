#开发环境搭建

    本工程是基于React Native开发的Android/iOS APP，在开发之前需要在本地机器上搭建React Native, Android, 
    iOS开发工具链，其中用到的工具链如下：
    
    npm (6.2.0)
    react(16.4.1)
    react(0.56.0)
    react-native-cli
    
    Android Studio
    XCode
    
    具体的安装步骤和方法，参见：https://facebook.github.io/react-native/docs/getting-started

#代码调试

    将本工程文件拷贝到本地文件系统对应某文件夹（eg: Fa), 通过系统命令行工具进入该工程文件对应的根目录，然后执行
    以下命令：
    
    1：npm install
    2：react-native run-ios      #调试iOS版本
    3：react-native run-android  #调试Android版本
    
    如果在“开发环境搭建”步骤正确安装搭建了开发环境，在运行2/3命令之后，应该就能成功启动对应模拟器并进入调试状态。
    
    更多调试信息，可参考：https://facebook.github.io/react-native/docs/debugging
    
    
#发布
 
     参考：https://facebook.github.io/react-native/docs/signed-apk-android

#代码结构说明
    mockup
        android: 该文件夹放置了在Build Android APP过程中的一些配置文件，根据React Native 业务代码生成的
                 Native Code, 以及最后生成的Build文件（APK）；
        iOS: 该文件夹内包含了Build iOS APP过程中的一些配置文件、Native Code和Build文件；
        app: 整个APP的业务代码都放置在该文件夹中
            common: 该文件夹放置了系统常用的一些资源文件（images..），以及共用样式文件；
            components: UI中抽取的部分公用组件；
            container: 该文件夹对应了APP中的每个页面Component;
        App.js: APP路由配置文件;
        index.js: APP业务逻辑入口文件；
        package.json: npm包管理器配置文件；
        package-lock.json: npm包管理器配置文件；

#依赖的第三方库

    1：Ant Design Mobile RN of React (MIT)
        参考： https://rn.mobile.ant.design/docs/react/introduce-cn
        
#如何添加字体
    1：将字体文件拷贝到 ./assets/fonts/ 文件夹下；
    2：更新package.json的rnpm节点信息；
    3：运行React-native link命令；
    4：更新iOS平台的reference:
        在Info.plist文件中更新  --注明：一般会自动生成该信息。
            <key>UIAppFonts</key>
            <array>
                <string>example.ttf</string>
            </array>
    5:将fonts中的字体文件拷贝到 ./android/app/src/main/assets/fonts/ 下；