const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '905781330@qq.com', // 发件人邮箱账号
            pass: 'wsarnoebnowhbdab' // 发件人邮箱的授权码
        }
    });

    // 配置收件人信息
    let acceptInfo = {
        code: '1234',  // 验证码
        expire: '2020-04-15', // 验证码过期时间
        email: '905781330@qq.com', // 收件人邮箱
        user: 'simpleSky12' // 收件人用户名
    };

    // 重置密码的 url 地址
    let url = 'http://www.imooc.com';

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"认证邮件" <905781330@qq.com>', // 发件人
        // to: "bar@example.com, baz@example.com", // list of receivers
        to: acceptInfo.email, // 收件人
        subject: acceptInfo.user === '' ? '密码找回的验证码' : `你好开发者：${acceptInfo.user}, 这是密码找回的验证码`, // Subject line
        text: `您的密码找回的验证码为${acceptInfo.code}, 验证码的过期时间: ${acceptInfo.expire}`, // plain text body
        html: `
         <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
        <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">Imooc社区——欢迎来到官方社区</div>
        <div style="padding: 25px">
          <div>您好，${acceptInfo.user}童鞋，重置链接有效时间30分钟，请在${acceptInfo.expire}之前重置您的密码：</div>
          <a href='${url}' style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">立即重置密码</a>
          <div style="padding: 5px; background: #f2f2f2;">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>
        </div>
        <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">系统邮件，请勿直接回复</div>
    </div>
        ` // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
