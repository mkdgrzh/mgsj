const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 配置邮件发送器
const transporter = nodemailer.createTransport({
  service: 'gmail', // 例如使用Gmail，你也可以选择其他邮件服务商
  auth: {
    user: 'E2160@e365.fun', // 你的邮箱账号
    pass: 'QP=11335579' // 邮箱密码或生成的应用密码
  }
});

// 设置你的前端静态文件目录
app.use(express.static('../otherhtml/fkbc.html')); 

// 邮件发送路由
app.post('/sendmail', (req, res) => {
  const { email, subject, message } = req.body;
  
  const mailOptions = {
    from: 'E2160@e365.fun',
    to: email, // 接收者邮箱，可以是用户填写的邮箱
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send('Email sent: ' + info.response);
    }
  });
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 新增/feedback路由处理POST请求
app.post('/feedback', (req, res) => {
  const feedbackText = req.body.feedback;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'E2160@e365.fun', // 将邮件发往你希望接收反馈的邮箱
    subject: '新的反馈报错',
    text: feedbackText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('发送邮件时出错: ' + error.message);
    }
    res.status(200).send('反馈已成功发送!');
  });
});