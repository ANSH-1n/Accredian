

const { PrismaClient } = require('@prisma/client');
const { sendReferralEmail } = require('../utils/emailService');
const { validateReferralData } = require('../utils/validation');

const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  try {
    console.log('Received referral data:', req.body);

    const validation = validateReferralData(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validation.errors 
      });
    }

    const {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseId,
      courseName
    } = req.body;

    // Create referral in database
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        courseId: parseInt(courseId),
        courseName
      }
    });

    console.log('Referral created:', referral);

    // Send email notification
    const emailSent = await sendReferralEmail({
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseId,
      courseName
    });

    console.log('Email sent status:', emailSent);

    res.status(201).json({
      message: 'Referral created successfully',
      emailSent: emailSent,
      data: referral
    });

  } catch (error) {
    console.error('Referral creation failed:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

module.exports = {
  createReferral
}; 