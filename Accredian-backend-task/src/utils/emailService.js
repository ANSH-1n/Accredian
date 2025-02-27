const nodemailer = require('nodemailer');

// Create transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const sendReferralEmail = async (referralData) => {
  try {
    // Email template for the referee (person being referred)
    const refereeMailOptions = {
      from: `"Accredian Learning" <${process.env.GMAIL_USER}>`,
      to: referralData.refereeEmail,
      subject: `${referralData.referrerName} has recommended a course for you!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(45deg, #2196F3, #21CBF3); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">You've Been Referred!</h1>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333;">Hello ${referralData.refereeName},</p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.5;">
              Great news! ${referralData.referrerName} thinks you would be interested in our course:
            </p>
            
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #2196F3; margin: 0;">${referralData.courseName}</h2>
              <p style="color: #666; margin: 10px 0 0 0;">Course ID: ${referralData.courseId}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="
                background: linear-gradient(45deg, #2196F3, #21CBF3);
                color: white;
                padding: 12px 25px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                display: inline-block;
              ">View Course Details</a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              This referral was sent by ${referralData.referrerName} (${referralData.referrerEmail})
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666;">
            <p>© 2024 Accredian Learning. All rights reserved.</p>
          </div>
        </div>
      `
    };

    // Email template for the referrer (person who referred)
    const referrerMailOptions = {
      from: `"Accredian Learning" <${process.env.GMAIL_USER}>`,
      to: referralData.referrerEmail,
      subject: 'Thank you for your referral!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(45deg, #2196F3, #21CBF3); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You!</h1>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333;">Hello ${referralData.referrerName},</p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.5;">
              Thank you for referring ${referralData.refereeName} to our course:
            </p>
            
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #2196F3; margin: 0;">${referralData.courseName}</h2>
              <p style="color: #666; margin: 10px 0 0 0;">Course ID: ${referralData.courseId}</p>
            </div>
            
            <p style="color: #333; line-height: 1.5;">
              We've sent an invitation email to ${referralData.refereeName}. You'll be notified when they enroll in the course.
            </p>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="color: #2e7d32; margin: 0;">
                <strong>Referral Status:</strong> Pending
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666;">
            <p>© 2024 Accredian Learning. All rights reserved.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(refereeMailOptions),
      transporter.sendMail(referrerMailOptions)
    ]);

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

module.exports = { sendReferralEmail }; 